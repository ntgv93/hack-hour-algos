/* 
Make an EventEmitter class that mimics the functionality of event listeners.

EventEmitter will have two methods:
- an 'on' method that will take in a function name and function declaration
- a 'trigger' method that takes in a function name and optional arguments

When 'trigger' is invoked, it should execute the function passed in, 
according to functions assigned with the 'on' method.

Example:
  const instance = new EventEmitter();
  let counter = 0;
  instance.on('increment', () => counter++); // counter should be 0
  instance.trigger('increment'); // counter should be 1
  instance.trigger('increment'); // counter should be 2


Caveats:
- If we repeatedly call .on with the same event name, it should
  continue to call the old function(s) as well. 
  Meaning, we can have multiple listeners for one event.
- If `obj.trigger` is called with additional arguments, pass those to the listeners.
- It is not necessary to write a way to remove listeners. 

*/

function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  const funcs = this.events[funcName];
  if(!funcs){
    this.events[funcName] = [];
  } 

  this.events[funcName].push(func);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  const funcs = this.events[funcName]; 
  if(funcs)
    funcs.forEach(func => func(...args));
};

const instance = new EventEmitter();
let countByOne = 0;
let countByTwo = 0;
instance.on('count', () => countByOne += 1);
instance.on('count', () => countByTwo += 2);

instance.trigger('count');
console.log(countByOne);
console.log(countByTwo);

module.exports = EventEmitter;
