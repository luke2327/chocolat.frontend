import { useState } from 'react';
import styled from 'styled-components';

import { letterFrame } from '@/constants/temp';

const LetterIcons: React.FC = () => {
  const [isShowing, setIsShowing] = useState(true);
  const selectFrame = async () => {
    setIsShowing(!isShowing);
  };

  return (
    <Frame
      onClick={selectFrame}
      className="
        transform cursor-pointer items-center rounded-lg border-solid
        border-slate-300 bg-black bg-opacity-20 p-1 text-sm font-medium
        text-white transition hover:scale-105 hover:bg-opacity-30
        focus:outline-none active:bg-opacity-40"
    >
      <Img src={letterFrame} alt="frame" />
    </Frame>
  );
};

export default LetterIcons;

const Frame = styled.div`
  border-width: 4px;
  opacity: 0.5;
  transition: all 0.2s;
  &:hover {
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 6rem;
`;
