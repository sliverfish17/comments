export const transformDate = (date: number) => {
  return new Date(date * 1000).toISOString().slice(0, 10);
};
