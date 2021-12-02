// assume that the array does not have duplicate values

// a  x times rotated array is an array that has been shifted right or left by x number of positions

// strategy:
// use binary search - at least one half of the array will always be sorted
// 1. if the key is in the sorted range, perform regular binary search function
// 2. if the key is in the unsorted range, process the unsorted range then use binary search again on that specific range

// this can be done with recursion, which would have time compleity of O(log n) and space complexity of O(log n) 
// due to the function being pushed onto the callstack everytime its invoked

// the iterative approach would have better space complexity
let binarySearchRotated = function(arr, key) {
  if(!arr || !arr.length)
    return -1;

  let start = 0, end = arr.length - 1;

  while(start <= end){
    const mid = start + Math.floor((end - start)/ 2);

    if(arr[mid] === key)
      return mid;
    
    // perform binary search key falls in the sorted range
    if(arr[start] < arr[mid] && key >= arr[start] && key < arr[mid])
      end = mid - 1;
    
    else if(arr[end] > arr[mid] && key > arr[mid] && key <= arr[end])
      start = mid + 1;

    // examine the unsorted range if key falls in range
    else if(arr[start] > arr[mid])
      end = mid - 1;

    else if(arr[end] < arr[mid])
      start = mid + 1;
  }

  return -1;
};