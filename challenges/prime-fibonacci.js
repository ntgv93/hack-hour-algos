/*
  give number n, find all of the prime numbers in the first n numbers of the fibonacci sequence

  fib(5) => 1 1 2 3 5
  primeFib(5) => [2, 3, 5]

*/


// helper function to determine if number is prime
const isPrime = n => {
  const abs = Math.abs(n);
  
  if(abs < 2)
  return false;
  
  // if n = a * b, since a and b can't both be larger the sqrt(n)
  // in any factorization of n, at least one factor will have to be less than sqrt(n), or both factors must be sqrt(n)
  // meaning that only numbers up to sqrt(n) have to be checked
  for(let i = 2; i <= Math.sqrt(abs); i++){
    if(abs % i === 0)
    return false;
  }
  
  return true;
}

// generate a fib sequence with n numbers
// if a generated number is prime, then add number to array
const primeFib = n => {
  let n1 = 1, n2 = 1;
  const result = [];

  for(let i = 3; i <= n; i++){
    const n3 = n1 + n2;
    if(isPrime(n3))
      result.push(n3);
    
    n1 = n2;
    n2 = n3;
  }

  return result;
}

console.log(primeFib(10));