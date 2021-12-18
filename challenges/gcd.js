// given an array, find the GCD 

// euclidian algorithm to find GCD between two numbers
// find the remainder of a / b, with a being the larger number and b being the smaller number
// if the remainder is 0, then return the previous divisor which is b
// if not, then find the remainder of b / current remainder, and continue until remainder is 0
const gcd = (a, b) => {
  if(a === 0)
    return b;

  return gcd(b % a, a);
}
