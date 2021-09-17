const {highestProfit} = require('../challenges/apple-stocks.js');

describe('apple-stocks\' test', () => {
    let stocks;

    it('Function should return 0 if input is invalid', () => {
        expect(highestProfit(['ten', 'nine', 'eight'])).toEqual(0);
        expect(highestProfit({0: 10, 1: 5, 2: 0})).toEqual(0);
        expect(highestProfit('stocks')).toEqual(0);
        expect(highestProfit(1000)).toEqual(0);
        expect(highestProfit(stocks)).toEqual(0);
    });

    it('Function should return 0 if there\'s no possibility of making a profit', () => {
        stocks = [100, 90, 70, 40, 0];
        expect(highestProfit(stocks)).toEqual(0);
        expect(highestProfit([])).toEqual(0);
    });

    it('Function should return the highest profit possible', () => {
        stocks = [0, 2000, 4000, 6000, 8000, 10000];
        expect(highestProfit(stocks)).toEqual(10000);
        stocks = [2000, 1000, 100, 200, 400, 100];
        expect(highestProfit(stocks)).toEqual(300);
        stocks = [8, 5, 4, 3, 2, 7, 2];
        expect(highestProfit(stocks)).toEqual(5);
    });

    it ('Function should return the highest profit possible when given multiple possible profits', () => {
        stocks = [1000, 500, 1000, 1500, 0, 200, 800, -10, 0, 100];
        expect(highestProfit(stocks)).toEqual(1000);
        stocks = [0, 300, 200, 500, 600, 100, 399, 350, 500];
        expect(highestProfit(stocks)).toEqual(600);
        stocks = [200, 600, 700, 100, 300, 200, 620];
        expect(highestProfit(stocks)).toEqual(520);
    });
});