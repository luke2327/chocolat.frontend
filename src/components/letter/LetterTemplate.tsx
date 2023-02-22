import React from 'react';

import OrdinaryComponent from '@/components/common/OrdinaryComponent';
import OrdinaryTransition from '@/components/layouts/OrdinaryTransition';

const LetterTemplate: React.FC<
  Omit<React.ComponentProps<'div'>, 'className'>
> = (props) => {
  return (
    <div
      className={
        'absolute z-10 flex items-center justify-center overflow-y-scroll bg-amber-50'
      }
      {...props}
    >
      <OrdinaryTransition
        showProps={true}
        className={'flex h-1/4 w-3/4 items-center justify-center'}
      >
        <div
          className={'h-full w-full rounded bg-gray-700'}
          style={{
            backgroundColor: 'rgb(115 105 105 / 40%)',
          }}
        >
          <OrdinaryComponent.Button className={'my-2 mx-auto w-11/12 px-1'}>
            Write Message
          </OrdinaryComponent.Button>
          <OrdinaryComponent.Button className={'my-2 mx-auto w-11/12 px-1'}>
            Select message template
          </OrdinaryComponent.Button>
        </div>
      </OrdinaryTransition>
    </div>
  );
};

export default LetterTemplate;
