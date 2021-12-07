// create a function that would mimic a text editor and construct a string based on the operations provided in the array
// assume that select range will always be valid

// Input:
// operations:
// ["TYPE Great Britain is the capital of London", 
//  "SELECT 0 12", 
//  "COPY", 
//  "SELECT 32 37", 
//  "COPY", 
//  "PASTE 2", 
//  "SELECT 0 12", 
//  "PASTE", 
//  "MOVE_CURSOR 32", 
//  "TYPE !"]
// Output:
// "Great Britain is the capital of LondonGreat BritainLondon!"

// time complexity: O(n)
// space complexity: O(x) where x is the longest array substring
function solution(operations) {
  let result = "";
  let cursorPos = 0;
  let selectStart = 0, selectEnd = 0;
  const clipBoard = [];
  
  for(let str of operations){
    const strArr = str.split(' ');
    const op = strArr[0];
    const argSentence = strArr.slice(1).join(" "); 
    
    switch(op){
      case 'TYPE':
        result += argSentence;
        cursorPos += argSentence.length;
        break;
      case 'SELECT':
        selectStart = +strArr[1];
        selectEnd = +strArr[2];
        cursorPos = selectEnd + 1;
        break;
      case 'MOVE_CURSOR':
        cursorPos += +strArr[1];
        
        if(cursorPos < 0)
            cursorPos = 0;
        if(cursorPos >= result.length)
            cursorPos = result.length;
        if(selectEnd !== 0){
            selectStart = 0; 
            selectEnd = 0;
        }
        break;
      case 'COPY':
        if(selectEnd !== 0)
            clipBoard.push(result.substr(selectStart, selectEnd + 1));
        break;
      case 'PASTE':
        let stepsBack = +strArr[1];
        
        let strToPaste;

        if(Number.isNaN(stepsBack)){
          strToPaste = clipBoard[clipBoard.length - 1];
        } 
        
        else if(stepsBack <= clipBoard.length){
          strToPaste = clipBoard[clipBoard.length - stepsBack];
        }

        result = result.substr(0, selectEnd ? selectStart : cursorPos) + (strToPaste || '') + result.substr(cursorPos);
        break;

      default: 
        break;
    }

    console.log(cursorPos);

  }
  
  return result;
}


const arr = 
["TYPE Great Britain is the capital of London", 
 "SELECT 0 12", 
 "COPY", 
 "SELECT 32 37", 
 "COPY", 
 "PASTE 2", 
 "SELECT 0 12", 
 "PASTE", 
 "MOVE_CURSOR 32", 
 "TYPE !"];

console.log(solution(arr));