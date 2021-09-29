const { findInOrderedSet, findIn2dMatrix } = require('../challenges/find-in-ordered-set');


describe('findInOrderedSet tests', () => {
  const arr = [-41, -2, 0, 1, 3, 13, 72];

  it('should find a target in the middle of the array', () => expect(findInOrderedSet(arr, 1)).toBe(true))

  it('should find a target in the left half of the array', () => expect(findInOrderedSet(arr, -2)).toBe(true));
  it('should find a target in the right half of the array', () => expect(findInOrderedSet(arr, 13)).toBe(true));

  it('should find a target if it is the first element in the array', () => expect(findInOrderedSet(arr, -41)).toBe(true));
  it('should find a target if it is the last element in the array', () => expect(findInOrderedSet(arr, 72)).toBe(true)); 

  it('should return false if the target isn\'t in the array (but would be in the middle)', () => {
    expect(findInOrderedSet(arr, -1)).toBe(false)
    expect(findInOrderedSet(arr, 64)).toBe(false)
  });

  it('should return false if the target is less than the smallest value in the array', () => expect(findInOrderedSet(arr, -500)).toBe(false));

  it('should return false if the target is greater than the largest value in the array', () => expect(findInOrderedSet(arr, 500)).toBe(false));
});

xdescribe('findIn2dMatrix tests', () => {
  const matrix = [
    [-9, -1,  2,  4,  5],
    [ 6,  7,  8, 13, 37],
    [39, 43, 49, 50, 61],
    [64, 67, 72, 75, 81],
    [88, 90, 95, 97, 99]
  ];

  it('should find a target in the middle of the middle row', () => expect(findIn2dMatrix(matrix, 49)).toBe(true));
  it('should find a target at the beginning of the middle row', () => expect(findIn2dMatrix(matrix, 39)).toBe(true));
  it('should find a target at the end of the middle row', () => expect(findIn2dMatrix(matrix, 61)).toBe(true));

  it('should find a target in the middle of the first row', () => expect(findIn2dMatrix(matrix, 2)).toBe(true));
  it('should find a target at the beginning of the first row', () => expect(findIn2dMatrix(matrix, -9)).toBe(true));
  it('should find a target at the end of the first row', () => expect(findIn2dMatrix(matrix, 5)).toBe(true));

  it('should find a target in the middle of the last row', () => expect(findIn2dMatrix(matrix, 95)).toBe(true));
  it('should find a target at the beginning of the last row', () => expect(findIn2dMatrix(matrix, 88)).toBe(true));
  it('should find a target at the end of the last row', () => expect(findIn2dMatrix(matrix, 99)).toBe(true));

  it('should return false if the target is less than the smallest value in the matrix', () => expect(findIn2dMatrix(matrix, -20)).toBe(false));
  it('should return false if the target is greater than the largest value in the matrix', () => expect(findIn2dMatrix(matrix, 120)).toBe(false));
  it('should return false if the target would be in the middle row, but is missing', () => expect(findIn2dMatrix(matrix, 44)).toBe(false));
  it('should return false if the target would be in the first row, but is missing', () => expect(findIn2dMatrix(matrix, 1)).toBe(false));
  it('should return false if the target would be in the last row, but is missing', () => expect(findIn2dMatrix(matrix, 91)).toBe(false));

  const oneRowMatrix = [ [ 1, 4, 8, 13, 55 ] ];
  it('should handle matrices with only one row', () => expect(findIn2dMatrix(oneRowMatrix, 13)).toBe(true))

});
