type Components = {
  div: HTMLDivElement;
  button: HTMLButtonElement;
};

export type ElementProps<T extends keyof Components = 'div'> =
  React.HTMLAttributes<Components[T]>;
