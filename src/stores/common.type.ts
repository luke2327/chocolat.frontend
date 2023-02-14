import type { SupportedLanguage } from '@/constants/AppConfig';
import type { Keyword } from '@/constants/letter.keyword';
import type { LanguageKey } from '@/i18n/languages/ja';

type LetterState = {
  letterId: null | number;
  letters: string;
  selectedKeywordId: LanguageKey;
  selectedKeywordName: string;
  selectedType: Keyword['type'];
};
type CommonState = {
  step: number;
  totalStep: 3;
  stepList: {
    label: LanguageKey;
    labelEn: LanguageKey;
  }[];
  letterFrameImgURI: string;
};

type ConfigState = {
  currentLocale: SupportedLanguage;
};
type ModalState = {
  letterFrameSelectModal: boolean;
  rightSidePannelModal: boolean;
};

export type { CommonState, ConfigState, LetterState, ModalState };
