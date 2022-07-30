export const getDateMonth = (year: number, month: number): string[] => {
  const date = new Date(year, month - 1);
  const result: string[] = [];
  while (date.getMonth() === month - 1) {
    result.push(`${date.toLocaleString('en-us', { month: 'short' })} ${date.getDate()}`);
    date.setDate(date.getDate() + 1);
  }
  return result;
};
