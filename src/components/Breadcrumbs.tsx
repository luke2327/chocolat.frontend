import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { commonState } from '@/stores/common';

const Breadcrumbs: React.FC = () => {
  const [common] = useRecoilState(commonState);
  const { t, i18n } = useTranslation();

  return (
    <div className="flex">
      {common.stepList.map(({ label, labelEn }, idx) => (
        <div key={idx} className="flex items-center">
          <StepFrame
            className="flex flex-col items-center justify-center rounded border py-1"
            style={{ width: 114 }}
          >
            <p className="en-font text-lg leading-none">{t(labelEn)}</p>
            {i18n.language === 'ja' ? (
              <p className="pb-1 text-sm font-bold leading-none">{t(label)}</p>
            ) : (
              <p className="text-lg leading-none tracking-widest">{t(label)}</p>
            )}
          </StepFrame>
          {idx < common.stepList.length - 1 && (
            <span className="en-font px-1">&gt;</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;

const StepFrame = styled.div`
  border-color: #d2d6dd;
  background: linear-gradient(
    90deg,
    rgb(255 246 242 / 30%) 11%,
    rgb(245 249 247 / 62%) 100%
  );
`;
