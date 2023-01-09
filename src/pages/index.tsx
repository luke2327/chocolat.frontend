import { useRecoilValue } from 'recoil';

import LetterFrameSelectModal from '@/components/common/modals/LetterFrameSelectModal';
import RightSidePannelModal from '@/components/common/modals/RightSidePannelModal';
import MainBanner from '@/components/layouts/MainBanner';
import OrdinaryTransition from '@/components/layouts/OrdinaryTransition';
import withLayout from '@/components/layouts/withLayout';
import LetterList from '@/components/LetterList';
import { commonState } from '@/stores/common';

const Index = () => {
  const { step } = useRecoilValue(commonState);

  return (
    <div suppressHydrationWarning={true}>
      {step === 0 && (
        <OrdinaryTransition showProps={step === 0}>
          <MainBanner />
        </OrdinaryTransition>
      )}
      {step === 1 && (
        <OrdinaryTransition showProps={step === 1}>
          <LetterList />
        </OrdinaryTransition>
      )}

      <LetterFrameSelectModal />
      <RightSidePannelModal />
    </div>
  );
};

export default withLayout(Index);
