/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

// since a share can only be sold after it has been bought, we will 
// two pointer technique, one to keep track of the minimum number, other to go down the array

const highestProfit = apple_stock => {

  if(!apple_stock || !apple_stock.length)
    return 0;

  // variable to cache min price
  let minPrice = apple_stock[0];

  // variable to cache max profit
  let maxProfit = 0;

  // iterate through array
  for(let i = 0; i < apple_stock.length; i++){
    // find min price
    if(apple_stock[i] < minPrice)
      minPrice = apple_stock[i];

    // find max profit
    const localMaxProfit = apple_stock[i] - minPrice;
    if(localMaxProfit > maxProfit)
      maxProfit = localMaxProfit;
  }

  return maxProfit;
}

module.exports = {highestProfit}