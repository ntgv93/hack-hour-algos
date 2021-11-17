const {promiseAll} = require('../challenges/promise-all.js');

describe('promiseAll test', () => {
  const delayValue = (val, time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(val);
      }, time);
    });
  };
  
  const failure = time => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('failure'));
      }, time);
    });
  };
  
  it('handles succeeding promises', done => {
    const promises = [[3, 5], [2, 1], [8, 7]].map(pair => delayValue(pair[0], pair[1]));
    
    promiseAll(promises)
      .then(results => {
        expect(results).toEqual([3, 2, 8]);
        done();
      })
  });
  
  it('handles failing promises', done => {
    const promises = [[3, 5], [2, 1], [8, 7]].map(pair => delayValue(pair[0], pair[1]));
    promises.push(failure(2));
    
    promiseAll(promises)
      .catch(err => {
        expect(err).toEqual(new Error('failure'));
        done();
      });
  });
});

