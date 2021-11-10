/*

Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters 'r', 'p', and 's'.

For example:

rps(0) -> ['']
rps(1) -> ['r', 'p', 's']
rps(2) -> ['rr', 'rp', 'rs', 'pr', 'pp', 'ps', 'sr', 'sp', 'ss']
rps(3) -> [
  'rrr', 'rrp', 'rrs', 'rpr', 'rpp', 'rps', 'rsr', 'rsp', 'rss',
  'prr', 'prp', 'prs', 'ppr', 'ppp', 'pps', 'psr', 'psp', 'pss',
  'srr', 'srp', 'srs', 'spr', 'spp', 'sps', 'ssr', 'ssp', 'sss'
]

The strings must be returned in the order suggested above.

*/

const rps = n => {

  if(!n)
    return [''];

  //iterate through chars 
    //for every char, recursively create a combination until the length of that combination is equal to input n

  const chars = ['r','p','s'];
  const combinations = [];

  // create a recursive helper function to generate sequences
  const generateCombination = (sequence = '') => {
    console.log(sequence);
    // base case: if sequence length matches input n, then sequence is complete and push sequence into results array
    if(sequence.length === n)
      return combinations.push(sequence);
      
    // recursive case: for each char, recursively generate a new sequence
    chars.forEach(char => generateCombination(sequence + char));
  }

  generateCombination();

  return combinations;
};

/*

Extension:

Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters in 'chars'. Assume that there will be
no duplicates in 'chars'.

This is equivalent to returning all possible passwords of length n given a
character set 'chars'.

For example:

passwords('ab', 1) -> ['a', 'b']
passwords('abxy', 2) -> [
  'aa', 'ab', 'ax', 'ay',
  'ba', 'bb', 'bx', 'by',
  'xa', 'xb', 'xx', 'xy',
  'ya', 'yb', 'yx', 'yy'
]

The strings must be returned in order reflecting the order of letters in 'chars'

*/

const passwords = (chars, n) => {
  if(!chars || !chars.length || !n)
    return [''];

  const results = [];

  // recursive helper function to generate different combinations
  const generateCombination = (sequence = '') => {
    // base case: if a sequence length is equal to n, then push sequence into final array
    if(sequence.length === n)
      return results.push(sequence);
      
    // recursive case: for each char in chars, generate a new combination
    for(let char of chars){
      generateCombination(sequence + char)
    };
    
  }
  
  generateCombination();

  return results;

};

console.log(passwords('abxy', 2));
module.exports = {rps, passwords};
