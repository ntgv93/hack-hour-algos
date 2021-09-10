/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */

// time complexity: O(n) i think

function pow(base, power, result = base) {
  // base cases:
  if(power === 1)
    return result;

  return power > 0 ? pow(base, power - 1, result * base)
                   : pow(base, power + 1, result / base);
}

console.log(pow(2,0));
/**
 * Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
 */

function powRecurse(base, power) {
  // for a recursive approach remember to write your base case
  // write your recursive logic here



}

module.exports = { pow, powRecurse };
