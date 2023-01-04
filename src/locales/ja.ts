const ja = {
  title: 'ショコラ',
  description: '大切な相手に手紙を書こう:)',
  language: '言語',
};

export type Language = Record<keyof typeof ja, Readonly<string>>;

export default ja;
