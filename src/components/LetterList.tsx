import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { letterFrameList } from '@/constants/temp';
import { letterState } from '@/stores/common';

import OrdinaryTransition from './layouts/OrdinaryTransition';
import LetterIcons from './templates/LetterIcons';

const LetterList = () => {
  const [listState, setListState] = useState(letterFrameList);
  const letter = useRecoilValue(letterState);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    setListState(
      letterFrameList.filter(
        ({ type }) =>
          letter.selectedType === 'all' || type === letter.selectedType
      )
    );

    const timer = setTimeout(() => setShow(true), 500);

    return () => clearTimeout(timer);
  }, [letter.selectedKeywordId]);

  return (
    <OrdinaryTransition showProps={show}>
      <div className={'flex flex-wrap'} style={{ gap: '10px 15px' }}>
        {listState.map((frame, idx) => (
          <div key={idx} className="mb-2 flex justify-around space-x-2">
            <LetterIcons src={frame.imgUrl} />
          </div>
        ))}
      </div>
    </OrdinaryTransition>
  );
};
export default LetterList;
