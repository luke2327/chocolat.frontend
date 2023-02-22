import { Transition } from '@headlessui/react';

type OrdinaryTransitionProps = {
  showProps: boolean;
  children?: React.ReactNode;
  className?: string;
};

const OrdinaryTransition: React.FC<OrdinaryTransitionProps> = ({
  showProps,
  children,
  className,
}) => {
  return (
    <Transition
      show={showProps}
      appear={true}
      enter="transition-opacity duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-1500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={className}
    >
      {children}
    </Transition>
  );
};

export default OrdinaryTransition;
