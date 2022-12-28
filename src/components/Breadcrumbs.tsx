import React from 'react';

export interface Props {
  children: React.ReactNode;
}

const Breadcrumbs: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {React.Children.map(children, (step) => (
        <span className="text-sm">
          {step}
          {' > '}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
