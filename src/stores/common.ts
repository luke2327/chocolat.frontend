import { atom } from 'recoil';

import type {
  CommonState,
  ConfigState,
  ElemRefs,
  LetterState,
  LetterTemplateState,
  ModalState,
} from './common.type';

/** Letters */
const LetterDefault: LetterState = {
  letterId: null,
  letters: '',
  selectedKeywordId: 'letter.keyword1',
  selectedKeywordName: '',
  selectedType: 'birthday',
  dragable: true,
};

export const letterState = atom({
  key: 'letterState',
  default: LetterDefault,
});

/** Common */
export const CommonDefault: CommonState = {
  step: 0,
  totalStep: 3,
  stepList: [
    {
      label: 'step.selectDesign',
      labelEn: 'step.selectDesignEn',
    },
    {
      label: 'step.writeMessage',
      labelEn: 'step.writeMessageEn',
    },
    {
      label: 'step.customize',
      labelEn: 'step.customizeEn',
    },
  ],
  letterFrameImgURI: '',
};

export const commonState = atom({
  key: 'commonState',
  default: CommonDefault,
});

/** Configuration */
const ConfigDefault: ConfigState = {
  currentLocale: 'ja',
};

export const configState = atom({
  key: 'configState',
  default: ConfigDefault,
});

/** Modals */
export const ModalDefault: ModalState = {
  letterFrameSelectModal: false,
  rightSidePannelModal: false,
};

export const modalState = atom({
  key: 'modalState',
  default: ModalDefault,
});

/** Letter templates */
const LetterTemplateDefault: LetterTemplateState[] =
  [] as LetterTemplateState[];

export const letterTemplateState = atom({
  key: 'letterTemplateState',
  default: LetterTemplateDefault,
});

/** Element Ref */
const ElemRefsDefault: ElemRefs = {
  header: {
    height: 0,
    width: 0,
  },
};

export const elemRefsState = atom({
  key: 'ElemRefsState',
  default: ElemRefsDefault,
});
