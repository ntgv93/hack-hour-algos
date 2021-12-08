// Given an array of integers a, find how many of its continuous subarays of length m that contain at least 1 pair of integers with a sum equal to k

// note, this algorithm could probably be optimized even further https://stackoverflow.com/questions/70268376/find-continuous-subarrays-that-have-at-least-1-pair-adding-up-to-target-sum-op

// strategy: check each subarray if it contains a two sum pair
// time complexity: O(n * m), where n is the size of arg a and m is the sub array length
// space complexity: O(m), where m is the subarray length

function solution(a, m, k) {
  let count = 0;
  for(let i = 0; i <= a.length - m; i++){
      let set = new Set();
      
      for(let j = i; j < i + m; j++){
          if(set.has(k - a[j])){
              count++;
              break;
          }
          else
              set.add(a[j]);
      } 
  }
  
  return count;
}

console.time('execution time');
solution([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,51,2,3,4,5], 5, 5)
console.timeEnd('execution time');