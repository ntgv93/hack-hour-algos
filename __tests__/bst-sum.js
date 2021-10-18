const {BinarySearchTree, bstSum, bstReverse} = require('../challenges/bst-sum.js');

describe('bstSum test', () => {
  let bst;
  it('handles single-depth binary search trees', () => {
    bst = new BinarySearchTree(6);
    expect(bstSum(bst)).toBe(6);
    
    bst.left = new BinarySearchTree(3);
    expect(bstSum(bst)).toBe(9);
    
    bst.right = new BinarySearchTree(10);
    expect(bstSum(bst)).toBe(19);
  });
  
  it('handles arbitrarily deep binary search trees', () => {
    bst = new BinarySearchTree(10);
    bst.left = new BinarySearchTree(2);
    bst.left.left = new BinarySearchTree(1);
    bst.left.right = new BinarySearchTree(3);
    bst.left.right.right = new BinarySearchTree(4);
    expect(bstSum(bst)).toBe(20);
    
    bst.right = new BinarySearchTree(20);
    bst.right.right = new BinarySearchTree(30);
    bst.right.right.left = new BinarySearchTree(27);
    bst.right.right.right = new BinarySearchTree(34);
    expect(bstSum(bst)).toBe(131);
  });
});

xdescribe('bstReverse test', () => {
  let bst;
  it('reverses single-depth binary search trees', () => {
    bst = new BinarySearchTree(6);
    bst.left = new BinarySearchTree(3);
    bstReverse(bst);
    expect(bst.value).toBe(6);
    expect(bst.right.value).toBe(3);
    expect(bst.left).toBe(null);
    
    bst = new BinarySearchTree(6);
    bst.left = new BinarySearchTree(3);
    bst.right = new BinarySearchTree(10);
    bstReverse(bst);
    expect(bst.value).toBe(6);
    expect(bst.right.value).toBe(3);
    expect(bst.left.value).toBe(10);
  });
  
  it('reverses arbitrarily deep binary search trees', () => {
    bst = new BinarySearchTree(10);
    bst.left = new BinarySearchTree(2);
    bst.left.left = new BinarySearchTree(1);
    bst.left.right = new BinarySearchTree(3);
    bst.left.right.right = new BinarySearchTree(4);
    bst.right = new BinarySearchTree(20);
    bst.right.right = new BinarySearchTree(30);
    bst.right.right.left = new BinarySearchTree(27);
    bst.right.right.right = new BinarySearchTree(34);
    
    bstReverse(bst);
    
    expect(bst.value).toBe(10);
    expect(bst.right.value).toBe(2);
    expect(bst.right.right.value).toBe(1);
    expect(bst.right.left.value).toBe(3);
    expect(bst.right.left.left.value).toBe(4);
    expect(bst.right.left.right).toBe(null);
    expect(bst.left.value).toBe(20);
    expect(bst.left.left.value).toBe(30);
    expect(bst.left.left.right.value).toBe(27);
    expect(bst.left.left.left.value).toBe(34);
  });
});

