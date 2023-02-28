// step2

import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import {
  aspectRatioX,
  aspectRatioY,
  messageMaxLength,
} from '@/constants/components';
import { commonState, letterState } from '@/stores/common';

const WriteMessage: React.FC = () => {
  const frameBackgroundRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [common] = useRecoilState(commonState);
  const [letter, setLetter] = useRecoilState(letterState);
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
  }, []);

  return (
    <div>
      <FrameBackground
        ref={frameBackgroundRef}
        backgroundURI={common.letterFrameImgURI}
      >
        <div className="flex items-center justify-center">
          <Draggable disabled={letter.dragable}>
            <TextArea
              ref={textAreaRef}
              id={'letter-textarea'}
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
  margin: 0 12px 12px 12px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const TextArea = styled.textarea``;
