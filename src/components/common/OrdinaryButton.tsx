import styled from 'styled-components';

import type { ElementProps } from '../types';

const OrdinaryButton: React.FC<ElementProps> = ({ className, ...rest }) => {
  return (
    <Frame
      {...rest}
      className={`${className} flex items-center justify-center rounded border`}
    ></Frame>
  );
};

const Frame = styled.div`
  border-color: #d2d6dd;
  background: linear-gradient(
    90deg,
    rgb(255 246 242 / 30%) 11%,
    rgb(245 249 247 / 62%) 100%
  );
`;

export default OrdinaryButton;
