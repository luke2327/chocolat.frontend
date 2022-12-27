import { useQuery } from 'react-query';

import Breadcrumbs from '@/components/Breadcrumbs';
import LetterList from '@/components/LetterList';
import { Main } from '@/components/templates/Main';
import { fetchPosts } from '@/hooks/api/usePosts';
import useInput from '@/hooks/useInput';
import { Meta } from '@/layouts/Meta';

const Index = () => {
  const keyword = useInput('');
  const { isLoading, error } = useQuery<any, Error>('posts', () =>
    fetchPosts()
  );

  if (isLoading) return <div>Loading</div>;
  if (error) return `An error has occurred: ${error?.message}`;

  return (
    <Main meta={<Meta title="ショコラ" description="" />}>
      <p className="m-0 text-sm">
        ショコラは日本と韓国を繋げてくれるアプリです
      </p>
      <Breadcrumbs>
        <span className="text-sm">Home</span>
        <span className="text-sm">Select frame</span>
        <span className="text-sm">Write letter</span>
        <span className="text-sm">Share...</span>
      </Breadcrumbs>
      <input placeholder="keyword" {...keyword} />
      <LetterList />
    </Main>
  );
};

export default Index;

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery('posts', () => fetchPosts());

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
