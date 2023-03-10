import axios from 'axios';

import type { LetterTemplateState } from '@/stores/common.type';

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

const getLetterTemplate = async () => {
  const {
    data: { result },
  } = await axios.post<{ result: LetterTemplateState[] }>(
    'https://vcpyu59c8g.execute-api.ap-northeast-1.amazonaws.com/dev/letter/getLetterTemplate',
    {}
  );

  return result;
};

export { getLetterTemplate, translateLanguage };
