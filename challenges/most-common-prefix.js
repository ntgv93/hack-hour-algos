// array of strings, will not contain other data types
/* [abc, absdsadas, asdasa, adoiajsla, salkd, ab, abcd, abide, asdjhdal, dfsddffd, glsjdsa] */
// array will not be empty

// helper function to find the longest common prefix in an array
// assumes that arg array is already sorted
const getLCP = (arr) => {
  let lcp = "";

  // since array is sorted, only first and last elements have to be compared since they'd have the least common prefixes
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0][i] === arr[arr.length - 1][i]) lcp += arr[0][i];
  }

  return lcp;
};

// returns an array of most occuring longest common prefixes
const getMostCommonLongestPrefixes = (arr) => {
  // declare a dictionary
  const prefixObj = {};

  // because the array is sorted, the most common, longest prefix cannot be longer than the first element in a subset of elements with the common first character
  arr.sort();

  // cache first string
  let firstStr = arr[0];

  // keep track of subset's lower and upper bounds
  let lowerBound = 0;
  let upperBound = 0;

  for (let i = 0, l = arr.length; i < l; i++) {
    // find the upper bound of a subset of elements the same first char for prefix
    if (arr[i][0] === firstStr[0]) upperBound++;
    // when range of subset is complete
    else {
      // find the lcp of the current subset
      const lcp = getLCP(arr.slice(lowerBound, upperBound));

      // store the prefix as key and bound range as value
      prefixObj[lcp] = upperBound - lowerBound;

      // move to the next window
      lowerBound = upperBound;
      upperBound++;

      // get first str of the new subset
      firstStr = arr[i];
    }

    // edge case handling - if current subset is the last subset with only 1 word
    if (upperBound === l) {
      // find the lcp of the array in lower bound - higher bound range
      const lcp = getLCP(arr.slice(lowerBound, upperBound));
      // store the prefix as key and bound range as value
      prefixObj[lcp] = upperBound - lowerBound;
    }
  }
  // find the maximum value in dictionary
  const max = Math.max(...Object.values(prefixObj));

  // turn dictionary keys into an array, and filter by keys that have the value = max
  // return array
  return Object.keys(prefixObj).filter((key) => prefixObj[key] === max);
};

// tests
console.log(
  getMostCommonLongestPrefixes([
    "abc",
    "absdasa",
    "abdoiajsla",
    "bsalkd",
    "gaf",
    "gaf",
    "gaf"
  ])
);

console.log(
  getMostCommonLongestPrefixes([
    "abc",
    "absdasa",
    "abdoiajsla",
    "bsalkd",
    "bsalkd",
    "bsalkd",
    "gag"
  ])
);
