function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree and a callback function, apply the
callback to the values of the BST in breadth-first order.

Example:

If the tree is

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

then apply the callback on the numbers in the order:
4, 2, 7, 1, 3, 9, 8.

Hint:

Maintain a queue (array) consisting of the nodes we need to operate on.
For each node in the queue, push the left and right children (if applicable) to
the end of the queue. Keep consuming the queue (using the shift method) until
there are no more nodes in the queue.

Utilizing recursion is not necessary, nor recommended.

*/

const bfs = (root, callback) => {

  // declare a queue to hold nodes, starting with the root
  const queue = [root];
  // keep track of index
  let i = 0;

  // iterate through nodes in queue
  while(queue[i] !== undefined){

    // get current node from queue
    const node = queue[i++];

    // perform callback on node vakye
    callback(node.value);

    // if node has left child, push left child into queue
    if(node.left)
      queue.push(node.left);
    
    // if node has right child, push right child into queue
    if(node.right)
      queue.push(node.right);
  }
};

/*

Extension:

Given a 2D grid of 0s, 1s, and a single 2, with the start position the top-left
corner, determine the minimum distance need to travel to the 2.

0s represent traversable land.
1s represent "water" that we cannot traverse.
2 represents our final goal.

The top-left corner will always be a 0. We will try to reach the 2 by
traversing through land. We are only allowed to traverse up/left/down/right,
with no diagonal movement allowed. If the 2 cannot be reached, return -1.

Examples:

Input:
[
  [0, 0, 1, 1],
  [2, 0, 1, 0],
  [1, 0, 0, 0]
]
Output: 1 (starting at the top-left corner, move down)

Input:
[
  [0, 0, 1, 1],
  [0, 0, 1, 2],
  [1, 0, 0, 0]
]
Output: 6 (starting at the top-left corner, either move
down-right-down-right-right-up, or right-down-down-right-right-up)

Input:
[
  [0, 0, 0, 1, 1, 0, 2, 0]
]
Output: -1 (the 2 is not reachable by land)

Hint:

Apply the general principles of breadth-first search. Maintain a queue of
positions with their distances. When consuming each position, check to see which
neighbors are traversable and haven't already been visited.

*/

const minimumDistance = grid => {

  if(!grid || !grid.length)
    return -1;

  // declare a queue to hold x-y positions and distances
  const queue = [
    {
      col: 0,
      row: 0,
      dist: 0
    }
  ]

  let i = 0; // keep track of elements in queue
  
  // declare an array to keep track of visited positions
  const visited = grid.map(arr => arr.map(el => false));

  // create a helper function to check if current position
  const processPosition = (row, col, dist) => {
    // if current position is not visited and isn't 1, pushed into queue and mark position as visited
    if(!visited[row][col] && grid[row][col] !== 1){
      queue.push({row, col, dist});
      visited[row][col] = true;
    }
  }

  // traverse through the grid with bfs
  while(queue[i] !== undefined){
    // if current node the grid is 2, return current distance
    let {row, col, dist} = queue[i++];
    if(grid[row][col] === 2)
      return dist;

    // increment distance with each node in queue
    dist++;

    // check top neighbor
    if(row > 0)
      processPosition(row - 1, col, dist);
    // check bottom neighbor
    if(row < grid.length - 1)
      processPosition(row + 1, col, dist);
    // check left neighbor
    if(col > 0)
      processPosition(row, col - 1, dist);
    // check right neighbor
    if(col < grid[0].length - 1)
      processPosition(row, col + 1, dist);
  }

  // return -1 if no possible path is found
  return -1;
};

minimumDistance([
  [0, 0, 1, 1],
  [0, 0, 1, 2],
  [1, 0, 0, 0]
])

module.exports = {BinarySearchTree, bfs, minimumDistance};
