const {fizzbuzz, fizzbuzzbazz} = require('../challenges/fizzbuzz.js');

describe('fizzbuzz test', () => {
  const arr = fizzbuzz(31);
  
  it('should work for non-multiples of 3 and 5', () => {
    expect(arr.length).toBe(31);
    
    expect(arr[0]).toBe(1);
    expect(arr[6]).toBe(7);
    expect(arr[10]).toBe(11);
  });
  
  it('should work for multiples of 3', () => {
    expect(arr[2]).toBe('fizz');
    expect(arr[5]).toBe('fizz');
    expect(arr[8]).toBe('fizz');
  });
  
  it('should work for multiples of 5', () => {
    expect(arr[4]).toBe('buzz');
    expect(arr[9]).toBe('buzz');
  });
  
  it('should work for multiples of 3 and 5', () => {
    expect(arr[14]).toBe('fizzbuzz');
    expect(arr[29]).toBe('fizzbuzz');
  });
});

xdescribe('fizzbuzzbazz test', () => {
  const arr = fizzbuzzbazz(105);
  
  it('should work for non-multiples of 3, 5, and 7', () => {
    expect(arr.length).toBe(105);
    
    expect(arr[0]).toBe(1);
    expect(arr[3]).toBe(4);
    expect(arr[10]).toBe(11);
    expect(arr[15]).toBe(16);
  });
  
  it('should work for multiples of one of 3, 5, and 7', () => {
    expect(arr[2]).toBe('fizz');
    expect(arr[5]).toBe('fizz');
    expect(arr[8]).toBe('fizz');
    
    expect(arr[4]).toBe('buzz');
    expect(arr[9]).toBe('buzz');
    
    expect(arr[6]).toBe('bazz');
    expect(arr[13]).toBe('bazz');
  });
  
  it('should work for multiples of two of 3, 5, and 7', () => {
    expect(arr[14]).toBe('fizzbuzz');
    expect(arr[29]).toBe('fizzbuzz');
    
    expect(arr[20]).toBe('fizzbazz');
    expect(arr[41]).toBe('fizzbazz');
    
    expect(arr[34]).toBe('buzzbazz');
    expect(arr[69]).toBe('buzzbazz');
  });
  
  it('should work for multiples of three of 3, 5, and 7', () => {
    expect(arr[104]).toBe('fizzbuzzbazz');
  });
});

