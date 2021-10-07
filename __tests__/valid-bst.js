const { BinaryTree, validBST } = require('../challenges/valid-bst');

describe('validBST test', () => {
  const tree = new BinaryTree(10);
  beforeEach(() => {
    tree.left = new BinaryTree(5);
    tree.left.left = new BinaryTree(3);
    tree.left.right = new BinaryTree(6);
    tree.right = new BinaryTree(14);
  })

  it('returns true for trees with a single node', () => {
    tree.left = null;
    tree.right = null;
    expect(validBST(tree)).toBe(true);
  });

  it('returns true for valid trees of height 1', () => {
    tree.left = new BinaryTree(5);
    tree.right = new BinaryTree(15);
    expect(validBST(tree)).toBe(true);
  });

  it('returns false for trees of height 1 with invalid left value', () => {
    tree.left = new BinaryTree(11);
    tree.right = new BinaryTree(15);
    expect(validBST(tree)).toBe(false);
  });

  it('returns false for trees of height 1 with invalid right value', () => {
    tree.left = new BinaryTree(5);
    tree.right = new BinaryTree(9);
    expect(validBST(tree)).toBe(false);
  });

  it('returns true for deeper valid BSTs', () => {
    expect(validBST(tree)).toBe(true);
  });

  it('returns false for deeper invalid BSTs', () => {
    tree.left.left.left = new BinaryTree(4);
    expect(validBST(tree)).toBe(false);
  });

  it('returns false for deeper right leaning invalid BST', () => {
    tree.right.right = new BinaryTree(13);
    expect(validBST(tree)).toBe(false);
  });

  it('returns false when left right child < left child', () => {
    tree.left.right = new BinaryTree(4);
    expect(validBST(tree)).toBe(false);
  });

  it('returns false when right left child > right child', () => {
    tree.right.left = new BinaryTree(15);
    expect(validBST(tree)).toBe(false);
  });

  it('returns false when leaf is valid to its parent but not to grandparent (left-right case)', () => {
    tree.left.right.right = new BinaryTree(11);
    expect(validBST(tree)).toBe(false);
  });

  it('returns false when leaf is valid to its parent but not to grandparent (right-left case)', () => {
    tree.right.left = new BinaryTree(9);
    expect(validBST(tree)).toBe(false);
  });

})