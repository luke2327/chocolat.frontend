import type { SupportedLanguage } from '@/constants/AppConfig';
import type { Keyword } from '@/constants/letter.keyword';
import type { LanguageKey } from '@/i18n/languages/ja';

type LetterState = {
  letterId: null | number;
  letters: string;
  selectedKeywordId: LanguageKey;
  selectedKeywordName: string;
  selectedType: Keyword['type'];
  dragable: boolean;
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

type LetterTemplateState = {
  letter_template_no: number;
  ja_text: string;
  ko_text: string;
};

type RefsDimensions = {
  height: number;
  width: number;
};

type ElemRefs = {
  header: RefsDimensions;
};

export type {
  CommonState,
  ConfigState,
  ElemRefs,
  LetterState,
  LetterTemplateState,
  ModalState,
};
