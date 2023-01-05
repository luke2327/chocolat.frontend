type LetterState = {
  letterId: null | number;
  letters: string;
  selectedKeywordId: string;
  selectedKeywordName: string;
};
type CommonState = {
  step: number;
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
