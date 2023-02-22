import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import OrdinaryComponent from '@/components/common/OrdinaryComponent';
import { letterState } from '@/stores/common';

const TemplateSelectButton: React.FC<
  Omit<React.ComponentProps<'div'>, 'className'> & { ja: string; ko: string }
> = (props) => {
  const [letter, setLetter] = useRecoilState(letterState);
  const { i18n } = useTranslation();
  const isJa = i18n.language === 'ja';

  const addTemplate = (text: string) => {
    setLetter({
      ...letter,
      letters: letter.letters + text,
    });
  };

  return (
    <div className={'flex'}>
      <OrdinaryComponent.Button
        className={`my-2 mx-auto w-11/12 rounded-r-none border-r-0 px-1 ${
          isJa ? 'ja-font tracking-tight' : 'ko-font text-xl'
        }`}
        onClick={() => addTemplate(isJa ? props.ja : props.ko)}
      >
        {isJa ? props.ja : props.ko}
      </OrdinaryComponent.Button>
      <OrdinaryComponent.Button
        className={`my-2 mx-auto w-11/12 rounded-l-none px-1 ${
          isJa ? 'ko-font text-xl' : 'ja-font tracking-tight'
        }`}
        onClick={() => addTemplate(isJa ? props.ko : props.ja)}
      >
        {isJa ? props.ko : props.ja}
      </OrdinaryComponent.Button>
    </div>
  );
};

export default TemplateSelectButton;
