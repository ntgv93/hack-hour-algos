/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

const drawStairs = n => {
     // iterate up until n start with 1
          // with each iteration, repeat n - i number of empty spaces and i number of stars

     let logStr = "";
     for(let i = 1; i <= n; i++){
          logStr += ' '.repeat(n - i) + '*'.repeat(i) + '\n'; 
     }

     return logStr;
};

/* 

Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
\ | /
 \|/ 
--+--
 /|\ 
/ | \
*/

const drawStar = n => {
     let str = '' ;

     // i is column axis in the star
     let midIndex = Math.floor(n / 2);

     // draw top half
     // empty space at the beginning of the row spans 0 spaces, then increments by 1 with each row, hence an incrememntal loop
     for(let i = 0; i < midIndex; i++){
          str += ' '.repeat(i) + '\\' + ' '.repeat(Math.abs(i - midIndex) - 1)  // left side
               + '|'                                                                      
               + ' '.repeat(Math.abs(i - midIndex) - 1) + '/' + '\n';           // right side
     }
               
     // mid point
     str += '-'.repeat(midIndex) + '+' + '-'.repeat(midIndex) + '\n';

     // draw bottom half
     // empty space at the beginning of the row spans with midIndex - 1 spaces, then decrement by 1 with each row, hence an decremental loop
     for(let i = midIndex - 1; i >= 0; i--){
          str += ' '.repeat(i) + '/' + ' '.repeat(midIndex - i - 1)             // left side
               + '|' 
               + ' '.repeat(midIndex - i - 1) + '\\' + ' '.repeat() + '\n';     // right side
     }

     return str;
};

console.log(drawStar(5));

module.exports = { drawStairs, drawStar };
