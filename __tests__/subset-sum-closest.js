const {subsetSumClosest, generateCombinations} = require('../challenges/subset-sum-closest.js');

describe('subsetSumClosest test', () => {
  let arr;
  
  it('handles cases that exactly sum up to target', () => {
    arr = [3, 7, 8, 2];
    expect(subsetSumClosest(arr, 5)).toBe(0);
    
    arr = [1, -3, 2];
    expect(subsetSumClosest(arr, -1)).toBe(0);
    expect(subsetSumClosest(arr, 3)).toBe(0);
    expect(subsetSumClosest(arr, 0)).toBe(0);
  });
  
  it('handles cases that don\'t exactly sum up to target', () => {
    arr = [3, 7, 8, 2];
    expect(subsetSumClosest(arr, 6)).toBe(1);
    expect(subsetSumClosest(arr, 19)).toBe(1);
    
    arr = [1, -3, 2];
    expect(subsetSumClosest(arr, 5)).toBe(2);
    expect(subsetSumClosest(arr, -7)).toBe(4);
    
    arr = [];
    expect(subsetSumClosest(arr, 3)).toBe(3);
    expect(subsetSumClosest(arr, -7)).toBe(7);
  });
});

xdescribe('generateCombinations test', () => {
  const normalize = subsets => subsets.sort();
  let arr, solution;
  
  it('handles cases that sum up to target', () => {
    arr = [2, 3, 6, 7];
    solution = [
      [7],
      [2, 2, 3]
    ];
    expect(normalize(generateCombinations(arr, 7)))
      .toEqual(normalize(solution));
    
    arr = [2, 3, 5];
    solution = [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5]
    ];
    expect(normalize(generateCombinations(arr, 8)))
      .toEqual(normalize(solution));
  });
  
  it('handles cases that don\'t sum up to target', () => {
    arr =  [3, 4, 7, 8, 11];
    solution = [];
    expect(normalize(generateCombinations(arr, 5)))
      .toEqual(normalize(solution));
  });
});

