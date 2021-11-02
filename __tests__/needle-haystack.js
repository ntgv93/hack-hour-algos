const {needleInHaystack, needleInHaystackWithWildcards} = require('../challenges/needle-haystack.js')

describe('needleInHaystack tests', () => {
  it('handles substring longer than string', () => {
    expect(needleInHaystack('abc', 'abcde')).toBe(false);
    expect(needleInHaystack('abc', 'feed')).toBe(false);
  });
  
  it('handles substring within string', () => {
    expect(needleInHaystack('abcde', 'abc')).toBe(true);
    expect(needleInHaystack('yolo', 'o')).toBe(true);
    expect(needleInHaystack('hello dolly', 'hello dolly')).toBe(true);
    expect(needleInHaystack('w o w', ' w')).toBe(true);
  });
  
  it('handles substring not in string', () => {
    expect(needleInHaystack('y e l l o w', 'low')).toBe(false);
    expect(needleInHaystack('jacket', 'jak')).toBe(false);
    expect(needleInHaystack('b  e  e', 'e e')).toBe(false);
    expect(needleInHaystack('quant', 'quart')).toBe(false);
  });
});

xdescribe('needleInHaystackWithWildcards tests', () => {
  it('handles substring longer than string', () => {
    expect(needleInHaystackWithWildcards('abc', 'abcde')).toBe(false);
    expect(needleInHaystackWithWildcards('abc', 'feed')).toBe(false);
  });
  
  it('handles substring within string', () => {
    expect(needleInHaystackWithWildcards('a___e', 'abc')).toBe(true);
    expect(needleInHaystackWithWildcards('y_l_', 'o')).toBe(true);
    expect(needleInHaystackWithWildcards('hell_ doll_', 'h_llo do__y')).toBe(true);
    expect(needleInHaystackWithWildcards('w_o_w', '__')).toBe(true);
  });
  
  it('handles substring not in string', () => {
    expect(needleInHaystackWithWildcards('y e l l o w', 'l_w')).toBe(false);
    expect(needleInHaystackWithWildcards('jacket', 'j_k')).toBe(false);
    expect(needleInHaystackWithWildcards('b _e  e', 'e e')).toBe(false);
    expect(needleInHaystackWithWildcards('q_ant', 'q_art')).toBe(false);
  });
});