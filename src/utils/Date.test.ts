import { getDateMonth } from './Date';

describe('Utils Date functions', () => {
  it('getDateMonth(2022, 7) returned [Jul 1, Jul 2, Jul 3 ... Jul 31]', () => {
    expect(getDateMonth(2022, 7)).toEqual([
      'Jul 1',
      'Jul 2',
      'Jul 3',
      'Jul 4',
      'Jul 5',
      'Jul 6',
      'Jul 7',
      'Jul 8',
      'Jul 9',
      'Jul 10',
      'Jul 11',
      'Jul 12',
      'Jul 13',
      'Jul 14',
      'Jul 15',
      'Jul 16',
      'Jul 17',
      'Jul 18',
      'Jul 19',
      'Jul 20',
      'Jul 21',
      'Jul 22',
      'Jul 23',
      'Jul 24',
      'Jul 25',
      'Jul 26',
      'Jul 27',
      'Jul 28',
      'Jul 29',
      'Jul 30',
      'Jul 31',
    ]);
  });
});
