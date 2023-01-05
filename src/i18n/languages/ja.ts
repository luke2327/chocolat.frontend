const ja = {
  title: 'ショコラ',
  description: '大切な相手に手紙を書こう:)',
  language: '言語',
  japanese: '日本語',
  korean: '한국어',

  'letter.keyword1': 'タンジョウビ',
  'letter.keyword2': 'クリスマス',
  'letter.keyword3': 'バレンタインデー',
  'letter.keyword4': 'ホワイトデー',
  'letter.keyword5': 'キネンビ',

  'common.close': '閉じる',
};

export type Language = Record<keyof typeof ja, Readonly<string>>;

export default ja;
