// Parameters
// num: Number - The number that should be split into equal parts

// parts: Number - The number of parts that the number should be split into

// Return Value
// Array<Number> - An array of parts, with each index representing the part and the number contained within it representing the size of the part. The parts will be ordered from smallest to largest.

// Examples
// num	parts	Return Value
// Completely even parts example	10	5	[2,2,2,2,2]
// Even as can be parts example	20	6	[3,3,3,3,4,4]

/**
 * Returns a [parts]-length array of equal or nearly equal
 * integers that add up to [num].
 */
 var splitInteger = function(num, parts) {
  let result;
  const mod = num % parts;
  
  if(mod === 0)
    result = new Array(parts).fill(num/parts);
  else {
    result = [];
    const upperLimit = parts - mod; // upper limit for the integer quotient
    const intQuotient = Math.floor(num / parts);
    
    for(let i = 0; i < parts; i++){
      if(i < upperLimit)
        result.push(intQuotient);
      else
        result.push(intQuotient + 1);
    }
  }

return result;
}
