const { permPalin } = require('../challenges/perm-palin.js');

describe('perm-palin test', () => {
  let string;

  it('should return true if string length is even and zero odd character frequencies', () => {
    string = 'aabbcc';
    expect(permPalin(string)).toBe(true);
    string = 'gaaddddg';
    expect(permPalin(string)).toBe(true);
    string = 'aaxx';
    expect(permPalin(string)).toBe(true);
  });

  it('should return true if string length is odd and only one odd character frequency', () => {
    string = 'aabbd';
    expect(permPalin(string)).toBe(true);
    string = 'd';
    expect(permPalin(string)).toBe(true);
    string = 'zaabbdz';
    expect(permPalin(string)).toBe(true);
  });

  it('should return false if string length is even and at least one odd character frequency', () => {
    string = 'aabbcd';
    expect(permPalin(string)).toBe(false);
    string = 'cd';
    expect(permPalin(string)).toBe(false);
    string = 'zeaabbcd';
    expect(permPalin(string)).toBe(false);
  });

  it('should return false if string length is odd and more than one odd character frequency', () => {
    string = 'aabccddd';
    expect(permPalin(string)).toBe(false);
    string = 'aabddd';
    expect(permPalin(string)).toBe(false);
  });

  it('should return true if string is empty', () => {
    string = '';
    expect(permPalin(string)).toBe(true);
  });

  it('should return false if input is anything other than string', () => {
    string = {};
    expect(permPalin(string)).toBe(false);
  });

});
