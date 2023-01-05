import LetterFrameSelectModal from '@/components/common/modals/LetterFrameSelectModal';
import RightSidePannelModal from '@/components/common/modals/RightSidePannelModal';
import SelectBox from '@/components/common/SelectBox';
import withLayout from '@/components/layouts/withLayout';
import LetterList from '@/components/LetterList';

const Index = () => {
  return (
    <div suppressHydrationWarning={true}>
      <SelectBox />
      <LetterList className={'mt-4'} />
      <LetterFrameSelectModal />
      <RightSidePannelModal />
    </div>
  );
};

export default withLayout(Index);
