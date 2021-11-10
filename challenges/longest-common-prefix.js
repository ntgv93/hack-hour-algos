/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

const longestCommonPrefix = (strs) => {
  let lcp = '';

  if(!strs || !strs.length) return lcp;

  // sort array
  strs.sort();

  for(let i = 0; i < strs[0].length; i++){
    // only compare the first and the last strings
    // since array is sorted and the first and last strings would have the least common elements
    if(strs[0][i] === strs[strs.length-1][i])
      lcp += strs[0][i];
    else
      break;
  }

  return lcp;
};

module.exports = { longestCommonPrefix };
