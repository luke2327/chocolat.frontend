import type { ReactNode } from 'react';
import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { getLetterTemplate } from '@/apis';
import Footer from '@/components/layouts/Footer';
import FooterMenu from '@/components/layouts/FooterMenu';
import TemplateSelectButton from '@/components/letter/TemplateSelectButton';
import { footerMenuHeight } from '@/constants/components';
import useDimensions from '@/hooks/useDimensions';
import {
  commonState,
  elemRefsState,
  letterTemplateState,
  modalState,
} from '@/stores/common';

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
  const [elemRefs, setElemRefs] = useRecoilState(elemRefsState);
  const { height } = useDimensions();

  /** Refs */
  const containerRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

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

    if (!containerElem || !headerElem || !servicesElem) {
      return;
    }

    const footerHeight = footerRef?.current?.clientHeight || 0;

    setElemRefs({
      ...elemRefs,
      header: {
        height: headerElem.clientHeight,
        width: headerElem.clientWidth,
      },
    });

    const adjustHeight = common.step === 2 ? footerMenuHeight : 0;
    const serviceHeight =
      height - headerElem.clientHeight - adjustHeight - footerHeight - 3;

    servicesElem.style.maxHeight = `${serviceHeight}px`;
    servicesElem.style.minHeight = `${serviceHeight}px`;

    if (common.step === 0) {
      servicesElem.style.display = 'flex';
      servicesElem.style.justifyContent = 'center';
      servicesElem.style.flexDirection = 'column';
    } else if (common.step !== 0) {
      servicesElem.style.display = 'flex';
      servicesElem.style.justifyContent = 'flex-start';
      servicesElem.style.flexDirection = 'column';
    }
  }, [common.step]);

  useEffect(() => {
    getLetterTemplate()
      .then((re) => {
        setLetterTemplate(re);
      })
      .catch((e) => {
        console.log('Server error |', e.message);
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
          <div ref={mainRef}>
            <div ref={headerRef} id={'main'} className={'pb-1'}>
              <div>
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
              className="overflow-y-scroll"
              ref={serviceRef}
              id={'mainWrapper'}
            >
              {props.children}
              {common.step === 2 && letterTemplate && (
                <div className={'overflow-y-scroll'}>
                  {letterTemplate.map(({ ja_text, ko_text }, idx) => (
                    <TemplateSelectButton key={idx} ja={ja_text} ko={ko_text} />
                  ))}
                </div>
              )}
            </div>
            {common.step === 0 && <Footer ref={footerRef} />}
          </div>
          {common.step === 2 && <FooterMenu />}
        </div>
      </div>
    </div>
  );
};

const Title = styled.div`
  color: #988282;
  -webkit-background-clip: text;
`;
