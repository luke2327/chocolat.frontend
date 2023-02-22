import type { ReactNode } from 'react';
import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { getLetterTemplate } from '@/apis';
import TemplateSelectButton from '@/components/letter/TemplateSelectButton';
import { AppConfig } from '@/constants/AppConfig';
import useDimensions from '@/hooks/useDimensions';
import { commonState, letterTemplateState, modalState } from '@/stores/common';

import Breadcrumbs from '../Breadcrumbs';
import SelectBox from '../common/SelectBox';
import { RandomFlower } from '../RandomFlower';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  title: string;
  description: string;
};

export const Main = (props: IMainProps) => {
  const [letterTemplate, setLetterTemplate] =
    useRecoilState(letterTemplateState);
  const [modal, setModal] = useRecoilState(modalState);
  const [common, setCommon] = useRecoilState(commonState);
  const { height } = useDimensions();
  const containerRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const openRightSidePannel = () => {
    setModal({
      ...modal,
      rightSidePannelModal: true,
    });
  };

  const changeStep = () => {
    setCommon({
      ...common,
      step: 0,
    });
  };

  useEffect(() => {
    const containerElem = containerRef.current;
    const servicesElem = serviceRef.current;
    const headerElem = headerRef.current;
    const footerElem = footerRef.current;

    if (!containerElem || !headerElem || !footerElem || !servicesElem) {
      return;
    }

    const serviceHeight =
      height - (headerElem.clientHeight + footerElem.clientHeight) + 30;

    servicesElem.style.maxHeight = `${serviceHeight}px`;
  }, [common.step]);

  useEffect(() => {
    getLetterTemplate().then((re) => {
      setLetterTemplate(re);
    });
  }, []);

  return (
    <div
      className="xs:w-5 relative mx-auto min-[500px]:w-[25rem] sm:w-[25rem] md:w-[25rem] lg:w-[25rem]"
      ref={containerRef}
    >
      <div className="w-full px-2.5 text-gray-700 antialiased">
        {props.meta}
        <div className="mx-auto">
          <div ref={headerRef} id={'main'} className={'pb-3'}>
            <div className="py-2">
              <div className="flex items-center justify-between">
                <Title
                  className="cursor-pointer text-3xl font-bold"
                  onClick={changeStep}
                >
                  {props.title}
                </Title>
                <div className="cursor-pointer">
                  <RandomFlower onClick={openRightSidePannel} />
                </div>
              </div>

              {common.step === 0 && (
                <div className="m-0 text-xl">{props.description}</div>
              )}
            </div>
            {common.step > 0 && (
              <>
                <Breadcrumbs />
                {common.step === 1 && <SelectBox />}
              </>
            )}
          </div>
          <div
            className="overflow-y-scroll py-2"
            ref={serviceRef}
            id={'mainWrapper'}
          >
            {props.children}
            {common.step === 2 &&
              letterTemplate &&
              letterTemplate.map(({ ja_text, ko_text }, idx) => (
                <TemplateSelectButton key={idx} ja={ja_text} ko={ko_text} />
              ))}
            <div
              ref={footerRef}
              style={{
                borderTop: '1px solid rgb(210, 214, 221)',
              }}
              className="en-font border-t py-3 text-center text-sm"
            >
              © Copyright {new Date().getFullYear()} {AppConfig.title}.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Title = styled.div`
  color: #988282;
  -webkit-background-clip: text;
`;
