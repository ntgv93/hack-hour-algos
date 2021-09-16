const {mergeRanges} = require('../challenges/merge-ranges.js');

describe('mergeRanges test', () => {
  let intervals;
  it('handles non-overlapping intervals', () => {
    intervals = [[7, 15]];
    expect(mergeRanges(intervals))
      .toEqual([[7, 15]]);
    
    intervals = [[0, 6], [8, 11]];
    expect(mergeRanges(intervals))
      .toEqual([[0, 6], [8, 11]]);
    
    intervals = [[6, 7], [2, 5], [12, 15], [10, 11]];
    expect(mergeRanges(intervals))
      .toEqual([[2, 5], [6, 7], [10, 11], [12, 15]]);
  });
  
  it('handles overlapping intervals', () => {
    intervals = [[8, 10], [15, 18], [1, 3], [2, 6]];
    expect(mergeRanges(intervals))
      .toEqual([[1, 6], [8, 10], [15, 18]]);
    
    intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
    expect(mergeRanges(intervals))
      .toEqual([[0, 1], [3, 8], [9, 12]]);
    
    intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10], [4, 9]];
    expect(mergeRanges(intervals))
      .toEqual([[0, 1], [3, 12]]);
    
    intervals = [[0, 4], [1, 3], [2, 4], [0, 5]];
    expect(mergeRanges(intervals))
      .toEqual([[0, 5]]);
  });
});

