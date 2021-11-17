/*

Write a function that works the same as Promise.all

From MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

The Promise.all() method returns a single Promise that resolves when all of the
promises passed as an iterable have resolved or when the iterable contains no
promises. It rejects with the reason of the first promise that rejects.

Hint:

use the Promise constructor. The Promise constructor takes in two arguments:
"resolve" and "reject". Calling "resolve" on a value will complete will the
value. Calling "reject" on a value will error-out with the value.

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
for info on the Promise constructor.

*/

const promiseAll = promises => {
  // create an array that will hold all promise values 
  const result = Array(promises.length);

  /* To keep track of how many promise got resolved */
  let counter = 0;

  // return a new promise 
  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then(item => {
          counter++;
          result[i] = item; // result push may not work because some of order of insertion may not be the same, hence why assignment is needed

          if(promises.length === counter)
            resolve(result);
        })
        .catch(err => reject(err));
    });
  });  
};


module.exports = {promiseAll};

