// given an array, return an array of all of its permutations

// strategy: build permutations, and add them to the results array
// to permute an array, for every number, set it aside, permute the rest of the array, then concat the two

// time complexity: O(n!) - pretty damn slow
// space complexity: O(n!) - pretty down memory intensive
const perm = arr => {
  const perms = [];

  const permute = (arr, perm = []) => {
    if(arr.length <= 0)
      perms.push(perm.slice()); // deep copy else the same reference to the same array will be added to the results
    else {
      for(let i = 0; i < arr.length; i++){
        let copy = arr.slice(); // deep copy to avoid side effects
        perm.push(arr[i]); // build perm
        copy.splice(i, 1); // set current number aside

        permute(copy, perm); // permute the rest of the array
        perm.pop(); // pop off last added value to perm after each step of permutation

      }
    }
  }

  permute(arr);
  return perms;
}

console.log(perm([1,2,3,4]));
