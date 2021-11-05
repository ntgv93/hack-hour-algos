const { maxSubarray, kadanesMaxSubarray } = require('../challenges/max-subarray.js');

describe('maxSubarray test', () => {
  let input;
  let output;
  it('handles max value subarray smaller than array - example 1', () => {
    input = [1, -2, 3, 10, -4, 7, 2, -5];
    output = 18;
    expect(maxSubarray(input)).toEqual(output);
  });
  it('handles max value subarray equal to array - example 2', () => {
    input = [15, 20, -5, 10];
    output = 40;
    expect(maxSubarray(input)).toEqual(output);
  });
  it('handles positive single element max value subarray', () => {
    input = [-100, -20, 5, -10];
    output = 5;
    expect(maxSubarray(input)).toEqual(output);
  });
  it('handles negative single element max value subarray', () => {
    input = [-100, -20, -5, -10];
    output = -5;
    expect(maxSubarray(input)).toEqual(output);
  });
});

xdescribe('kadanesMaxSubarray test', () => {
  let input, output;
  it('handles max value subarray smaller than array - example 1', () => {
    input = [1, -2, 3, 10, -4, 7, 2, -5];
    output = 18;
    expect(kadanesMaxSubarray(input)).toEqual(output);
  });
  it('handles max value subarray equal to array - example 2', () => {
    input = [15, 20, -5, 10];
    output = 40;
    expect(kadanesMaxSubarray(input)).toEqual(output);
  });
  it('handles positive single element max value subarray', () => {
    input = [-100, -20, 5, -10];
    output = 5;
    expect(kadanesMaxSubarray(input)).toEqual(output);
  });
  it('handles negative single element max value subarray', () => {
    input = [-100, -20, -5, -10];
    output = -5;
    expect(kadanesMaxSubarray(input)).toEqual(output);
  });
});