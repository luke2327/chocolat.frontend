import React from 'react';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ className, ...rest }) => (
  <button
    {...rest}
    className={`${className} flex items-center justify-center rounded border px-2 py-1`}
    style={{
      borderColor: '#d2d6dd',
      background: `
        linear-gradient(
          90deg,
          rgb(255 246 242 / 30%) 11%,
          rgb(245 249 247 / 62%) 100%
        )
      `,
    }}
  ></button>
);

const Div: React.FC<DivProps> = ({ className, ...rest }) => (
  <div
    {...rest}
    className={`${className} flex items-center justify-center rounded border`}
    style={{
      borderColor: '#d2d6dd',
      background: `
        linear-gradient(
          90deg,
          rgb(255 246 242 / 30%) 11%,
          rgb(245 249 247 / 62%) 100%
        )
      `,
    }}
  ></div>
);

const OrdinaryComponent = {
  Button,
  Div,
};

export default OrdinaryComponent;
