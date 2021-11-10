/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

const balancedParens = input => {

  if(!input)
    return false;

  // ignore all non bracket characters
  const formattedStr = input.replace(/[^\[\](){}]/g, '');

  // create object to store open brackets as key and closed brackets as corresponding values
  const brackets = {
    '{':'}',
    '[':']',
    '(':')',
  }
  
  const stack = [];

  // iterate through input
  for(let i = 0; i < formattedStr.length; i++){
    // if open bracket, save corresponding value in stack
    if(brackets[formattedStr[i]])
      stack.push(brackets[formattedStr[i]]);
    // else,
    // pop from stack and if popped element does not equal current element, return false
    else
      if(formattedStr[i] !== stack.pop())
        return false;
  }

  // if input is balanced, stack will be empty after iteration
  // return true if stack is empty 
  return stack.length === 0;
};

console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('const coolFunc = () => { anotherCoolFunc(); }'));  // true

module.exports = { balancedParens} ;
