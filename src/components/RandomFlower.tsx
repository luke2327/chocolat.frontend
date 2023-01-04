import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { flower } from '@/constants/flower';
import { getRandomInt } from '@/utils/common';

type RandomFlowerProps = {
  onClick: () => void;
};

export const RandomFlower: React.FC<RandomFlowerProps> = ({ onClick }) => {
  const [flowerSrc, setFlowerSrc] = useState<string>('');

  useEffect(() => {
    const randomIdx = getRandomInt(4);
    const flowerInfos = flower[randomIdx] as string;

    setFlowerSrc(flowerInfos);
  }, []);
  return (
    <div>
      <FlowerIcon
        onClick={onClick}
        src={flowerSrc}
        alt="Main menu flower images."
      />
    </div>
  );
};

const FlowerIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;
