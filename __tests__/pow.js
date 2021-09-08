const { pow, powRecurse } = require('../challenges/pow');

describe('pow algorithm tests', () => {
  it('returns 1 when the power is 0', () => {
    expect(pow(5, 0)).toEqual(1);
  });

  it('returns the base when the power is 1', () => {
    expect(pow(5, 1)).toEqual(5);
  });

  it('returns the correct result', () => {
    expect(pow(5, 2)).toEqual(25);
    expect(pow(3, 4)).toEqual(81);
    expect(pow(2, 5)).toEqual(32);
  });
});

xdescribe('pow recursive algorithm tests', () => {
  it('returns 1 when the power is 0', () => {
    expect(powRecurse(5, 0)).toEqual(1);
  });

  it('returns the base when the power is 1', () => {
    expect(powRecurse(5, 1)).toEqual(5);
  });

  it('returns the correct result', () => {
    expect(powRecurse(5, 2)).toEqual(25);
    expect(powRecurse(3, 4)).toEqual(81);
    expect(powRecurse(2, 5)).toEqual(32);
  });
});
