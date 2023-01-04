import { useState } from 'react';

import LetterFrameSelectModal from '@/components/common/modals/LetterFrameSelectModal';
import RightSidePannelModal from '@/components/common/modals/RightSidePannelModal';
import SelectBox from '@/components/common/SelectBox';
import LetterList from '@/components/LetterList';
import { Main } from '@/components/templates/Main';
import type { Keyword } from '@/constants/keyword';
import { keyword } from '@/constants/keyword';
import { useLocale } from '@/hooks/useLocale';
import { Meta } from '@/layouts/Meta';

const Index = () => {
  const { t } = useLocale();
  const [listItem, setListItem] = useState(keyword[0] as Keyword);
  const onChange = (value: Keyword) => {
    setListItem(value);
  };

  return (
    <Main meta={<Meta title={t.title} description={t.description} />}>
      <SelectBox onChange={onChange} value={listItem} />
      <LetterList className={'mt-4'} />
      <LetterFrameSelectModal />
      <RightSidePannelModal />
    </Main>
  );
};

export default Index;
