import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import { breadCrumbSize } from '@/constants/components';
import { commonState } from '@/stores/common';

import OrdinaryComponent from './common/OrdinaryComponent';

const Breadcrumbs: React.FC = () => {
  const [common, setCommon] = useRecoilState(commonState);
  const { t, i18n } = useTranslation();
  const selectTab = (tab: number) => {
    setCommon({
      ...common,
      step: tab + 1,
    });
  };

  return (
    <div className="flex">
      {common.stepList.map(({ label, labelEn }, idx) => (
        <div
          key={idx}
          className="flex items-center"
          onClick={idx < common.step ? () => selectTab(idx) : () => {}}
        >
          <OrdinaryComponent.Button
            className="flex-col py-1"
            style={{
              opacity: idx < common.step ? '1' : '0.5',
              cursor: idx < common.step ? 'pointer' : 'unset',
              width: breadCrumbSize,
            }}
          >
            <p className="en-font text-lg leading-none">{t(labelEn)}</p>
            {i18n.language === 'ja' ? (
              <p className="pb-1 text-sm font-bold leading-none">{t(label)}</p>
            ) : (
              <p className="text-lg leading-none tracking-widest">{t(label)}</p>
            )}
          </OrdinaryComponent.Button>
          {idx < common.stepList.length - 1 && (
            <span className="en-font px-1">&gt;</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
