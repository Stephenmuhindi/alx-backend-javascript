const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('number', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 3.0), 4);
    });

    it(' numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 5, 5), 10);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 1.5), 3.0);
    });

    it('numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.8, 1.8), 1.0);
    });

    it('numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.0, 2.0), 2.0);
    });

    it('numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 9.0, 3.0), 3.0);
    });

    it('0 and number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });

    it('number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
