const {fastCache, fastCacheAdvanced} = require('../challenges/fast-cache');

describe('fast-cache test', () => {
  let cachedFunc;
  let mockCallback;

  beforeEach(() => {
    mockCallback = jest.fn(num => num * 3);
    cachedFunc = fastCache(mockCallback);
  });

  it('should return the right result', () => {
    expect(cachedFunc(3)).toBe(9);
  })

  it('should call the callback the first time a value is passed in', () => {
    cachedFunc(3);
    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('should not call the callback if the same value is passed in again', () => {
    cachedFunc(6);
    cachedFunc(4);
    cachedFunc(5);
    cachedFunc(4);
    cachedFunc(5);
    expect(mockCallback.mock.calls.length).toBe(3);
  });

});

xdescribe('fast-cache advanced test', () => {
  let mockMult;
  let mockAdd;
  let mockPluralize;
  let cachedMult;
  let cachedAdd;
  let cachedPluralize;

  beforeEach(() => {
    const times3 = num => num * 3;

    const add = (...nums) => {
      return nums.reduce((sum, current) => sum + current);
    };

    const pluralizedKeys = (...objs) => {
      return objs.reduce((pluralizedKeys, obj) => {
        return pluralizedKeys.concat(Object.keys(obj).map(key => `${key}s`));
      }, [])
    };

    mockMult = jest.fn(times3)
    mockAdd = jest.fn(add);
    mockPluralize = jest.fn(pluralizedKeys);

    cachedMult = fastCacheAdvanced(mockMult);
    cachedAdd = fastCacheAdvanced(mockAdd);
    cachedPluralize = fastCacheAdvanced(mockPluralize);
  });

  it('should return the right result', () => {
    expect(cachedMult(3)).toBe(9);
    expect(cachedAdd(1,2,3)).toBe(6);
    expect(cachedPluralize({'cat': true}, {'dog': true, 'frog': true})).toEqual(['cats', 'dogs', 'frogs']);
  });

  it('should call the callback the first time an argument is passed in', () => {
    cachedMult(3);
    cachedAdd(3, 4, 5);
    cachedPluralize({'plant': true});
    expect(mockMult.mock.calls.length).toBe(1);
    expect(mockAdd.mock.calls.length).toBe(1);
    expect(mockPluralize.mock.calls.length).toBe(1);
  });

  it('should not call the callback if the same argument is passed in again, including unknown number of arguments, or objects/arrays as arguments', () => {
    cachedMult(3);
    cachedMult(3);
    cachedMult(4);
    cachedMult(4);
    cachedMult(4);
    cachedAdd(3, 4, 5);
    cachedAdd(3, 4, 5);
    cachedAdd(3, 4);
    cachedAdd(3, 4, 5, 6);
    cachedAdd(3, 4, 5);
    cachedPluralize({'plant': true});
    cachedPluralize({'plant': true});
    cachedPluralize({'banana': true});
    cachedPluralize({'banana': true});
    cachedPluralize({'banana': true}, {'tree': true});
    expect(mockMult.mock.calls.length).toBe(2);
    expect(mockAdd.mock.calls.length).toBe(3);
    expect(mockPluralize.mock.calls.length).toBe(3);
  });
});