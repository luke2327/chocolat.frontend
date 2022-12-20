import { SelectMenu } from '@/components/SelectMenus';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="ショコラ" description="" />}>
      <p className="m-0 text-sm">
        ショコラは日本と韓国を繋げてくれるアプリです
      </p>
      <SelectMenu />
    </Main>
  );
};

export default Index;
