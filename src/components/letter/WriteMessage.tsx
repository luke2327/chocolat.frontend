// step2

import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { translateLanguage } from '@/apis';
import {
  aspectRatioX,
  aspectRatioY,
  messageMaxLength,
} from '@/constants/components';
import { commonState, letterState } from '@/stores/common';

import OrdinaryComponent from '../common/OrdinaryComponent';

const WriteMessage: React.FC = () => {
  const frameBackgroundRef = useRef<HTMLDivElement>(null);
  const [common] = useRecoilState(commonState);
  const [letter, setLetter] = useRecoilState(letterState);
  const [dragable, setDragable] = useState(true);
  const [oldValue, setOldValue] = useState('');
  const [maxHeightMessage, setMaxHeightMessage] = useState(0);
  const [bestHeightMessage, setBestHeightMessage] = useState(0);
  const [maxWidthMessage, setMaxWidthMessage] = useState(0);
  const [bestWidthMessage, setBestWidthMessage] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    if (frameBackgroundRef.current) {
      setMaxHeightMessage(frameBackgroundRef.current.clientHeight - 80);
      setBestHeightMessage(frameBackgroundRef.current.clientHeight - 80);
      setMaxWidthMessage(frameBackgroundRef.current.clientWidth - 60);
      setBestWidthMessage(frameBackgroundRef.current.clientWidth - 60);
    }
  });

  const translateLanguate = async () => {
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
              value={letter.letters}
              onChange={(e) =>
                setLetter({
                  ...letter,
                  letters: e.target.value,
                })
              }
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
      <div className="flex justify-between py-1">
        <div className="flex items-center">
          <OrdinaryComponent.Button
            onClick={() => setDragable(!dragable)}
            className="mr-2"
          >
            {dragable ? t('common.sizeCustom') : t('common.drag')}
          </OrdinaryComponent.Button>
          <OrdinaryComponent.Button
            onClick={translateLanguate}
            className="mr-2"
          >
            {t('common.translate')}
          </OrdinaryComponent.Button>
          <OrdinaryComponent.Button onClick={resetValueToOld} className="mr-2">
            {t('common.back')}
          </OrdinaryComponent.Button>
          <OrdinaryComponent.Button onClick={clearMessage} className="mr-2">
            {t('common.clear')}
          </OrdinaryComponent.Button>
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            {letter.letters.length}/{messageMaxLength}
          </div>
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
  box-shadow: 4px 4px 2px 0 rgba(0, 0, 0, 0.25);
  background: url(${(props) => props.backgroundURI});
  aspect-ratio: ${aspectRatioX} / ${aspectRatioY};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  margin: 12px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const TextArea = styled.textarea``;
