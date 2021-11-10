/*

Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

const generateParentheses = n => {
  const result = [];

  // https://leetcode.com/problems/generate-parentheses/discuss/139455/Clean-JavaScript-backtracking-solution
  // using 2 counters, one for each half, each equal to arg n
  // recursively build for each counter:
  // if the number of ( left to add is larger than the number of ) left to add, then return because the parenthesis are no longer balanced
  // if left counter is > 0, then recursively add ( until left counter = 0
  // if right counter is > 0, then recursively add ) until right counter = 0
  // when both counters = 0, push to array

  const res = [];

  const generate = (l, r, s) => {

    // base case: at any iteration, the number of ( must be more or equal to ). 
    // if there are more ) than ( during any iteration, meaning that the parens are no longer balanced, return 
    if (l > r) return;  

    // base case: if string is complete, push result to array and return
    if(l === 0 && r === 0){
      res.push(s);
      return;   
    }

    if(l > 0) generate(l - 1, r, s + '(');
    if(r > 0) generate(l, r - 1, s + ')');
  }

  generate(n, n, '');
  return res;
};

console.log(generateParentheses(2))
module.exports = {generateParentheses};
