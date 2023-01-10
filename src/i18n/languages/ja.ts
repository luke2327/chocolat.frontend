const ja = {
  title: 'ショコラ',
  description: '大切な相手に手紙を書こう:)',
  language: '言語',
  japanese: '日本語',
  korean: '한국어',

  // 'letter.keyword1': 'タンジョウビ',
  // 'letter.keyword2': 'クリスマス',
  // 'letter.keyword3': 'バレンタインデー',
  // 'letter.keyword4': 'ホワイトデー',
  // 'letter.keyword5': 'キネンビ',
  'letter.keyword0': '全部',
  'letter.keyword1': '誕生日',
  'letter.keyword2': 'クリスマス',
  'letter.keyword3': 'バレンタインデー',
  'letter.keyword4': 'ホワイトデー',
  'letter.keyword5': '記念日',

  'step.selectDesign': 'デザインを選ぶ',
  'step.selectDesignEn': 'Design',
  'step.writeMessage': 'メッセージを書く',
  'step.writeMessageEn': 'Message',
  'step.customize': 'カスタマイズ',
  'step.customizeEn': 'Customize',

  'common.close': '閉じる',
  'common.select': '選ぶ',
};

export type LanguageKey = Readonly<keyof typeof ja>;
export type Language = Record<LanguageKey, Readonly<string>>;

export default ja;
