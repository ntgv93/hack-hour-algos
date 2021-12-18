

// Input:
// operations:

// Output:
// "CodeSoulnio"
// Expected Output:
// "CodeSignaniol"

function solution(operations) {
  let result = "";
  let cursorPos = 0;
  let selectStart = 0;
  let selectEnd = 0;
  const undoPositions = [];
  
      
  for(let str of operations){
      const strArr = str.split(' ');
      const op = strArr[0];
      const argument = strArr.slice(1).join(' ');
      
      switch(op){
          case 'TYPE':
            if(selectEnd){
                  undoPositions.push([result, selectEnd]);
                  result = result.substring(0, selectStart) + argument + result.substring(selectEnd + 1);
                  cursorPos = selectStart + argument.length;
              } else {
                  undoPositions.push([result, cursorPos]);
                  result = result.substring(0, cursorPos) + argument + result.substr(cursorPos); 
                  cursorPos = (result.substring(0, cursorPos) + argument).length;
              }
              
              selectStart = 0;
              selectEnd = 0;
              break;
          case 'MOVE_CURSOR':
              if(!selectEnd){
                  selectStart = 0;
                  selectEnd = 0;
              }
              
              undoPositions.push(cursorPos);
              
              cursorPos += +argument;
              if(cursorPos > result.length)
                  cursorPos = result.length
              if(cursorPos < 0)
                  cursorPos = 0;
                  
              break;
          case 'SELECT':
              selectStart = +strArr[1];
              selectEnd = +strArr[2];
              cursorPos = selectEnd + 1;
              break;
          case 'UNDO':
              if(undoPositions.length > 0){
                  const undoOp = undoPositions[undoPositions.length - 1]; 
                  if(Array.isArray(undoOp)){
                    result = undoOp[0];
                    cursorPos = undoOp[1];
                  }
                  else 
                      cursorPos = undoOp[0]; 
                      
                  undoPositions.pop();
              }
          default: 
              break;
      }
      console.log(undoPositions);
      console.log(cursorPos);
      console.log(result);
  }
  
  return result;
}

const a = 
["TYPE Code", 
 "TYPE Signal", 
 "MOVE_CURSOR -3", 
 "SELECT 5 8", 
 "TYPE ou", 
 "UNDO", 
 "TYPE nio"
]


console.log(solution(a)); // expected output CodeSignaniol