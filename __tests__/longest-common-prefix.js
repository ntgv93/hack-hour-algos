const { longestCommonPrefix } = require('../challenges/longest-common-prefix');

describe('longestCommonPrefix tests', () => {
    let input;
    let expectedOutput;
    it('should handle an array of all identical strings', () => {
        input = ['same', 'same', 'same'];
        expectedOutput = 'same';
        expect(longestCommonPrefix(input)).toBe(expectedOutput);
    });

    it('should return the only word in array if passed an array with a length of 1', () => {
        input = ['onlyword'];
        expectedOutput = 'onlyword';
        expect(longestCommonPrefix(input)).toBe(expectedOutput);
    });

    it('should return an empty string if input is an empty array', () => {
        input = [];
        expectedOutput = '';
        expect(longestCommonPrefix(input)).toBe(expectedOutput);
    });

    it('should return an empty string if there is no common prefix between array elements', () => {
        input = ['no', 'common', 'prefix', 'here', 'sad'];
        expectedOutput = '';
        expect(longestCommonPrefix(input)).toBe(expectedOutput);
    });

    it('should return longest common prefix amongst strings in an array ', () => {
        input = ['flower', 'flow', 'flight'];
        expectedOutput = 'fl';
        expect(longestCommonPrefix(input)).toBe(expectedOutput);
    });

});