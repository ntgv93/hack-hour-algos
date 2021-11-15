jest.useFakeTimers();
const {SecondClock} = require('../challenges/second-clock.js');

describe('SecondClock test', () => {
  let results;
  const cb = val => {
    results.push(val);
  };
  
  beforeEach(() => {
    results = [];
  });
  
  it('counts up to 60', done => {
    const clock = new SecondClock(cb);
    clock.start();
    jest.advanceTimersByTime(16001);
    
    const expectation = new Array(16).fill(null).map((_, i) => i + 1);
    
    expect(results).toEqual(expectation);
    clock.stop();
    done();
  });
  
  it('counts beyond 60, re-circling the clock', done => {
    const clock = new SecondClock(cb);
    clock.start();
    jest.advanceTimersByTime(62001);
    
    const expectation = new Array(60).fill(null).map((_, i) => i + 1)
      .concat([1, 2]);
    
    expect(results).toEqual(expectation);
    clock.stop();
    done();
  });
});
