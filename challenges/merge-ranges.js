/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:
intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]
*/

// strategy: 
// sort the sub arrays by their first value
// declare a results array that will hold the first intervals and use it for comparison

// iterate through intervals starting with index 1
  // if results last interval's 2nd value is larger than current interval's 1st value
    // set the last interval's 2nd value to the max between last interval's 2nd value and current intervals 2nd value
  // else, push current interval into results
  // return results

const mergeRanges = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);
  
  const results = [intervals[0]];
  
  intervals.forEach(currentInterval => {
    const lastInterval = results[results.length - 1];
    if(lastInterval[1] >= currentInterval[0])
      lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
    else
      results.push(currentInterval);
  });

  return results;
};

const pairs = [[6, 7], [2, 5], [12, 15], [10, 11]];
console.log(mergeRanges(pairs));

module.exports = {mergeRanges};
