// strategy: reader / writer pointers
// start with both pointers at the end of the array
// move both pointers left,
  // if reader points to a 0
  // if reader points to a non-0, then write the element at the place of writer, then move writer pointer left
  // move reader left
  // if all elements have been read, then assign the remaining write elements 0

  let moveZerosToLeft = function(arr) {
    let writer = arr.length - 1, reader = arr.length - 1;
  
    while(writer >= 0){
      if(arr[reader] !== 0)
        // once all elements have been read, then it means that all non 0 elements have been moved up to the right
        // and the remaining write elements can be assigned 0
        arr[writer--] = arr[reader] ?? 0;

      if(reader >= 0)
        reader--;
    }

    return arr;
  };

let v = [1, 10, 20, 0, 59, 63, 0, 88, 0, 89];
moveZerosToLeft(v);

console.log(v);