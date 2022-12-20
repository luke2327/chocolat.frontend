import { SelectMenu } from '@/components/SelectMenus';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="ショコラ" description="" />}>
      <SelectMenu />
    </Main>
  );
};

export default Index;
