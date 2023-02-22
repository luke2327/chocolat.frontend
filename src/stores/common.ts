import { atom } from 'recoil';

import type {
  CommonState,
  ConfigState,
  LetterState,
  LetterTemplateState,
  ModalState,
} from './common.type';

const defaultValueLetter: LetterState = {
  letterId: null,
  letters: '',
  selectedKeywordId: 'letter.keyword1',
  selectedKeywordName: '',
  selectedType: 'birthday',
};

export const letterState = atom({
  key: 'letterState',
  default: defaultValueLetter,
});

export const defaultValueCommon: CommonState = {
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
  default: defaultValueCommon,
});

const defaultValueConfig: ConfigState = {
  currentLocale: 'ja',
};

export const configState = atom({
  key: 'configState',
  default: defaultValueConfig,
});

export const defaultValueModal: ModalState = {
  letterFrameSelectModal: false,
  rightSidePannelModal: false,
};

export const modalState = atom({
  key: 'modalState',
  default: defaultValueModal,
});

const defaultValueLetterTemplate: LetterTemplateState[] =
  [] as LetterTemplateState[];

export const letterTemplateState = atom({
  key: 'letterTemplateState',
  default: defaultValueLetterTemplate,
});
