export const translate = (word: string) => {
  if (typeof word !== 'string') throw new Error('类型错误');
  console.log('feng translate', word);
};
