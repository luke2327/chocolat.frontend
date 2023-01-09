import type { LanguageKey } from '@/i18n/languages/ja';

export type Keyword = {
  i18nKey: LanguageKey;
  type: 'all' | 'birthday' | 'christmas' | 'valentine' | 'white' | 'memorial';
};

export const keyword: Keyword[] = [
  { i18nKey: 'letter.keyword0', type: 'all' },
  { i18nKey: 'letter.keyword1', type: 'birthday' },
  { i18nKey: 'letter.keyword2', type: 'christmas' },
  { i18nKey: 'letter.keyword3', type: 'valentine' },
  { i18nKey: 'letter.keyword4', type: 'white' },
  { i18nKey: 'letter.keyword5', type: 'memorial' },
];

export type KeywordName = string;
