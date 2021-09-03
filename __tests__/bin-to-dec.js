const {binToDec} = require('../challenges/bin-to-dec.js');

describe('binToDec test', ()=>{
  it('Should return correct conversion', ()=>{
    expect(binToDec('101')).toBe(5);
    expect(binToDec('11111100100')).toBe(2020);
  });

  it('Should ignore leading zeroes', ()=>{
    expect(binToDec('0000000010101')).toBe(21);
  })
});

