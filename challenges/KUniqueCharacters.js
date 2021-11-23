/*
  K Unique Characters
  Have the function KUniqueCharacters(str) take the str parameter being passed and find the longest substring that contains k unique characters, where k will be the first character from the string. The substring will start from the second position in the string because the first character will be the integer k. For example: if str is "2aabbacbaa" there are several substrings that all contain 2 unique characters, namely: ["aabba", "ac", "cb", "ba"], but your program should return "aabba" because it is the longest substring. If there are multiple longest substrings, then return the first substring encountered with the longest length. k will range from 1 to 6.
  Examples
  Input: "3aabacbebebe"
  Output: cbebebe
  Input: "2aabbcbbbadef"
  Output: bbcbbb
*/

// given: string with constant k 
// return: longest substring with k unique characters

// sliding window approach
function KUniqueCharacters(str) { 
  if(!str || !str.length)
    return "Invalid input argument";

  // declare a global variable to keep track of longest substring
  let longestSubstr = "";
  
  // iterate through str up until the 2nd to last char
  for(let i = 1; i < str.length - 1; i++){
    // declare a local variable to hold local substring
    // declare a counter variable to hold the copy of k
    let localSubstr = str[i];
    let counter = +str[0]; // convert from char to number

    // for each char, iterate through the rest of str
    for(let j = i + 1; j < str.length; j++){
      // if local substr does not have char
        // decrement counter
      if(localSubstr.indexOf(str[j]) === -1) 
        counter--;

      // if counter is === 0
        // break out of loop
      if(counter === 0)
        break;

      // concat local substr with current char
      localSubstr += str[j];
    }
    
    // if localSubstr is longer than global substring, set global substring to localSubstr
    if(localSubstr.length > longestSubstr.length)
      longestSubstr = localSubstr;
  }
  return longestSubstr; 
}

// keep this function call here 
console.log(KUniqueCharacters(readline()));