const {reverseArray, reverseSentence} = require('../challenges/reverse-array.js');

describe('reverseArray test', () => {
  let arr, reversed;
  it('returns the same array in memory', () => {
    arr = [];
    expect(reverseArray(arr)).toBe(arr);
    arr = [1, 2, 4];
    expect(reverseArray(arr)).toBe(arr);
  });
  
  it('reverses the elements of the array', () => {
    arr = [6];
    reversed = [6];
    expect(reverseArray(arr.slice())).toEqual(reversed);
    
    arr = [1, 2, 4];
    reversed = [4, 2, 1];
    expect(reverseArray(arr.slice())).toEqual(reversed);
    
    arr = [1, 2, 4, 5];
    reversed = [5, 4, 2, 1];
    expect(reverseArray(arr.slice())).toEqual(reversed);
  });
});

xdescribe('reverseSentence test', () => {
  let sentence, reversed;
  it('returns a single word unchanged', () => {
    sentence = 'hello';
    reversed = 'hello';
    expect(reverseSentence(sentence)).toBe(reversed);
  });
  
  it('reverses a sentence', () => {
    sentence = 'teriyaki chicken';
    reversed = 'chicken teriyaki';
    expect(reverseSentence(sentence)).toBe(reversed);
    
    sentence = 'ill be back';
    reversed = 'back be ill';
    expect(reverseSentence(sentence)).toBe(reversed);
    
    sentence = 'to be or not to be';
    reversed = 'be to not or be to';
    expect(reverseSentence(sentence)).toBe(reversed);
  });
});
