const { drawStairs, drawStar } = require('../challenges/draw-stairs.js');

describe('drawStairs test', () => {
	let logOutput;

	beforeAll(() => {
		console.nativeLog = console.log;
		console.log = (...args) => logOutput += args.join('') + '\n';
	});

	beforeEach(() => logOutput = '');

	afterAll(() => console.log = console.nativeLog);

  describe('positive height n', () => {
		it('should draw correct stairs for n = 1', () => {
			drawStairs(1);
			expect(logOutput).toBe(`*\n`);
		});
		it('should draw correct stairs for n = 2', () => {
			drawStairs(2);
			expect(logOutput).toBe(` *\n**\n`);
		});
		it('should draw correct stairs for n = 3', () => {
			drawStairs(3);
			expect(logOutput).toBe(`  *\n **\n***\n`);
		});
		it('should draw correct stairs for n = 4', () => {
			drawStairs(4);
			expect(logOutput).toBe(`   *\n  **\n ***\n****\n`);
		});
		it('should draw correct stairs for n = 5', () => {
			drawStairs(5);
			expect(logOutput).toBe(`    *\n   **\n  ***\n ****\n*****\n`);
		});
	});

	describe('non-positive height n', () => {
		it('should draw no stairs for n = 0', () => {
			drawStairs(0);
			expect(logOutput).toBe(``);
		});
		it('should draw no stairs for n = -100', () => {
			drawStairs(-100);
			expect(logOutput).toBe(``);
		});
	});
});

xdescribe('drawStar test', () => {
	let logOutput;

	beforeAll(() => {
		console.nativeLog = console.log;
		console.log = (...args) => logOutput += args.join('') + '\n';
	});

	beforeEach(() => logOutput = '');

	afterAll(() => console.log = console.nativeLog);

	describe('odd positive n', () => {
		it('should draw correct star for n = 1', () => {
			drawStar(1);
			expect(logOutput).toBe(`+\n`);
		});
		it('should draw correct star for n = 3', () => {
			drawStar(3);
			expect(logOutput).toBe(`\\|/\n-+-\n/|\\\n`);
		});
		it('should draw correct star for n = 5', () => {
			drawStar(5);
			expect(logOutput).toBe(`\\ | /\n \\|/ \n--+--\n /|\\ \n/ | \\\n`);
		});
		it('should draw correct star for n = 7', () => {
			drawStar(7);
			expect(logOutput).toBe(`\\  |  /\n \\ | / \n  \\|/  \n---+---\n  /|\\  \n / | \\ \n/  |  \\\n`);
		});
	});

	describe('even positive n', () => {
		it('should draw no star for n = 2', () => {
			drawStar(2);
			expect(logOutput).toBe(``);
		});
		it('should draw no star for n = 4', () => {
			drawStar(4);
			expect(logOutput).toBe(``);
		});
	});

	describe('non-positive n', () => {
		it('should draw no star for n = 0', () => {
			drawStar(0);
			expect(logOutput).toBe(``);
		});
		it('should draw no star for n = -10', () => {
			drawStar(-10);
			expect(logOutput).toBe(``);
		});
	});
});
