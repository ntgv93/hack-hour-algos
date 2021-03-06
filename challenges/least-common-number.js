// Given three integer arrays sorted in ascending order, return the smallest number that is common in all three arrays.

// stategy: 3 pointer technique
// time complexity: O(a + b + c) => o(n)
// space complexity: O(1);

const findLeastCommonNumber = function(a, b, c) {
  // pointers for other arrays;
  let j = 0, k = 0;
  
  // iterate through first array
  for(let i = 0; i < a.length; i++){

    // while a[i] is larger than b[j], increment j
    while(a[i] > b[j] && j < b.length){
      j++
    }

    // while a[i] is larger than c[k], increment k
    while(a[i] > c[k] && k < c.length){
      k++;
    }
    
    // if result is found, then return
    if(a[i] === b[j] && b[j] === c[k]){
      return a[i];
    }
  }
  return -1;
};

const a = [1,2,3,9,4,5];
const b = [6,7,8,9];
const c = [3,9,13,15,20];
console.log(findLeastCommonNumber(a, b, c)); // expected 9

// stategy: get all common numbers from input arrays
// return the smallest number from the reduced array

// time complexity: O(n)
const findLeastCommonNumber2 = arrs => {
  // get all common numbers
  const arr = arrs.reduce((a, c) => {
    const commonNums = [];
    
    a.forEach(num => {
      if(c.includes(num)){
        commonNums.push(num);
        //short circuiting the loop
        return commonNums;
      }
    })
    
    return commonNums;
  });
  
  return arr[0] || -1;
}
console.log(findLeastCommonNumber2([a, b, c])); // expected 9