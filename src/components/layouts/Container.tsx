import type { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="cover p-2">{children}</div>;
};

export default Container;
