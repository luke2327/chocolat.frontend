import { useRouter } from 'next/router';

import ja from '../locales/ja';
import ko from '../locales/ko';

export const useLocale = () => {
  const { locale } = useRouter();
  const t = locale === 'ko' ? ko : ja;
  return { locale, t };
};
