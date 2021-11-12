const {twoSumClosest} = require('../challenges/two-sum-closest.js');

describe('twoSumClosest test', () => {
  let arr;
  
  it('should work for exact matches with the target value', () => {
    arr = [3, 1, 4, 3];
    expect(twoSumClosest(arr, 6)).toBe(6);
    arr = [2, -2, 1];
    expect(twoSumClosest(arr, -1)).toBe(-1);
    arr = [2, -3, -6, 7, 4];
    expect(twoSumClosest(arr, 1)).toBe(1);
  });
  
  it('should work for imperfect matches with the target value', () => {
    arr = [3, 1, 4, 3];
    expect(twoSumClosest(arr, 9)).toBe(7);
    arr = [2, -2, 1];
    expect(twoSumClosest(arr, 4)).toBe(3);
    arr = [2, -3, -6, 7, 4];
    expect(twoSumClosest(arr, 3)).toBe(4);
  });
});
