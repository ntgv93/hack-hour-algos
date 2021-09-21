const {retrieveDepth, flattenDepth} = require('../challenges/retrieve-depth.js');

describe('retrieveDepth test', () => {
  it('retieves values less than or equal to a certain depth', () => {
    expect(retrieveDepth([2, [4, [7], 1], 5], 1)).toEqual([2, 5]);
    expect(retrieveDepth([2, [4, [7], 1], 5], 2)).toEqual([2, 4, 1, 5]);
    expect(retrieveDepth([2, [4, [7], 1], 5], 3)).toEqual([2, 4, 7, 1, 5]);
  });
});

xdescribe('flattenDepth test', () => {
  it('flattens arrays to a certain depth', () => {
    expect(flattenDepth([2, [4, [7], 1], 5], 0)).toEqual([2, [4, [7], 1], 5]);
    expect(flattenDepth([2, [4, [7], 1], 5], 1)).toEqual([2, 4, [7], 1, 5]);
    expect(flattenDepth([2, [4, [7], 1], 5], 2)).toEqual([2, 4, 7, 1, 5]);
    expect(flattenDepth([2, [4, [7], 1], 5], 3)).toEqual([2, 4, 7, 1, 5]);
  });
});
