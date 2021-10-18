const {BinarySearchTree, bstMinMax, lowestCommonAncestor} = require('../challenges/bst-min-max.js');

describe('bstSum test', () => {
  let bst;
  it('handles single-depth binary search trees', () => {
    bst = new BinarySearchTree(6);
    expect(bstMinMax(bst)).toBe(0);
    
    bst.left = new BinarySearchTree(2);
    expect(bstMinMax(bst)).toBe(4);
    
    bst.right = new BinarySearchTree(10);
    expect(bstMinMax(bst)).toBe(8);
  });
  
  it('handles arbitrarily deep binary search trees', () => {
    bst = new BinarySearchTree(10);
    bst.left = new BinarySearchTree(3);
    bst.left.left = new BinarySearchTree(1);
    bst.left.right = new BinarySearchTree(4);
    bst.left.right.right = new BinarySearchTree(5);
    expect(bstMinMax(bst)).toBe(9);
    bst.right = new BinarySearchTree(12);
    expect(bstMinMax(bst)).toBe(11);
    bst.right.left = new BinarySearchTree(11);
    expect(bstMinMax(bst)).toBe(11);
    bst.right.right = new BinarySearchTree(13);
    expect(bstMinMax(bst)).toBe(12);
    bst.left.left.right = new BinarySearchTree(2);
    expect(bstMinMax(bst)).toBe(12);
  });
});

xdescribe('lowestCommonAncestor test', () => {
  let bst;
  it('calculates ancestors of binary search tree nodes with p and q ascending in value', () => {
    bst = new BinarySearchTree(4);
    bst.left = new BinarySearchTree(2);
    bst.left.left = new BinarySearchTree(1);
    bst.left.right = new BinarySearchTree(3);
    bst.right = new BinarySearchTree(7);
    bst.right.right = new BinarySearchTree(9);
    bst.right.right.left = new BinarySearchTree(8);
    expect(lowestCommonAncestor(bst, bst.left.left, bst.left.right))
      .toBe(bst.left);
    expect(lowestCommonAncestor(bst, bst.right.right.left, bst.right.right))
      .toBe(bst.right.right);
    expect(lowestCommonAncestor(bst, bst.left, bst.right.right.left))
      .toBe(bst);
  });
  
  it('calculates ancestors of binary search tree nodes with p and q not ascending in value', () => {
    bst = new BinarySearchTree(4);
    bst.left = new BinarySearchTree(2);
    bst.left.left = new BinarySearchTree(1);
    bst.left.right = new BinarySearchTree(3);
    bst.right = new BinarySearchTree(7);
    bst.right.right = new BinarySearchTree(9);
    bst.right.right.left = new BinarySearchTree(8);
    expect(lowestCommonAncestor(bst, bst.left.right, bst.left.left))
      .toBe(bst.left);
    expect(lowestCommonAncestor(bst, bst.right.right, bst.right.right.left))
      .toBe(bst.right.right);
    expect(lowestCommonAncestor(bst, bst.right.right.left, bst.left))
      .toBe(bst);
    expect(lowestCommonAncestor(bst, bst.left.right, bst.left.right))
      .toBe(bst.left.right);
  });
});

