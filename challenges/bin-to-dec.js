/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

function binToDec(binString){
    let decimal = 0; 
    let exp = 0;
    // iterate through the binString right to left
        // with each iteration, multiply the bin char with 2 to the power of the current index
        // total total sum, then returnd
    for(let i = binString.length - 1; i >= 0 ; i--){
        decimal += binString[i] * (2 ** exp);
        exp++; 
    }
    return decimal;
}

module.exports = {binToDec};