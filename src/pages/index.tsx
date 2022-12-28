import { useState } from 'react';
import { useQuery } from 'react-query';

import SelectBox from '@/components/common/SelectBox';
import LetterList from '@/components/LetterList';
import { Main } from '@/components/templates/Main';
import type { Keyword } from '@/constants/keyword';
import { keyword } from '@/constants/keyword';
import { fetchPosts } from '@/hooks/api/usePosts';
import { Meta } from '@/layouts/Meta';

const Index = () => {
  const [listItem, setListItem] = useState(keyword[0] as Keyword);
  const { isLoading, error } = useQuery<any, Error>('posts', () =>
    fetchPosts()
  );
  const onChange = (value: Keyword) => {
    setListItem(value);
  };

  if (isLoading) return <div>Loading</div>;
  if (error) return `An error has occurred: ${error?.message}`;

  return (
    <Main meta={<Meta title="ショコラ" description="" />}>
      <SelectBox onChange={onChange} value={listItem} />
      <LetterList className={'mt-4'} />
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
