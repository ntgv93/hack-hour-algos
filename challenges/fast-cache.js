/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

const fastCache = func => {
  const outputs = {};

  return function(arg) {
    if(outputs[arg] === undefined){
        outputs[arg] = func(arg);
    }
    
    return outputs[arg];
  }
};


/*
Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
HINT: you might need to use the spread operator...
*/

const fastCacheAdvanced = func => {
    const outputs = {};
    
    return function(...args){
        if(!args.length)
          return [];

        const argsStr = typeof args[0] ==='object' ? args.map(el => Object.entries(el)).join('') :  args.join('');

        if(outputs[argsStr] === undefined){
            outputs[argsStr] = func(...args);
            console.log(argsStr);
        }
        
        return outputs[argsStr];
    }
};

const pluralizedKeys = (...objs) => {
  return objs.reduce((pluralizedKeys, obj) => {
    return pluralizedKeys.concat(Object.keys(obj).map(key => `${key}s`));
  }, [])
};

console.log(pluralizedKeys());
console.log(pluralizedKeys({'plant': true}));
console.log(pluralizedKeys({'plant': true}));
console.log(pluralizedKeys({'plant': true}));

const func = fastCacheAdvanced(pluralizedKeys);
console.log(func({'plant': true}))
console.log(func({'plant': true}))
console.log(func({'banana': true}))
console.log(func({'banana': true}))
console.log(func({'banana': true}, {'tree': true}))

module.exports = {fastCache, fastCacheAdvanced};