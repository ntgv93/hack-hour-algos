// given an array of arrays, group arrays by means and return an array sorted by the index of arg arrays, not the keys

function solution(a) {

  const map = new Map();
  
  a.forEach((arr, i) => {
      const mean = arr.reduce((a, c) => a + c)/arr.length;
      
      if(map.get(mean) === undefined)
          map.set(mean, [i]);
      else
          map.get(mean).push(i);
  });
  
  return [...map.values()];
}

const arrs = [[1,1,1], [0], [2,2,2]];
console.log(solution(arrs)) // expected {1: 0, 0: 1, 2: 2 }