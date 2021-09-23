const {keywordCount, keywordMode} = require('../challenges/nested-keyword-count.js');

describe('keywordCount test', () => {
  let arr;
  it('finds a keyword in a non-nested array', () => {
    arr = ['cool', 'bye', 'bye'];
    expect(keywordCount(arr, 'cool')).toBe(1);
    expect(keywordCount(arr, 'bye')).toBe(2);
    expect(keywordCount(arr, 'other')).toBe(0);
    
    arr = ['hi', 'x', 'y', 'z', 'x', 'x', 'hi', 'x'];
    expect(keywordCount(arr, 'x')).toBe(4);
    expect(keywordCount(arr, 'hi')).toBe(2);
    expect(keywordCount(arr, 'other')).toBe(0);
  });
  
  it('finds a keyword in a nested array', () => {
    arr = [['cool', ['bye']], 'bye'];
    expect(keywordCount(arr, 'cool')).toBe(1);
    expect(keywordCount(arr, 'bye')).toBe(2);
    expect(keywordCount(arr, 'other')).toBe(0);
    
    arr = [['hi'], [['x'], 'y'], ['z', ['x', 'x'], 'hi', 'x']];
    expect(keywordCount(arr, 'x')).toBe(4);
    expect(keywordCount(arr, 'hi')).toBe(2);
    expect(keywordCount(arr, 'other')).toBe(0);
  });
  
  it('finds a keyword in a nested array, possibly with empty subarrays', () => {
    arr = [['cool', [], ['bye'], []], 'bye', []];
    expect(keywordCount(arr, 'cool')).toBe(1);
    expect(keywordCount(arr, 'bye')).toBe(2);
    expect(keywordCount(arr, 'other')).toBe(0);
    
    arr = [[[]], ['hi'], [['x'], [], 'y'], ['z', ['x', 'x'], [], 'hi', 'x'], []];
    expect(keywordCount(arr, 'x')).toBe(4);
    expect(keywordCount(arr, 'hi')).toBe(2);
    expect(keywordCount(arr, 'other')).toBe(0);
  });
});

xdescribe('keywordMode test', () => {
  let arr;
  it('finds keywords in a non-nested array', () => {
    arr = ['bye', 'cool', 'bye', 'bye'];
    expect(keywordMode(arr)).toEqual(['bye']);
    
    arr = ['y', 'hi', 'bright', 'x', 'z', 'x', 'hi', 'y', 'light'];
    expect(keywordMode(arr)).toEqual(['hi', 'x', 'y']);
  });
  
  it('finds keywords in a nested array', () => {
    arr = [[['bye'], 'cool'], ['bye', 'bye']];
    expect(keywordMode(arr)).toEqual(['bye']);
    
    arr = ['y', ['hi'], [['bright', ['x']], ['z', 'x']], 'hi', [['y']], 'light'];
    expect(keywordMode(arr)).toEqual(['hi', 'x', 'y']);
  });
  
  it('finds keywords in a nested array, possibly with empty subarrays', () => {
    arr = [[[[], 'bye'], 'cool'], [], ['bye', [[]], 'bye']];
    expect(keywordMode(arr)).toEqual(['bye']);
    
    arr = ['y', [], ['hi'], [['bright', ['x'], []], ['z', 'x']], 'hi', [[], ['y']], [], 'light'];
    expect(keywordMode(arr)).toEqual(['hi', 'x', 'y']);
  });
});

