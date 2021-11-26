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

// time complexity: o(n * n * log n)
  // could probably replace the arr.shift() to achiehve o(n * log n)
// merge sorted arrays into a sorted array

const merge = (arr1, arr2) => {
  const sortedArr = [];

  while(arr1.length && arr2.length){
    // pick the smaller element among the smallest elements of left and right sub arrays
      sortedArr.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }

  // Concatenate any left over elements in case we didn't go through entire sub arrays
  return [...sortedArr, ...arr1, ...arr2];
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