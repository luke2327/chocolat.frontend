import { useRecoilValue } from 'recoil';

import Breadcrumbs from '@/components/Breadcrumbs';
import LetterFrameSelectModal from '@/components/common/modals/LetterFrameSelectModal';
import RightSidePannelModal from '@/components/common/modals/RightSidePannelModal';
import SelectBox from '@/components/common/SelectBox';
import MainBanner from '@/components/layouts/MainBanner';
import withLayout from '@/components/layouts/withLayout';
import LetterList from '@/components/LetterList';
import { commonState } from '@/stores/common';

const Index = () => {
  const common = useRecoilValue(commonState);

  return (
    <div suppressHydrationWarning={true}>
      {common.step === 0 && <MainBanner />}
      {common.step === 1 && (
        <>
          <Breadcrumbs />
          <SelectBox />
          <LetterList />
        </>
      )}
      <LetterFrameSelectModal />
      <RightSidePannelModal />
    </div>
  );
};

export default withLayout(Index);
