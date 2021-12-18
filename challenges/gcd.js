// given an array, find the GCD 

// euclidian algorithm to find GCD between two numbers
// find the remainder of a / b, with a being the larger number and b being the smaller number
// if the remainder is 0, then return the previous divisor which is b
// if not, then find the remainder of b / current remainder, and continue until remainder is 0

// time complexity: O(log(a+b))
  // time complexity of this algo is the number of steps it would require to reduce a to 0
// space complexity: O(log(a+b)) - recursion
const gcd = (a, b) => {
  if(a === 0)
    return b;
  
  return gcd(b % a, a);
}

// time complexity: O(n * log(a+b));
// space complexity: O(log(a+b)) - recursion
const gcdArr = arr => {
  // iterate through array and find gcd of 2 adjacent numbers
  let result = arr[0];

  for(let i = 1; i < arr.length; i++){
    result = gcd(result, arr[i]);
  }

  return result;
}

console.log(gcdArr([2,2,2,200, 3, 0]));