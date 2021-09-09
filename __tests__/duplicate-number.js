const {duplicateNumber, duplicateNumberAdvanced} = require('../challenges/duplicate-number.js');

describe('duplicateNumber test', () => {
  let arr;

  it('should return duplicate number in a sorted array', () => {
    arr = [1,2,3,4,5,6,7,7,8,9,10,11,12,13,14,15];
    expect(duplicateNumber(arr)).toBe(7);
  })

  it('should return duplicate number in an unsorted array', () => {
    arr = [12,14,3,7,15,1,11,9,10,3,5,2,4,6,13,8];
    expect(duplicateNumber(arr)).toBe(3);
  })
})

xdescribe('duplicateNumberAdvanced test', () => {
  let arr;

  it('should return duplicate number in an unsorted array', () => {
    arr = [];
    for (let i = 42; i < 142; i++){
      arr.push(i);
    }
    arr.push(72)
    expect(duplicateNumberAdvanced(arr)).toBe(72);
  })

  it('should return duplicate number in a sorted array', () => {
    arr = [];
    for (let i = 73; i < 211; i++){
      if(i === 111) arr.push(i);
      arr.push(i);
    }
    expect(duplicateNumberAdvanced(arr)).toBe(111);
  })
})
