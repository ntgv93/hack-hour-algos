// Given an array of integers, rotate the array by NN elements where NN is an integer:

// For positive values of NN, perform a right rotation.
// For negative values of NN, perform a left rotation.

// strategy:   
  // if n is positive, then slice n elements from the end, and append it to  the beginning of the array
  // else, then slice the n elements from the start, and append to the end of the array
// time complexity: O(n)
// space compexity: O(n)
let rotateArray = function(arr, n) {
  if(!arr || !arr.length || !n)
    return;
  
  // since n is being used as an index below, this is to account for situations when n is larger then array.length
  n = n % arr.length;
  
  
  return n > 0 ? [...arr.slice(arr.length - n, arr.length), ...arr.slice(0, arr.length - n)]
  : [...arr.slice(-n, arr.length), ...arr.slice(0, -n)]
};

// strategy (involves parameter mutation)
// reverse the entire array
// if n > 0
  // reverse the first n elements in the reversed array
// else
  // reverse the first elements up to end - n in the reversed array
// reverse the remaining elements in the arrays

let rotateArray2 = (arr, n) => {
  
  // since n is being used as an index below, this is to account for situations when n is larger then array.length
  n = n % arr.length;

  if(n < 0)
    n = n + arr.length;

  reverseArr(arr);
  reverseArr(arr, 0, n - 1);
  reverseArr(arr, n)
  return arr;
}

let reverseArr = (arr, start = 0, end = arr.length - 1) => {
  while(start < end){
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr;
}

console.log(rotateArray2([1,2,3,4,5], 2));