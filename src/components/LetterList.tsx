import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { letterFrameList } from '@/constants/temp';
import { letterState } from '@/stores/common';

import SecondaryTransition from './layouts/SecondaryTransition';
import LetterIcons from './templates/LetterIcons';

const LetterList = () => {
  const [listState, setListState] = useState<typeof letterFrameList>([]);
  const letter = useRecoilValue(letterState);

  useEffect(() => {
    setListState([]);
    setListState(
      letterFrameList.filter(
        ({ type }) =>
          letter.selectedType === 'all' || type === letter.selectedType
      )
    );
  }, [letter.selectedKeywordId]);

  return (
    <div className={'flex flex-wrap'} style={{ gap: '10px 15px' }}>
      {listState.map((frame, idx) => (
        <SecondaryTransition
          key={idx}
          className="mb-2 flex justify-around space-x-2"
        >
          <LetterIcons src={frame.imgUrl} />
        </SecondaryTransition>
      ))}
    </div>
  );
};
export default LetterList;
