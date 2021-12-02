// Given a large array of integers and a window of size ww, find the current maximum value in the window as the window slides through the entire array.

// while a loop inside a loop can be used to solve this algo
// e.g. for (i = 0; i < arr.length - window_size; i++)
//          for(j = i; i < (j + window_size); j++)
//              find max
// the time complexity of this algorith will be O(n*m) on avg and O(n^2) at worst

// with a dequeue, where each element is popped and pushed exactly once, the time complexity will be faster - O(n) at worst
// strategy funnel values into the back end of the dequeue - 
// 1. pop all elements that are smaller than the current value from the dequeue
// 2. remove the first at the front (beginning) of the dequeue as the window moves
// 3. push the current element into the dequeue 
// 4. max value in a widnow will always be at the front of the dequeue

// time complexity: O(n) - every element is pushed and popped from the queue once
// space complexity: O(w) - where w is the size of the widnow
let findMaxSlidingWindow = function(arr, window_size) {
  var result = [];

  if(!arr || arr.length < window_size)
    return;

  //deque to store arr indices
  window = [];

  // fill the first window
  for(let i = 0; i < window_size; i++){
      // while the current element is larger or equal to the arr element at index at the back of the deque, pop element from deque
      while(window.length && arr[i] >= arr[window[window.length-1]])
        window.pop();
      // push element into the dequeue
      window.push(i);
  }
  // get the max value from window, which is at the beginning(front) of the deque
  result.push(arr[window[0]]);

  // fill the window as it moves
  for(let i = window_size; i < arr.length; i++){
      // while the current element is larger or equal to the element at index at the back of the queue, pop element from queue 
      while(window.length && arr[i] >= arr[window[window.length-1]])
        window.pop();

      // remove the element at the front the deque that is no longer in the window as it moves
      if(window.length && window[0] <= i - window_size)
        window.shift();

      // push current index into the deque
      window.push(i);

      // push the element that is at the end of the deque to results
      result.push(arr[window[0]]);
  }

  // get the max from additional windows
  return result;
};

// tests
console.log(findMaxSlidingWindow([1,2,3,4,3,2,1,2,5], 4)) // expected	[4,4,4,4,3,5]
console.log(findMaxSlidingWindow([1,2,3,4,3,2,1,2,5], 3)) // expected [3,4,4,4,3,2,5]	
console.log(findMaxSlidingWindow([1,2,3,4,3,2,1,2,5], 5)) // expected [4,4,4,5]	