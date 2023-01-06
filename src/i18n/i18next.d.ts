import 'i18next';

import type { Language } from './languages/ja';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: Language;
    };
  }
}
