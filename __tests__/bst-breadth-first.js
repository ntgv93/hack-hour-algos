const {BinarySearchTree, bfs, minimumDistance} = require('../challenges/bst-breadth-first.js');

describe('bfs test', () => {
  let bst, results;
  const cb = val => {
    results.push(val);
  };
  
  beforeEach(() => {
    results = [];
  });
  
  it('handles single-depth binary search trees', () => {
    bst = new BinarySearchTree(6);
    bst.left = new BinarySearchTree(3);
    bst.right = new BinarySearchTree(10);
    
    bfs(bst, cb);
    expect(results).toEqual([6, 3, 10]);
  });
  
  it('handles arbitrarily deep binary search trees', () => {
    bst = new BinarySearchTree(4);
    bst.left = new BinarySearchTree(2);
    bst.right = new BinarySearchTree(7);
    bst.left.left = new BinarySearchTree(1);
    bst.left.right = new BinarySearchTree(3);
    bst.right.right = new BinarySearchTree(9);
    bst.right.right.left = new BinarySearchTree(8);
    
    bfs(bst, cb);
    expect(results).toEqual([4, 2, 7, 1, 3, 9, 8]);
  });
});

xdescribe('minimumDistance test', () => {
  let grid;
  
  it('handles single-row and single-column grids', () => {
    grid = [
      [0, 0, 2, 0, 1, 0]
    ];
    expect(minimumDistance(grid)).toBe(2);
    
    grid = [
      [0, 0, 0, 0, 1, 2, 0]
    ];
    expect(minimumDistance(grid)).toBe(-1);
    
    grid = [
      [0],
      [2],
      [1],
      [1]
    ];
    expect(minimumDistance(grid)).toBe(1);
    
    grid = [
      [0],
      [0],
      [0],
      [1],
      [2]
    ];
    expect(minimumDistance(grid)).toBe(-1);
  });
  
  it('handles the general case', () => {
    grid = [
      [0, 0, 1, 1],
      [2, 0, 1, 0],
      [1, 0, 0, 0]
    ];
    expect(minimumDistance(grid)).toBe(1);
    
    grid = [
      [0, 0, 1, 1],
      [0, 0, 1, 2],
      [1, 0, 0, 0]
    ];
    expect(minimumDistance(grid)).toBe(6);
    
    grid = [
      [0, 0, 1, 1],
      [0, 0, 1, 2],
      [1, 0, 0, 1]
    ];
    expect(minimumDistance(grid)).toBe(-1);
  });
});


