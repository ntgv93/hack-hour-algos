const {selectionSort, insertionSort} = require('../challenges/selection-sort.js');

describe('selection sort test', () => {
  let arr, sorted;
  it('returns the same array in memory', () => {
    arr = [];
    expect(selectionSort(arr)).toBe(arr);
    
    arr = [3, 2, 7, 0, 6];
    expect(selectionSort(arr)).toBe(arr);
  });
  
  it('handles empty and single-element arrays', () => {
    arr = [];
    sorted = [];
    expect(selectionSort(arr.slice())).toEqual(sorted);
    
    arr = [7];
    sorted = [7];
    expect(selectionSort(arr.slice())).toEqual(sorted);
  });
  
  it('sorts arrays with distinct values', () => {
    arr = [7, 1];
    sorted = [1, 7];
    expect(selectionSort(arr.slice())).toEqual(sorted);
    
    arr = [7, 1, 0, -4, 2];
    sorted = [-4, 0, 1, 2, 7];
    expect(selectionSort(arr.slice())).toEqual(sorted);
    
    arr = [8, 2, -4, -3, -5, 7, 1];
    sorted = [-5, -4, -3, 1, 2, 7, 8];
    expect(selectionSort(arr.slice())).toEqual(sorted);
  });
  
  it('sorts arrays with duplicate values', () => {
    arr = [7, 1, 1, 7];
    sorted = [1, 1, 7, 7];
    expect(selectionSort(arr.slice())).toEqual(sorted);
    
    arr = [0, 2, 0, -4, 1, -4, 0];
    sorted = [-4, -4, 0, 0, 0, 1, 2];
    expect(selectionSort(arr.slice())).toEqual(sorted);
  });
});

xdescribe('insertion sort test', () => {
  let arr, sorted;
  it('returns the same array in memory', () => {
    arr = [];
    expect(insertionSort(arr)).toBe(arr);
    
    arr = [3, 2, 7, 0, 6];
    expect(insertionSort(arr)).toBe(arr);
  });
  
  it('handles empty and single-element arrays', () => {
    arr = [];
    sorted = [];
    expect(insertionSort(arr.slice())).toEqual(sorted);
    
    arr = [7];
    sorted = [7];
    expect(insertionSort(arr.slice())).toEqual(sorted);
  });
  
  it('sorts arrays with distinct values', () => {
    arr = [7, 1];
    sorted = [1, 7];
    expect(insertionSort(arr.slice())).toEqual(sorted);
    
    arr = [7, 1, 0, -4, 2];
    sorted = [-4, 0, 1, 2, 7];
    expect(insertionSort(arr.slice())).toEqual(sorted);
    
    arr = [8, 2, -4, -3, -5, 7, 1];
    sorted = [-5, -4, -3, 1, 2, 7, 8];
    expect(insertionSort(arr.slice())).toEqual(sorted);
  });
  
  it('sorts arrays with duplicate values', () => {
    arr = [7, 1, 1, 7];
    sorted = [1, 1, 7, 7];
    expect(insertionSort(arr.slice())).toEqual(sorted);
    
    arr = [0, 2, 0, -4, 1, -4, 0];
    sorted = [-4, -4, 0, 0, 0, 1, 2];
    expect(insertionSort(arr.slice())).toEqual(sorted);
  });
});
