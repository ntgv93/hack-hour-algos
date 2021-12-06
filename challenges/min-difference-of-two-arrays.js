// give 2 integer arrays of the same length, find the minimum possible difference between them
// difference is defined as the sum of absolute differences of corresponding elements in arrays
// diff = |a[0] - b[0]| + |a[1] - b[1]| .... etc.

// an element in array a can be replaced with any other element of a: [1,2,3] can be [2,2,3], [3,2,3], [1,1,3], [1,3,3], [1,2,1], [1,2,2];

// generate all permutations of a 
// iterate through a, replace each element with other elements in the array and store the permutation 
// for each permutation, find the difference between the corresponding elements in both arrays, and find the min diff
// Time complexity: O(n^2)
// Space complexity: O(n^2)

const minDiff = (a, b) => {

  let globalDiff = +Infinity;

  for(let i = 0; i < a.length; i++){
    const deepCopy = a.slice(); // deep copy array that is modified

    for(let j = 0; j < a.length; j++){
      if(i === j)
        continue;
      
      deepCopy[i] = a[j];
      const localDiff = deepCopy.map((num, idx) => Math.abs(num - b[idx])).reduce((a, c) => a + c);
      
      if(localDiff < globalDiff)
        globalDiff = localDiff;
    }
  }

  // return min diff
  return globalDiff;
}

console.log(minDiff([1, 3, 5], [5, 3, 1]))