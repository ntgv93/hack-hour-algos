/*

Given a string, find the length of the longest substring without repeating characters.
Just return the length of the substring, not the substring itself.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The longest substring is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The longest substring is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The longest substring is "wke", with the length of 3.
Note that the longest substring must actually be a substring, as "pwke" is a
subsequence and not a substring.

Example 4:
Input: ""
Output: 0
Explanation: an empty string has length 0

Hint: think about the largest valid "window" of a substring without repeating
characters. How do we keep track of this "window"?

*/

const substringNonrepeating = str => {
  // declare a set to hold longest substr 
  // declare a set to hold temp chars
  
  // iterate through str
    // iterate through str starting with current's char position
      // if temp set has current char 
        // if temp set > longest substr set
          // set longest substr set to temp set     
          // reset temp set
          // break

      // else
        // add char into set

    // return longest substr set size

  let longestSubstrSet = new Set();
  let tempSubstrSet = new Set();
  
  for(let i = 0; i < str.length; i++){
    for(let j = i; j < str.length; j++){
      if(tempSubstrSet.has(str[j])){
        if(tempSubstrSet.size > longestSubstrSet.size) 
          longestSubstrSet = tempSubstrSet;

        tempSubstrSet = new Set();
        break;
      }
      tempSubstrSet.add(str[j]);
    }
  }
  return longestSubstrSet.size;
};

module.exports = {substringNonrepeating};