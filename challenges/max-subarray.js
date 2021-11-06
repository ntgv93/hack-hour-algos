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

console.log(maxSubarray([15, 20, -5, 10]));
/*
  Extension: solve in linear time and constant space
  Hint: Kadane's Algorithm
  https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
*/

const kadanesMaxSubarray = (arr) => {
  
}

module.exports = { maxSubarray, kadanesMaxSubarray };
