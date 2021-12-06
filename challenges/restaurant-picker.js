// given a list of arrays with each array being the restaraunt preferences of each friend, 
// return the agreed upon restaurant if no other 2 friends want another  same restaurant
// if there are no agreed upon restaurants, return -1;
// assume that there are only 3 friends

// 3 pointer approach
const resPicker = prefs =>{

  let f1prefs = prefs[0], f2prefs = prefs[1], f3prefs = prefs[2];
  let f1 = 0, f2 = 0, f3 = 0;

  
  while(f1 < f1prefs.length){
    const set = new Set();
    f2 = 0;
    f3 = 0;

    while(f1prefs[f1] !== f2prefs[f2]){

      set.add(f2prefs[f2]);
      f2++;
    }

    while(f1prefs[f1] !== f3prefs[f3]){
      if(set.has(f3prefs[f3]))
        return -1;
      else
        set.add(f3prefs[f3]);
      f3++;
    }

    if(f1prefs[f1] === f3prefs[f3])
      return f1prefs[f1];
    
    f1++;
  }
}

const prefs = [
  [1,2,3], 
  [2,1,3], 
  [3,2,1]
];

console.log(resPicker(prefs));