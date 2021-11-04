const {getAllProducts} = require('../challenges/get-all-products.js');

describe('getAllProducts test', () => {
  let input, output;
  it('handles all numbers being nonzero', () => {
    input = [6, 2];
    output = [2, 6];
    expect(getAllProducts(input).sort()).toEqual(output);
    
    input = [3, 2, 5];
    output = [10, 15, 6];
    expect(getAllProducts(input).sort()).toEqual(output);
    
    input = [1, 7, 3, 4];
    output = [12, 21, 28, 84];
    expect(getAllProducts(input).sort()).toEqual(output);
  });
  
  it('handles exactly one number equal to zero', () => {
    input = [0, 3, 4, 2];
    output = [0, 0, 0, 24];
    expect(getAllProducts(input).sort()).toEqual(output);
    
    input = [6, 0, 1];
    output = [0, 0, 6];
    expect(getAllProducts(input).sort()).toEqual(output);
    
    input = [3, 1, 2, 0, 5];
    output = [0, 0, 0, 0, 30];
    expect(getAllProducts(input).sort()).toEqual(output);
  });
  
  it('handles two or more numbers equal to zero', () => {
    input = [0, 3, 4, 0];
    output = [0, 0, 0, 0];
    expect(getAllProducts(input).sort()).toEqual(output);
    
    input = [9, 0, 0, 0, 4, 7];
    output = [0, 0, 0, 0, 0, 0];
    expect(getAllProducts(input).sort()).toEqual(output);
  });
});

