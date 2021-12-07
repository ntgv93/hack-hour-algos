// Given an array of integers a, find how many of its continuous subarays of length m that contain at least 1 pair of integers with a sum equal to k


// strategy: check each subarray if it contains a two sum pair
// time complexity: O(n * m), where n is the size of arg a and m is the sub array length
// space complexity: O(m), where m is the subarray length
const countSubArrs = (a, m, k) => {
  
  let subArrsCount = 0;

  for(let i = 0; i <= a.length - m; i++){
    if(twoSum(a.slice(i, i + m), k))
      subArrsCount++;
  }  

  return subArrsCount;
}

// helper two-sum function
const twoSum = (arr, target) => {
  const set = new Set();

  for(let num of arr){
    if(set.has(target - num))
      return true;
    else
      set.add(num);
  }

  return false;
}

console.log(countSubArrs([2, 4, 7, 5, 3, 5, 8, 5, 1, 7], 4, 10)); // should be 5
console.log(countSubArrs([15, 8, 8, 2, 6, 5, 1, 7], 2, 8)); // should be 2