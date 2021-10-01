const { matrixTranspose, matrixRotate } = require('../challenges/matrix-transpose.js'); 

describe('matrixTranspose test', () => {
  let matrix;
  let transposed;

  describe('m x n matrix', () => {
    it('should transpose 1x5 / 5x1 arrays', () => {
      matrix = [[1, 2, 3, 4, 5]];
      transposed = [[1], [2], [3], [4], [5]];
      expect(matrixTranspose(matrix)).toEqual(transposed);
      expect(matrixTranspose(transposed)).toEqual(matrix);
    });
    it('should transpose 5x0 arrays', () => {
      matrix = [[], [], [], [], []];
      transposed = [];
      expect(matrixTranspose(matrix)).toEqual(transposed);
    });
    it('should transpose 3x2 / 2x3 arrays', () => {
      matrix = [['fred', 'barney'], [30, 40], [true, false]];
      transposed = [['fred', 30, true], ['barney', 40, false]];
      expect(matrixTranspose(matrix)).toEqual(transposed);
      expect(matrixTranspose(transposed)).toEqual(matrix);
    });
    it('should transpose 4x3 / 3x4 arrays', () => {
      matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
      transposed = [[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]];
      expect(matrixTranspose(matrix)).toEqual(transposed);
      expect(matrixTranspose(transposed)).toEqual(matrix);
    });
  });

  describe('n x n matrix', () => {
    it('should transpose 0x0 arrays', () => {
      expect(matrixTranspose([])).toEqual([]);
    });
    it('should transpose 1x1 arrays', () => {
      expect(matrixTranspose([[1]])).toEqual([[1]]);
    });
    it('should transpose 2x2 arrays', () => {
      matrix = [[1, 2], [3, 4]];
      transposed = [[1, 3], [2, 4]];
      expect(matrixTranspose(matrix)).toEqual(transposed);
      expect(matrixTranspose(transposed)).toEqual(matrix);
    });
    it('should transpose 3x3 arrays', () => {
      matrix = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
      transposed = [['a', 'd', 'g'], ['b', 'e', 'h'], ['c', 'f', 'i']];
      expect(matrixTranspose(matrix)).toEqual(transposed);
      expect(matrixTranspose(transposed)).toEqual(matrix);
    });
  });
});

xdescribe('matrixRotate test', () => {
  let matrix;
  let rotated;

  describe('n x n matrix', () => {
    it('should rotate 0x0 arrays', () => {
      expect(matrixRotate([])).toEqual([]);
    });
    it('should rotate 1x1 arrays', () => {
      expect(matrixRotate([[1]])).toEqual([[1]]);
    });
    it('should rotate 2x2 arrays', () => {
      matrix = [[1, 2], [3, 4]];
      rotated = [[3, 1], [4, 2]];
      expect(matrixRotate(matrix)).toEqual(rotated);
    });
    it('should rotate 3x3 arrays', () => {
      matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
      rotated = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
      expect(matrixRotate(matrix)).toEqual(rotated);
    });
    it('should rotate 4x4 arrays', () => {
      matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
      rotated = [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]];
      expect(matrixRotate(matrix)).toEqual(rotated);
    });
  });

  describe('m x n matrix', () => {
    it('should return undefined for 1x2 arrays', () => {
      expect(matrixRotate([[1, 2]])).toBe(undefined);
    });
    it('should return undefined for 2x1 arrays', () => {
      expect(matrixRotate([[1], [2]])).toBe(undefined);
    });
  });
});