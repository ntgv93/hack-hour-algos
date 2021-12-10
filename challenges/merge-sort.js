/* 
  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.

*/

// recursively break down array into 2 halves until each array is just 1 element
// with a helper function compare the 2 halves, and combine them into a sorted set 
// return the sorted set

// time complexity: O(n * log n) for worst case, as it always divides the array in two halves and takes linear time to merge arrays
// space complexity: O(n) - for every merge recursive call, an array is created that takes O(n) space to hold all values in arrays
// merge sorted arrays into a sorted array

const merge = (arr1, arr2) => {
  const mergedArr = [];
  let i = 0, j = 0;
  while(arr1[i] !== undefined || arr2[j] !== undefined){
    // pick the smaller element among the smallest elements of left and right sub arrays
      if(arr1[i] <= arr2[j])
        mergedArr.push(arr1[i++]);
      else if (arr1[i] > arr2[j])
        mergedArr.push(arr2[j++]);
      // add any left over elements to the merged array
      // in case there is a subarray that's larger than the other
      else
        mergedArr.push(arr1[i++] || arr2[j++]);
  }

  return mergedArr;
}

const mergeSort = array => {
  // if there is only 1 element left in the array, it is considered sorted and returned
  if(array.length < 2)
    return array;

  const left = array.slice(0, array.length/2);
  const right = array.slice(array.length/2, array.length);
  
  // recursively merge left and right sub arrays starting starting with smallest
  return merge(mergeSort(left), mergeSort(right));
}

module.exports = { mergeSort };