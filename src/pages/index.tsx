import { useRecoilValue } from 'recoil';

import Breadcrumbs from '@/components/Breadcrumbs';
import LetterFrameSelectModal from '@/components/common/modals/LetterFrameSelectModal';
import RightSidePannelModal from '@/components/common/modals/RightSidePannelModal';
import SelectBox from '@/components/common/SelectBox';
import MainBanner from '@/components/layouts/MainBanner';
import OrdinaryTransition from '@/components/layouts/OrdinaryTransition';
import withLayout from '@/components/layouts/withLayout';
import LetterList from '@/components/LetterList';
import { commonState } from '@/stores/common';

const Index = () => {
  const common = useRecoilValue(commonState);

  return (
    <div suppressHydrationWarning={true}>
      {common.step === 0 && (
        <OrdinaryTransition showProps={common.step === 0}>
          <MainBanner />
        </OrdinaryTransition>
      )}
      {common.step === 1 && (
        <OrdinaryTransition showProps={common.step === 1}>
          <Breadcrumbs />
          <SelectBox />
          <LetterList />
        </OrdinaryTransition>
      )}

      <LetterFrameSelectModal />
      <RightSidePannelModal />
    </div>
  );
};

export default withLayout(Index);
