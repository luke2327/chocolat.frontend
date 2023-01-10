// step2

import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { commonState } from '@/stores/common';

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
  const [value, setValue] = useState('');
  const textareaRef = useAutoResizeTextArea(value);

  return (
    <FrameBackground backgroundURI={common.letterFrameImgURI}>
      <div className="flex items-center justify-center">
        <Draggable>
          <ReactTextareaAutosize
            ref={textareaRef}
            maxRows={10}
            maxLength={10}
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Draggable>
      </div>
    </FrameBackground>
  );
};

export default WriteMessage;

const FrameBackground = styled.div<{ backgroundURI: string }>`
  background: url(${(props) => props.backgroundURI});
  aspect-ratio: 1 / 1.494;
  background-size: contain;
  background-repeat: no-repeat;
  width: 351px;
  max-height: 500px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

// const Textarea = styled.textarea`
//   background-color: transparent;
//   border: 1px solid black;
//   &:focus {
//     outline: none;
//     border: 1px solid black;
//     box-shadow: none;
//   }
// `;
