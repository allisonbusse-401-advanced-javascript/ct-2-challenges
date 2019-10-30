const mergeSort = require('../merge-sort');

describe('Merge Sort Algorithm', () => {
  it('sorts an algorithm', () => {
    const array = [6, 2, 4, 12, 100, 1];
    mergeSort(array);
    expect(array).toEqual([1, 2, 4, 6, 12, 100]);
  });
});