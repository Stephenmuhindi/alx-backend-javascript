const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
 it(`checking if numbers round`, function() {
      const res = calculateNumber(1, 2);
      assert.strictEqual(res, 3);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(1, 3.7);
      assert.strictEqual(res, 5);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(1.2, 3.7);
      assert.strictEqual(res, 5);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(6, 9);
      assert.strictEqual(res, 15);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(-1.5, -3.7);
      assert.strictEqual(res, -5);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(4, 3);
	assert.strictEqual(res, 7);
    });
});
