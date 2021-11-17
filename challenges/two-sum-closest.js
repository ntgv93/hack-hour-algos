/*

Given an array nums of n integers and an integer target, find two integers in
nums such that the sum is closest to target. Return the sum of the two
integers. You may assume that each input would have exactly one solution, and
that the array will have at least two elements.

Example:

Given array nums [2, -2, 1] and target = 4.
The sum that is closet to the target is 3. (2 + 1 = 3).

Given array nums = [2, -3, -6, 7, 4] and target = 3.
The sum that is closest to the target is 4. (-3 + 7 = 4).

Given array nums = [3, 1, 4, 3] and target = 6.
The sum that is closest to the target is 6. (3 + 3 = 6).

Solve this problem using any strategy you would like: a naive solution is fine.

Extension:
The naive solution for this problem has O(n^2) time complexity. Can you come up
with a different solution with better time complexity? Hint: first sort the
array, which is O(n*log(n)) time, and see if you can post-process the array in
O(n) time.

*/

const twoSumClosest = (nums, target) => {
  
  if(!nums || !nums.length)
    return undefined;
  
  // sort array

  // set default sum to target distance to infinity

  // use the two pointers system - one on each end

  // while left pointer is less than right pointer

    // find the sum of elements at pointers

    // find the distance between the sum and the target
    
    // if local distance is less than global distance, 
      // update global distance
      // cache elements

    // if num is local distance is 

  nums.sort();

  console.log(nums);
  
  let firstEl, secEl;
  let global_diff = Infinity;

  let i = 0;
  let j = nums.length - 1;

  while(i < j){
    const sum = nums[i] + nums[j];
    const local_diff = Math.abs(sum-target);
    
    if(local_diff < global_diff){
      global_diff  = sum;
    }
  
    if(sum > target)
      j--;
    else 
      i++;
  }
  
  return global_diff ;
  
};

console.log(twoSumClosest([2, -3, -6, 7, 4], 3));
module.exports = {twoSumClosest};

