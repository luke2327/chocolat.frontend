import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { AppConfig } from '@/constants/AppConfig';
import useDimensions from '@/hooks/useDimensions';
import { commonState, modalState } from '@/stores/common';

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

    console.log(
      height,
      headerElem.clientHeight,
      footerElem.clientHeight,
      height - (headerElem.clientHeight + footerElem.clientHeight) - 18
    );

    const serviceHeight =
      height - (headerElem.clientHeight + footerElem.clientHeight) - 30;

    servicesElem.style.maxHeight = `${serviceHeight}px`;
  }, [common.step]);

  return (
    <div className="xs:w-5 relative mx-auto p-2 lg:w-2/6" ref={containerRef}>
      <div className="w-full px-1 text-gray-700 antialiased">
        {props.meta}
        <div className="mx-auto">
          <div ref={headerRef}>
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

              <div className="m-0 text-xl">{props.description}</div>
            </div>
            {common.step > 0 && (
              <>
                <Breadcrumbs />
                {common.step === 1 && <SelectBox />}
              </>
            )}
          </div>
          <div className="overflow-y-scroll py-2" ref={serviceRef}>
            {props.children}
          </div>
          <div
            ref={footerRef}
            className="en-font border-t border-gray-300 py-4 text-center text-sm"
          >
            © Copyright {new Date().getFullYear()} {AppConfig.title}.
          </div>
        </div>
      </div>
    </div>
  );
};

const Title = styled.div`
  background: #615f51;
  background: linear-gradient(to top, #615f51 19%, #06031f 79%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
