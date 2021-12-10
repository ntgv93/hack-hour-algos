// Given an array of integers a and a set of queries of the form [l, r, x], your task is to calculate the number of occurrences of 
// the number x in the inclusive subarray a[l..r] (0-based), for each query. Return the sum of the answers for all queries as the result.

// Example

// For a = [1, 2, 1, 3, 1, 2, 1] and

// queries = [
//   [1, 3, 3],
//   [0, 4, 1],
//   [2, 5, 2],
//   [5, 6, 1]
// ]
// the output should be solution(a, queries) = 6.

// The answer to the first query is 1: the number 3 appears 1 time in the subarray [2, 1, 3];
// The answer to the second query is 3: the number 1 appears 3 times in the subarray [1, 2, 1, 3, 1];
// The answer to the third query is 1: the number 2 appears 1 time in the subarray [1, 3, 1, 2];
// The answer to the fourth query is 1: the number 1 appears 1 time in the subarray [2, 1].
// So the answer is 1 + 3 + 1 + 1 = 6.

// strategy: use mo's algorithm 
// TO DO: fix algo

function solution(a, queries) {
  let count = 0;

  // find block size
  const blockSize = Math.floor(Math.sqrt(a.length));

  // sort the queries into the same blocks to reduce the minimize the distance of 2 pointers
  // all of the queries with the same l/block are put in the same block
  // within a block, the queries are sorted based on their R values
  
  queries.sort((a, b) => {
    const l1 = a[0];
    const r1 = a[1];
    const l2 = b[0];
    const r2 = b[1];

    // if same blocks, sort by by right values
    if(l1/blockSize === l2/blockSize)
      return r1 < r2 ? - 1 : 1;

    // if different blocks, sort by blocks
    return l1 < l2 ? - 1 : 1;
  });

  console.log(a);
  console.log(queries);
  
  let lPointer = 0, rPointer = 0;
  const map = {};

  queries.forEach(q => map[q[2]] = 0);

  console.log(map);

  // iterate through queries
  // while l pointer is less than l, exclude element at lPointer and increment lPointer
  // while l pointer is larger than l, include element at lPointer and decrement lPointer
  // while r pointer is smaller or equal to r, include element at rPointer and increment rPointer
  for(let q of queries){
    let l = q[0], r = q[1];
    const x = q[2];
    
    while(lPointer < l){
      map[a[lPointer]]--;
      lPointer++;
    }

    while(lPointer > l){
      map[a[lPointer - 1]]++;
      lPointer--;
    }

    // inclusive, since range is inclusive
    while(rPointer <= r){
      map[a[rPointer]]++;
      rPointer++;
    }

    while(rPointer > r + 1){
      map[a[rPointer - 1]]--;
      rPointer--;
    }

    if(map[x])
      count += map[x]

  } 

  return count;
}

// Input:
const a = [1, 2, 1, 3, 1, 2, 1];
let q1 = 
[
 [1,3,3], 
 [0,4,1], 
 [2,5,2], 
 [5,6,1]
];

console.log(solution(a, q1));

// Expected Output:
// 6

// Input:
const b = [1, 1, 1];
const q2 = 
[
[0,0,1], 
[0,2,1], 
[1,1,1], 
[1,2,1], 
[2,2,1], 
[0,0,2], 
[0,1,2], 
[0,2,2], 
[1,1,2], 
[1,2,2], 
[2,2,2]
];

console.log(solution(b, q2));
// Expected Output:
// 10

// Input:
const c = [35, 50, 28, 44, 95]
// queries:
const q3 = 
[[2,2,28], 
 [4,4,95], 
 [0,1,95], 
 [3,3,44], 
 [0,4,95], 
 [0,1,44], 
 [1,3,28], 
 [2,2,95], 
 [1,2,28], 
 [2,4,95], 
 [2,3,50], 
 [0,3,44], 
 [3,4,28], 
 [1,1,50], 
 [0,2,28], 
 [1,4,35], 
 [3,3,28], 
 [2,4,35], 
 [1,3,28], 
 [0,0,28], 
 [0,3,28], 
 [1,2,95], 
 [1,4,28], 
 [0,4,28], 
 [1,1,35], 
 [3,4,50], 
 [0,0,50], 
 [0,2,35], 
 [4,4,35], 
 [2,3,50]]

// console.log(solution(c, q3));
// Expected Output:
// 15