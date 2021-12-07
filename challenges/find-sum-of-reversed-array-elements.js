// give an array of numbers, find the sum of its reveresed number 
// a reverse number here is defined by reversing a number and turn any leading zeroes to trailing zeroes: 80860 => 68080

function solution(arr) {
  console.log(arr.map(el => reverse(el)));
  return arr.map(el => reverse(el)).reduce((a, c) => a + c);
}

function reverse(num){
  let reversed = 0;
  let trailingZeroes = 0;

  // count trailing zeroes
  for(let i = (num+'').length - 1; i >= 0; i--){
      if((num+'')[i] === '0')
        trailingZeroes++;
      else
        break;
  }

  // 
  while(num !== 0){
      reversed = reversed * 10 + num % 10;
      num = Math.floor(num / 10);      
  }

  while(trailingZeroes > 0){
    reversed *= 10;
    trailingZeroes--;
  }
    
  return reversed;
}
