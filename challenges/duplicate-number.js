/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

// Time complexity: O(n)
// Space complexity: O(n) - set increases in size with every iteration
const duplicateNumber = array => {
    // let set = new Set();

    // for(let num of array){
    //     if(set.has(num))
    //         return num;
    //     set.add(num);
    // }

    // return -1;

    const n = array.length - 1;
    const expectedSum = (n / 2) * (1 + n);
    const actualSum = array.reduce((a, b) => a + b);
    return actualSum - expectedSum;
};

console.log(duplicateNumber([1,5,4,3,6,2,4,7]));


/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

const duplicateNumberAdvanced = (array, size = array.length) => {

    // iterate through the array
    // if arr[absoluteVal] is negative, means that the number has been encountered before
    // else, assign arr[absoluteVal] = -arr[absoluteVal];

    // for(let i = 0; i < size; i++){
    //     let absoluteVal = Math.abs(array[i]);
    
    //     if(array[absoluteVal] < 0)
    //         return absoluteVal;
    //     else 
    //         array[absoluteVal] = -array[absoluteVal]; 
    // }
    
    // return -1;

    const n = array.length - 1;
    const k = Math.min(...array) - 1;
    const expectedSum = (n / 2) * (n + 1);
    const actualSum = array.reduce((a, b) => a + b);
    const actualSumAdjusted = actualSum - (k * n);
    return actualSumAdjusted - expectedSum;

};

console.log(duplicateNumberAdvanced([3, 4, 7, 6, 8, 5, 6]));
module.exports = { duplicateNumber, duplicateNumberAdvanced };
