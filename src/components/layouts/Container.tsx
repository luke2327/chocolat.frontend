import type { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="xs:w-5 relative mx-auto p-2 lg:w-64">{children}</div>;
};

export default Container;
