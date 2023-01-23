// step2

import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import {
  aspectRatioX,
  aspectRatioY,
  messageMaxLength,
} from '@/constants/components';
import { commonState } from '@/stores/common';

import OrdinaryComponent from '../common/OrdinaryComponent';

const WriteMessage: React.FC = () => {
  const frameBackgroundRef = useRef<HTMLDivElement>(null);
  const [common] = useRecoilState(commonState);
  const [dragable, setDragable] = useState(false);
  const [value, setValue] = useState('');
  const { t } = useTranslation();
  const [maxHeightMessage, setMaxHeightMessage] = useState(0);
  const [bestHeightMessage, setBestHeightMessage] = useState(0);
  const [maxWidthMessage, setMaxWidthMessage] = useState(0);
  const [bestWidthMessage, setBestWidthMessage] = useState(0);

  useEffect(() => {
    if (frameBackgroundRef.current) {
      setMaxHeightMessage(frameBackgroundRef.current.clientHeight - 80);
      setBestHeightMessage(frameBackgroundRef.current.clientHeight - 80);
      setMaxWidthMessage(frameBackgroundRef.current.clientWidth - 60);
      setBestWidthMessage(frameBackgroundRef.current.clientWidth - 60);
    }
  });

  return (
    <div>
      <FrameBackground
        ref={frameBackgroundRef}
        backgroundURI={common.letterFrameImgURI}
      >
        <div className="flex items-center justify-center">
          <Draggable disabled={dragable}>
            <TextArea
              maxLength={messageMaxLength}
              autoFocus
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{
                backgroundColor: 'transparent',
                maxHeight: maxHeightMessage,
                height: bestHeightMessage,
                maxWidth: maxWidthMessage,
                width: bestWidthMessage,
              }}
            />
          </Draggable>
        </div>
      </FrameBackground>
      <div className="flex justify-between pt-1">
        <div className="flex items-center">
          <OrdinaryComponent.Button
            onClick={() => setDragable(!dragable)}
            className="mr-2"
          >
            {dragable ? t('common.sizeCustom') : t('common.drag')}
          </OrdinaryComponent.Button>
          <div>
            {value.length}/{messageMaxLength}
          </div>
        </div>
        <div>
          <OrdinaryComponent.Button>
            {t('common.next')}
          </OrdinaryComponent.Button>
        </div>
      </div>
    </div>
  );
};

export default WriteMessage;

const FrameBackground = styled.div<{ backgroundURI: string }>`
  border-radius: 12px;
  box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 0.25);
  background: url(${(props) => props.backgroundURI});
  aspect-ratio: ${aspectRatioX} / ${aspectRatioY};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  margin: 12px;
`;

const TextArea = styled.textarea``;
