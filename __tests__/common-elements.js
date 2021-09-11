const {commonElements} = require('../challenges/common-elements');

describe('common-elements', () => {

    it('should return an array of strings and numbers', () => {
        expect(commonElements([2, 10,'cat', 3, 99, 2000, 'dog', 'lion'], [3, 7, 2, 2000, 1, 'dog', 'cat'], [2, 100, 2000, 'dog', 3, 'lion']).sort()).toEqual([2, 2000, 3, 'dog']);
        expect(commonElements(['cat', 3, 50, 'lion', 'dog'], [3, 'dog', 7, 2, 50, 1, 'lion', 'cat'], [2, 50, 2000, 'dog', 3, 'lion']).sort()).toEqual([3, 50, 'dog', 'lion']);
    })

    it('should return an array of strings', () => {
        expect(commonElements(['cat', 3, 2000, 'dog'], [7, 2,  'dog', 'cat'], [1, 'dog', 5, 'lion'])).toEqual(['dog']);
        expect(commonElements(['lion', 1, 2, 'dog'], [7,'lion', 'dog', 'cat'], [1, 'dog', 5, 'lion']).sort()).toEqual(['dog', 'lion']);
    })

    it('should return an array of numbers', () => {
        expect(commonElements([3, 99, 2000, 'dog', 'lion'], [3, 1, 'cat', 99], [2, 3, 2000, 'dog', 99]).sort()).toEqual([3, 99]);
        expect(commonElements([1, 2, 'dog', 3], [7, 1, 2], [1, 2, 5, 'lion'], [2, 1]).sort()).toEqual([1, 2]);
    })

    it('should return Nothing in Common!', () => {
        expect(commonElements([],['dog'],[1,2,'dog'],['dog'])).toEqual('Nothing in Common!');
        expect(commonElements([1,2,5,6],['dog'],[1,2,'dog'],['dog'])).toEqual('Nothing in Common!');
    });


}); 
