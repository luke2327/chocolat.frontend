import axios from 'axios';

const translateLanguage = async (text: string) => {
  const {
    data: { result },
  } = await axios.get<{ result: string }>(
    'http://localhost:3000/lng/translate',
    {
      params: {
        text,
      },
    }
  );

  return result;
};

export { translateLanguage };
