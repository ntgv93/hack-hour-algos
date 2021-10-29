jest.useFakeTimers();
const {throttle} = require('../challenges/throttle.js');

/**
 * Notes about the await Promise.resolve() lines are at the end of the file
 */

describe('throttle test', () => {
  let shots;
  const callback = () => {
    shots++;
  };
  
  beforeEach(() => {
    shots = 0;
  });
  
  it('behaves as a normal function if the time spacing between functions is greater than the provided time interval', async done => {
    const thrCb = throttle(callback, 100);
    
    thrCb();
    jest.advanceTimersByTime(150);
    thrCb();
    jest.advanceTimersByTime(150);
    thrCb();
    
    await Promise.resolve(); 
    expect(shots).toEqual(3);
    done();
  });
  
  it('throttles subsequent fire attempts into one shot after cooldown', async done => {
    const thrCb = throttle(callback, 100);
    
    thrCb();
    jest.advanceTimersByTime(10);
    thrCb();
    jest.advanceTimersByTime(10);
    thrCb();
    jest.advanceTimersByTime(10);
    thrCb();
    
    await Promise.resolve(); 
    expect(shots).toEqual(1);
    
    jest.advanceTimersByTime(71);
    await Promise.resolve(); 
    expect(shots).toEqual(2);
    
    done();
  });
  
  it('handles the general case', async done => {
    const thrCb = throttle(callback, 100);
    
    thrCb();
    jest.advanceTimersByTime(10);
    thrCb();
    jest.advanceTimersByTime(10);
    thrCb();
    jest.advanceTimersByTime(10);
    thrCb();
    
    await Promise.resolve(); 
    expect(shots).toEqual(1);
    
    jest.advanceTimersByTime(71);
    await Promise.resolve(); 
    expect(shots).toEqual(2);
    
    jest.advanceTimersByTime(101);
    thrCb();
    await Promise.resolve(); 
    expect(shots).toEqual(3);
    
    done();
  });
});

/**
 * About the await Promise.resolve() lines in the tests
 * 
 * Under the hood, async/await works by pushing all the code between await statements
 * into .then() callbacks chained onto the await statement's fulfilled Promise. 
 * So inserting await Promise.resolve() before the statements that check the number 
 * of shots causes those statements to be pushed to the end of the microtask queue. 
 * Once the current script has finished executing, the event loop will empty 
 * the microtask queue, which would would first clear any Promise jobs from the 
 * throttled callback and eventually reach the task that checks the number of shots.
 * 
 * This is mainly researched from a Stack Overflow answer here: 
 * stackoverflow.com/questions/52177631/jest-timer-and-promise-dont-work-well-settimeout-and-async-function
 * 
 * Here is the Promise-based solution that inspired the edit:
 * 
 */

// const throttle = (f, t) => {
//   let pending = false;
//   let loaded = false;
//   return () => {
//     if (!pending) {
//       pending = true;
//       f();
//       new Promise((res, rej) => setTimeout(() => {
//         console.log('setTimeout callback');
//         res((pending = false));
//       }, t))
//       .then(() => {
//         console.log('then callback');
//         if (loaded) {
//           loaded = false;
//           f();
//         }
//       });
//     } else loaded = true;
//     console.log('end of throttle reached');
//   };
// };

