function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Find the tallest height of a binary search tree.

Ex. the tallest height of:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

is 3, because the tallest height of the tree connects the numbers 4 - 7 - 9 - 8
and has 3 links.

*/

// recursive approach: traverse down the tree with depth first search 
const bstHeight = node => {

  // base case:
  // if node is null, return -1
  if(node === null)
    return -1;

  // recursive case
  // return the max height between left and right subtrees, incrementing height with each level
  const lHeight = bstHeight(node.left);
  const rHeight = bstHeight(node.right);

  return Math.max(lHeight + 1, rHeight + 1);
};

/*
  Extension:

  Write a function to see if a binary tree is "superbalanced".
  An empty tree is balanced. A non-empty binary tree T is balanced if:
    1) Left subtree of T is balanced
    2) Right subtree of T is balanced
    3) The difference between heights of left subtree and right subtree is not more than 1.
  example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF

  A superbalanced tree is a tree that is balanced at every subtree level as well.

  Ex. 
        4                       4
      /   \                   /   \
     2     7                2       7
    / \     \             /  \     /  \
   1   3     9           1    3   5    9
            /                         /
           8                         8

  The tree on the left is balanced - height of left side is 2, height of right side is 3.
  But, it is not superbalanced since for the 7 subtree, height of left is 0, height of right is 2.
  
  The tree on the right is superbalanced since the difference in height is not more than 1 at any given subtree.
 */

// helper function to get height of a tree given a root node
const bstHeightUtil = node => {
  if(node === null)
    return -1;

  const lHeight = bstHeightUtil(node.left);
  const rHeight = bstHeightUtil(node.right);

  return Math.max(lHeight + 1, rHeight + 1);
} 

// recursive approach: traverse down the tree with dfs 
// for each node down the tree, compare left and right subtree heights
// if height differences is larger than 1, return false
// if leaf node is reached, return true
const superbalanced = (node, lHeight = 0, rHeight = 0) => {
  // base cases
  // if difference between 2 heights is more than 1, return false
  // if leaf node is reached, return true
  if(Math.max(lHeight, rHeight) - Math.min(lHeight, rHeight) > 1)
    return false;
  if(node === null)
    return true;
  
  // get the height of left subtree
  lHeight = bstHeightUtil(node.left);
  // get the height of right subtree
  rHeight = bstHeightUtil(node.right);

  // recursively check if the left subtree is superbalanced
  const leftTreeBalanced = superbalanced(node.left, lHeight, rHeight);
  // recursively check if right subtree is superbalanced
  const rightTreeBalanced = superbalanced(node.right, lHeight, rHeight);
   
  // if both trees are superbalanced, return true
  return leftTreeBalanced && rightTreeBalanced;
};

module.exports = {BinarySearchTree, bstHeight, superbalanced};
