import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import { translateLanguage } from '@/apis';
import OrdinaryComponent from '@/components/common/OrdinaryComponent';
import { messageMaxLength } from '@/constants/components';
import { letterState } from '@/stores/common';

const FooterMenu = () => {
  const { t } = useTranslation();
  const [letter, setLetter] = useRecoilState(letterState);
  const [oldValue, setOldValue] = useState('');

  const setDragable = async () => {
    setLetter({
      ...letter,
      dragable: !letter.dragable,
    });
  };

  const translate = async () => {
    if (!letter.letters) {
      console.log('no contents');
      return;
    }
    setOldValue(letter.letters);

    const result = await translateLanguage(letter.letters);

    setLetter({
      ...letter,
      letters: result,
    });
  };

  const resetValueToOld = () => {
    setLetter({
      ...letter,
      letters: oldValue,
    });
  };

  const clearMessage = () => {
    setLetter({
      ...letter,
      letters: '',
    });
  };

  return (
    <div className="flex justify-between py-1">
      <div className="flex items-center">
        <OrdinaryComponent.Button onClick={setDragable} className="mr-1">
          {letter.dragable ? t('common.sizeCustom') : t('common.drag')}
        </OrdinaryComponent.Button>
        <OrdinaryComponent.Button onClick={translate} className="mr-1">
          {t('common.translate')}
        </OrdinaryComponent.Button>
        <OrdinaryComponent.Button onClick={resetValueToOld} className="mr-1">
          {t('common.back')}
        </OrdinaryComponent.Button>
        <OrdinaryComponent.Button onClick={clearMessage} className="mr-1">
          {t('common.clear')}
        </OrdinaryComponent.Button>
      </div>
      <div className="flex items-center">
        <div className="mr-2">
          {letter.letters.length}/{messageMaxLength}
        </div>
        <OrdinaryComponent.Button>{t('common.next')}</OrdinaryComponent.Button>
      </div>
    </div>
  );
};

export default FooterMenu;
