// strategy: 
// using binary search twice
// once to look at the range that is immediately left outside of the key range and find it's upper bound
// once to look at the range that is immediately right outside of the key range and find its lower bound

// time complexity: O(2 log n) => asymptotic complexity is O(log n)
// space complexity: O(1) 

let findLowIndex = function(arr, key,) {
  let start = 0, end = arr.length - 1;
  let mid;
  
  // search the range that is immediately left of the lowest index of key
  // and reduce the range while until start > end
  while(start <= end){
    // mid has to stay in start - end range
    mid = start + Math.floor((end - start) / 2);

    if(arr[mid] >= key)
      end = mid - 1;
    else
      start = mid + 1;
  }

  // if element immediately right of end is equal to key, return element's position
  if(arr[end + 1] === key)
    return end + 1;
  
  return -1;
};

console.log(findLowIndex([1,1,2,2,2,2,3], 3));

let findHighIndex = function(arr, key) {
  let start = 0, end = arr.length - 1;
  let mid;
 
  // search the range that is immediately right of the highest index of key
  // reduce the range until start > end
  while(start <= end){
    // mid has to stay within range
    mid = start + Math.floor((end - start) / 2);
    
    if(arr[mid] <= key)
      start = mid + 1;
    else
      end = mid - 1;
  }
  
  // if element immediately left of start is equal to key, return element's position
  if(arr[start - 1] === key)
    return start - 1;
  
  return -1;
};

console.log(findHighIndex([1,1,2,2,2,2,3], 2));