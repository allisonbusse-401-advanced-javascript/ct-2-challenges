const insertionSort = require('../insertion-sort');

describe('Insertion Sort Algorithm', () => {
  it('sorts an algorithm', () => {
    const result = insertionSort([6, 2, 4, 12, 100, 1]);
    expect(result).toEqual([1, 2, 4, 6, 12, 100]);
  });
});