// Given array, determine if it can be partitioned into any combination of 2 subsets such that the sum in both subsets are equal

// 2d solution: https://www.educative.io/module/lesson/data-structures-in-javascript/RL6Mn5KX5YK / https://www.youtube.com/watch?v=s6FhG--P7z0
// space optimized 1d array solution below - same time complexity with optimized space complexity: https://www.youtube.com/watch?v=vZtCKL_OwdA

// strategy: 
// find half of the sum
  // this is to determine if subset of the arg array adds up to half - if it does, then the remaining subset will also add up to the same half
// because different combinations in nums can add up to some value up to half, use dynamic programming to determine what values they add up to
  // create an array of half + 1 length
    // with each index representing a sum that numbers in arg array can add up to
    // and each element being a boolean if its true
    // first element in the array is initiated to true, as you need a base case for DP
      // also because element at index 0 says "there are 0 numbers that will add up to 0", which is the default true
  // loop through nums and see what values they add up to - if some combination of values add up to half, then return true
  // if no values add up to half, return false

// Time complexity: O(n * h) where n is the number of arg nums and h is half of sum of elements
// Space complexity: O(h) where h is half of the sum of values
let canPartition = function(nums) {
  // find sum
  const sum = nums.reduce((a, c) => a + c);

  // if sum is odd - no possible combination of integers can add up to it so return false
  if(sum % 2 !== 0)
    return false; 

  // find half value
  const half = sum / 2; // will always be an integer since sum is even
  
  // to hold combinations
  // no need create with default false, since elements can be assigned to indexes on the go
  const possibleSums = [];

  // base case: an empty combination will add up to possible sum = 0
  possibleSums[0] = true;
  
  // with DP, build a an array that will indicate which values (up to half), different numbers in the num array can add up to
    // idx -> int value, el -> bool
  for(let num of nums){
    // start from right to left, because if we start from left to right, each complement must only be counted once with dynamic calculation
    for(let posblSum = half; posblSum >= num; posblSum--){
      // each possible sum is a part that makes up other possible sums
      // so the possible sum is true if it itself is already true, or if there exists a complement (which another possible possible sum) that is true  
      possibleSums[posblSum] = possibleSums[posblSum] || possibleSums[posblSum - num];

      // if possible sums add up to half value, then return true
      if(possibleSums[half])
        return true;
    }
  }

  return false;
};

console.log(canPartition([1,2,3]));
console.log(canPartition([1,2,2]));