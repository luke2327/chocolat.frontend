import type { ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import Container from '@/components/layouts/Container';
import { AppConfig } from '@/constants/AppConfig';
import { commonState, modalState } from '@/stores/common';

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

  return (
    <Container>
      <div className="w-full px-1 text-gray-700 antialiased">
        {props.meta}
        <div className="mx-auto">
          <div className="border-b border-gray-300">
            <div className="py-2">
              <div className="flex items-center justify-between">
                <Title className="text-3xl font-bold" onClick={changeStep}>
                  {props.title}
                </Title>
                <div className="cursor-pointer">
                  <RandomFlower onClick={openRightSidePannel} />
                </div>
              </div>

              <div className="m-0 text-xl">{props.description}</div>
            </div>
          </div>

          <div className="py-2">{props.children}</div>

          <div className="en-font border-t border-gray-300 py-8 text-center text-sm">
            © Copyright {new Date().getFullYear()} {AppConfig.title}.
          </div>
        </div>
      </div>
    </Container>
  );
};

const Title = styled.div`
  background: #615f51;
  background: linear-gradient(to top, #615f51 19%, #06031f 79%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
