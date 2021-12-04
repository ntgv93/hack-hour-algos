// Given a list of daily stock prices (integers for simplicity), return the buy and sell prices for making the maximum profit.

// We need to maximize the single buy/sell profit. If we can’t make any profit, we’ll try to minimize the loss. For the below examples, buy and sell prices for making a maximum profit are highlighted.

// strategy: two pointer approach
// 1 pointer to keep track of the buy price, the other to go down the rest of the array
// iterate through the array
// if local profit (diff between elements sell and buy pointers) is larger than global profit, update global profit and store buy price + sell price in the results array
// if current element is smaller than buy price, update buy price

// time complexity: O(n)
// space complexity: O(1)
let findBuySellStockPrices = arr => {
  
  let buyPrice = arr[0];
  let profit = -Infinity;
  let result = [];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] - buyPrice > profit){
      profit = arr[i] - buyPrice;
      result = [buyPrice, arr[i]];
    }

    buyPrice = Math.min(arr[i], buyPrice);
  }

  return result; //Return a tuple with (high, low) price values
};

console.log(findBuySellStockPrices([13,9,8,7,6,5,4,3,2,1]));
// console.log(findBuySellStockPrices([1,2,3,4,3,2,1,2,5]));