import type { ReactNode } from 'react';

type Props = {
  className: string;
  children: ReactNode;
};

export const ChildComponent = ({ className, children }: Props) => (
  <div className={className}>{children}</div>
);
