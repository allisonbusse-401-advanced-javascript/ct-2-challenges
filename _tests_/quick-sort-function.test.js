const quickSort = require('../quick-sort-function');

describe('Quick Sort Algorithm', () => {
  it('sorts an array', () => {
    const arr = [6, 2, 4, 12, 100, 1];
    quickSort(arr, 0, 5);
    expect(arr).toEqual([1, 2, 4, 6, 12, 100]);
  });

  it('sorts an array with an odd number', () => {
    const arr = [5, 2, 8, 4, 16, 147, 1, 9];
    quickSort(arr, 0, 7);
    expect(arr).toEqual([1, 2, 4, 5, 8, 9, 16, 147]);
  });
});