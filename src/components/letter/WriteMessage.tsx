// step2

import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { useTranslation } from 'react-i18next';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import {
  aspectRatioX,
  aspectRatioY,
  messageMaxLength,
} from '@/constants/components';
import { commonState } from '@/stores/common';

import OrdinaryComponent from '../common/OrdinaryComponent';

function useAutoResizeTextArea(value: string | undefined) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const { borderTopWidth, borderBottomWidth, paddingTop, paddingBottom } =
      getComputedStyle(element);

    element.style.height = 'auto';
    element.style.height = `calc(${element.scrollHeight}px + ${paddingTop} + ${paddingBottom} + ${borderTopWidth} + ${borderBottomWidth})`;
  }, [value]);

  return ref;
}

const WriteMessage: React.FC = () => {
  const [common] = useRecoilState(commonState);
  const [dragable, setDragable] = useState(false);
  const [value, setValue] = useState('');
  const textareaRef = useAutoResizeTextArea(value);
  const { t } = useTranslation();

  return (
    <div>
      <FrameBackground backgroundURI={common.letterFrameImgURI}>
        <div className="flex items-center justify-center">
          <Draggable disabled={dragable}>
            <ReactTextareaAutosize
              ref={textareaRef}
              maxLength={messageMaxLength}
              autoFocus
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{ backgroundColor: 'transparent' }}
            />
          </Draggable>
        </div>
      </FrameBackground>
      <div className="flex pt-1">
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
    </div>
  );
};

export default WriteMessage;

const FrameBackground = styled.div<{ backgroundURI: string }>`
  background: url(${(props) => props.backgroundURI});
  aspect-ratio: ${aspectRatioX} / ${aspectRatioY};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 351px;
  max-height: 500px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
