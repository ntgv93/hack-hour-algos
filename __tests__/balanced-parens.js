const { balancedParens } = require('../challenges/balanced-parens.js');

describe('balancedParens test', () => {

  it('should return true when parens are balanced', () => {
    expect(balancedParens('()')).toBe(true);
    expect(balancedParens('((()))')).toBe(true);
  });

  it('should return false when parens are not balanced', () => {
    expect(balancedParens(')(')).toBe(false);
    expect(balancedParens('()))')).toBe(false);
  });

  it('should work on multiple types of brackets', () => {
    expect(balancedParens('[]{}()')).toBe(true);
    expect(balancedParens('{([{}])}')).toBe(true);
    expect(balancedParens('[{](})')).toBe(false);
  });

  it('should work on strings with regular characters and brackets', () => {
    expect(balancedParens(' const coolFunc = () => { anotherCoolFunc(); }')).toBe(true);
    expect(balancedParens(' const yungHash = { a_key: { another_key: a_sicc_value } ;')).toBe(false);
  });
});
