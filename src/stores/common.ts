import { atom } from 'recoil';

import type {
  CommonState,
  ConfigState,
  LetterState,
  ModalState,
} from './common.type';

const defaultValueLetter: LetterState = {
  letterId: null,
  letters: '',
};

export const letterState = atom({
  key: 'letterState',
  default: defaultValueLetter,
});

export const defaultValueCommon: CommonState = {
  step: 0,
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