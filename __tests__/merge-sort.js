const { mergeSort } = require('../challenges/merge-sort');

describe('merge sort test', () => {
  let arr, sorted;

  it('handles empty and single-element arrays', () => {
    arr = [];
    sorted = [];
    expect(mergeSort(arr)).toEqual(sorted);
    
    arr = [5];
    sorted = [5];
    expect(mergeSort(arr)).toEqual(sorted);
  });

  it('sorts arrays with distinct values', () => {
    arr = [2, 1];
    sorted = [1, 2];
    expect(mergeSort(arr)).toEqual(sorted);

    arr = [5, 3, 1, 2, 4];
    sorted = [1, 2, 3, 4, 5];
    expect(mergeSort(arr)).toEqual(sorted);

    arr = [-3, 5, 1, -10, 7];
    sorted = [-10, -3, 1, 5, 7];
    expect(mergeSort(arr)).toEqual(sorted);
  });

  it('sorts arrays with duplicate values', () => {
    arr = [10, 5, 2, 5, -5];
    sorted = [-5, 2, 5, 5, 10];
    expect(mergeSort(arr)).toEqual(sorted);

    arr = [5, 11, 9, 5, 5, -7, 8, 9];
    sorted = [-7, 5, 5, 5, 8, 9, 9, 11];
    expect(mergeSort(arr)).toEqual(sorted);
  });
})