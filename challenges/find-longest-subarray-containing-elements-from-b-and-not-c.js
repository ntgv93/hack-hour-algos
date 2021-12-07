
// given 3 arrays, return the longest sub array of a that has elements in b but not in c 

// Input:
// a: [1000000000, -1000000000, 1000000000]
// b: [1, 2, 1000000000, -1000000000]
// c: [0, 3, 4, -1000000000]
// Output:
// []
// Details:
// The output subarray length is not longest possible
// One of the correct outputs for this test case is: [1000000000].

// strategy: linear scan
function solution(a, b, c) {
  let globalArr = [];
  let localArr = [];

  for(let i = 0; i < a.length; i++){
    if(b.includes(a[i]) && !c.includes(a[i]) )
        localArr.push(a[i]);
    else {
      localArr = [];
    }

    if(localArr.length > globalArr.length){
        globalArr = localArr;
    }
  }
 
  return globalArr;
}

const a = [1, 1, 2, 3, 1, 2, 2, 2, 5]
const b = [1, 2, 1000000000, -1000000000]
const c = [0, 3, 4, -1000000000]

console.log(solution(a, b, c));
