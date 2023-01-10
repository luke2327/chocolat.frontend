import type { ReactNode } from 'react';
import styled from 'styled-components';

const SecondaryTransition = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return <Frame className={className}>{children}</Frame>;
};

export default SecondaryTransition;

const Frame = styled.div`
  animation: secondary-transition 1s linear 0s;
`;
