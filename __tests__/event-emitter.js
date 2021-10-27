const EventEmitter  = require('../challenges/event-emitter.js'); 

describe('EventEmitter Tests', () => {
  const emitter = new EventEmitter();
  let countIncrement = 0;
  emitter.on('increment', () => countIncrement++);

  describe('single listener', () => {
    it('should not invoke function before trigger is called', () => {
      expect(countIncrement).toEqual(0);
    });
    it('should trigger with one event listener', () => {
      emitter.trigger('increment');
      expect(countIncrement).toEqual(1);
    });
  });

  describe('multiple listeners', () => {
    let countDecrement = 0;
    emitter.on('decrement', () => countDecrement--);
    it('should handle multiple listeners', () => {
      emitter.trigger('decrement');
      expect(countDecrement).toEqual(-1);
    });

    let countByOne = 0;
    let countByTwo = 0;
    emitter.on('count', () => countByOne += 1);
    emitter.on('count', () => countByTwo += 2);
    it('should handle multiple listeners on the same event', () => {
      emitter.trigger('count');
      expect(countByOne).toEqual(1);
      expect(countByTwo).toEqual(2);
    });
  });

  describe('passing arguments', () => {
    const arr = [];
    emitter.on('pushWord', (word) => arr.push(word));
    it('should pass extra arguments to listener', () => {
      emitter.trigger('pushWord', 'hello');
      emitter.trigger('pushWord', 'world');
      expect(arr).toEqual(['hello', 'world']);
    });
  });
});
