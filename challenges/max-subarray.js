/*
You are given an array of integers with both positive and negative numbers.
A valid subarray is any slice of consecutive elements from the array.
(
  e.g. the following are some valid subarrays of [3, 11, 2, 7, 4]
  [3, 11, 2]
  [11, 2, 7]
  [2]
  [3, 11, 2, 7, 4]
)
Find the subarray with the largest sum from the input array.

e.g.
input = [1, -2, 3, 10, -4, 7, 2, -5]
maxSubarray(input); 
// returns 18 from subarray [3, 10, -4, 7, 2]

input2 = [15, 20, -5, 10]
maxSubarray(input2); 
// returns 40 from subarray [15, 20, -5, 10]
*/

const maxSubarray = (arr) => {
  // sliding window algo

  if(!arr || !arr.length)
    return 0;

  let max = arr.reduce((a, c) => a + c);
  let maxSubarr = [...arr];

  for(let i = 0; i < arr.length; i++){
    let tempMax = 0;
    let tempArr = [];
    for(let j = i; j < arr.length; j++){
      tempMax += arr[j];
      tempArr.push(arr[j]);

      if(tempMax > max){
        maxSubarr = [...tempArr]
        max = tempMax;
      }
    }
  }

  return max;
}

/*
Extension: solve in linear time and constant space
Hint: Kadane's Algorithm
https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
*/

// Dynamic programming - if a problem can be broken down to an accumulation of solutions of smaller subproblems, then store solutions of smaller subproblems to minimize computation time
// e.g. array.reduce((a, c) => a + c); (to find the sum of the whole array, the sum at each index is an accumulation of itself and all previous sums. 
// Therefore, to calculate sum with each iteration, one would not have to re-add all previous elements, instead only having to add the already calculated sum of all previous elemenets plus the element itself)
// Kadane's algorithm - an example of dynamic programming
// local maximum at index i is element at index i or the sum of element at index i + local-maximum from previous sub arrays, whichever one is larger
const kadanesMaxSubarray = (arr) => {

  if(!arr || !arr.length)
    return 0;
  
  let local_max = 0;
  let global_max = -Infinity;
  
  for(let i = 0; i < arr.length; i++){
    local_max = Math.max(arr[i], arr[i] + local_max);
    
    if(local_max > global_max){
      global_max = local_max;
    }
  }
  
  return global_max;
}

console.log(kadanesMaxSubarray([15, 20, -5, -10]));

module.exports = { maxSubarray, kadanesMaxSubarray };
