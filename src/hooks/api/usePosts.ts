import axios from 'axios';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const { data } = await axios.post(
    'https://api.selling.n-i.co.kr/auth/loginUser',
    {
      u_id: 'wschoi',
      u_pass: 'wschoi',
    }
  );

  return data;
};

const usePosts = () => {
  return useQuery(['posts'], () => fetchPosts());
};

export { fetchPosts, usePosts };
