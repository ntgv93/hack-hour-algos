/*
Challenge
Have the function SeatingStudents(arr) read the array of integers stored in arr which will be in the 
following format: [K, r1, r2, r3, ...] where K represents the number of desks in a classroom, 
and the rest of the integers in the array will be in sorted order and will represent the desks
 that are already occupied. All of the desks will be arranged in 2 columns, 
 where desk #1 is at the top left, desk #2 is at the top right, desk #3 is below #1, desk #4 is below #2, etc. 
 Your program should return the number of ways 2 students can be seated next to each other. 
 This means 1 student is on the left and 1 student on the right, or 1 student is directly above or below the other student. 
For example: if arr is [12, 2, 6, 7, 11] then this classrooms looks like the following picture: 
 
Based on above arrangement of occupied desks, there are a total of 6 ways to seat 2 new students next to each other. The combinations are: [1, 3], [3, 4], [3, 5], [8, 10], [9, 10], [10, 12]. So for this input your program should return 6. K will range from 2 to 24 and will always be an even number. After K, the number of occupied desks in the array can range from 0 to K. 
Sample Test Cases
Input:6, 4
Output:4
Input:8, 1, 8
Output:6
*/

/*
  [][x]
  [][]
  [][x]
  [x][]
  [][]
  [x][]
*/

function seatingStudents(arr) { 
  if(!arr || !arr.length)
    return "Invalid input argument";

  const seats = arr[0];
  const rows = seats / 2;

  // create a grid to mimic the seats layout and set default value of each seat to false (not occupied)
  const grid = [...new Array(rows)].map(() => [false, false]);

  // mark the taken seats as true (occupied)
  for(let i = 1; i < arr.length; i++){
    // odd seats are on the left, even seats are on the right
    if(arr[i] % 2 === 0)
      grid[arr[i] / 2 - 1][1] = true;
    else 
      grid[Math.floor(arr[i] / 2)][0] = true;
  }

  // declare a counter to keep track of possible seatings
  let seatings = 0;

  // loop up to the 2nd to last row of the grid and check adjacent seats
  // for each iteration, check current row and next row
  for(let row = 0; row < rows - 1; row++){
    // if there are 2 adjacent seats, increment counter
    
    // check right neighbor
    if(!grid[row][0] && !grid[row][1])
      seatings++;

    // check bottom left neighbor
    if(!grid[row][0] && !grid[row + 1][0])
      seatings++;

    // check top right vs bottom right neighbor
    if(!grid[row][1] && !grid[row + 1][1])
      seatings++;
  }

  // check bottom row
  if(!grid[rows - 1][0] && !grid[rows - 1][1])
    seatings++;

  // return the number of seatings
  return seatings; 
}
   
// [6, 4]
/*
  [x, x]
  [x, 4]
  [x, x]
*/
// possible seats = 4;

// keep this function call here 
console.log(seatingStudents([12, 2, 6, 7, 11]));

