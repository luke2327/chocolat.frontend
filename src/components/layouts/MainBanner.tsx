import Image from 'next/image';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { commonState } from '@/stores/common';

const MainBanner: React.FC = () => {
  const [common, setCommon] = useRecoilState(commonState);
  const imageClick = () => {
    setCommon({
      ...common,
      step: 1,
    });
  };

  return (
    <MainBannerFrame>
      <MainBannerImage
        src="/assets/images/temp-flower-removebg-preview.png"
        width={340}
        height={340}
        alt="Chocolat main banner images"
        style={{ position: 'absolute' }}
        onClick={imageClick}
      />
    </MainBannerFrame>
  );
};

export default MainBanner;

const MainBannerFrame = styled.div`
  height: calc(100vh - 312px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainBannerImage = styled(Image)`
  filter: blur(2px);
  opacity: 0.22;
  transition: linear all 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
    filter: blur(0);
  }
`;
