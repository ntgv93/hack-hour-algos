// Hoares' algorithn - pivot
// https://medium.com/@kasho/quick-sort-algorithm-in-javascript-5432a06e5b7a

// quick-sort: array is divided by a pivot that partitions the array in two: 
// a left partition that has elements with values less than the pivot point 
// and a right partition that has elements with values larger than the pivot point
// then with recursion, sort the ever shrinking window on both of these partitions

// time complexity: partitioning in the middle makes the worst case O(n log n) 
  // if pivot was picked as first or last elements and the arr is pre-sorted, the worst time complexity is O(n^2)
// space complexity: O(log n) due to recursion taking up memory on the call stack
let swap = (arr,i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let partition = (arr, left, right) => {
  // set middle element as the pivot, and declare 2 pointers on both sides
  const pivot = arr[Math.floor([left + right] / 2)];
  let i = left, j = right;

  while(i <= j){
    // find the index of the first element on the left that is larger than pivot
    while(arr[i] < pivot)
      i++;

    // find the index of the first element on the right that is smaller than pivot
    while(arr[j] > pivot)
      j--;

    // if i is less or equal to j, swap misplaced elements at pointers 
    // then move i and j so that they continue to converge towards the pivot point
    if(i <= j){
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  // return the index pointing where to new pivot position
  return i;
};

let quickSort = (arr, left = 0, right = arr.length - 1) => {
   const pivot = partition(arr, left, right);

   // if left is less than pivot, then it means that there is a partition on the left that hasn't been sorted
   if(left < pivot - 1) 
    quickSort(arr, left, pivot - 1);

  // if right is larger than pivot, then it means that there is a partion on the right that hasn't been sorted
  if(right > pivot) 
    quickSort(arr, pivot, right);
  
  return arr;
};

const a = [3, 5, 7, 3, 3, 4, 5, 6, 7 ,8 ,9 ,0, 10];
console.log(quickSort(a));