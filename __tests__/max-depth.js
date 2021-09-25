const {maxDepth} = require('../challenges/max-depth.js');

describe('maxDepth test', () => {
  it('handles non-nested arrays', () => {
    expect(maxDepth([3, 2])).toBe(1);
    expect(maxDepth([7, 8, 0, 9])).toBe(1);
  });
  
  it('handles arbitrarily nested arrays', () => {
    expect(maxDepth([3, [6, 7], 2])).toBe(2);
    expect(maxDepth([[2, 1], 8, 3, [4], 5])).toBe(2);
    expect(maxDepth([3, [6, [7]], 2])).toBe(3);
    expect(maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]])).toBe(4);
    expect(maxDepth([1, [2, 4], 2, [[2], 4], 6])).toBe(3);
  });
  
  it('handles empty arrays', () => {
    expect(maxDepth([])).toBe(1);
    expect(maxDepth([3, [], 2])).toBe(2);
  });
});

