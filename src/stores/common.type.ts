import type { LanguageKey } from '@/i18n/languages/ja';

type LetterState = {
  letterId: null | number;
  letters: string;
  selectedKeywordId: LanguageKey;
  selectedKeywordName: string;
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
  currentLocale: 'ja' | 'ko';
};
type ModalState = {
  letterFrameSelectModal: boolean;
  rightSidePannelModal: boolean;
};

export type { CommonState, ConfigState, LetterState, ModalState };
