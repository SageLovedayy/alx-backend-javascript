const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1.5 and 2.4', () => {
    assert.strictEqual(calculateNumber(1.5, 2.4), 4);
  });

  it('should return 5 when inputs are 1.7 and 3.2', () => {
    assert.strictEqual(calculateNumber(1.7, 3.2), 5);
  });

  it('should return 0 when inputs are 0.4 and 0.4', () => {
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
  });

  it('should return -2 when inputs are -1.5 and -1.4', () => {
    assert.strictEqual(calculateNumber(-1.5, -1.4), -2);
  });

  it('should return 0 when inputs are -1.2 and 0.7', () => {
    assert.strictEqual(calculateNumber(-1.2, 0.7), 0);
  });

  it('should return 2 when inputs are 0.9 and 0.9', () => {
    assert.strictEqual(calculateNumber(0.9, 0.9), 2);
  });

  it('should return 0 when inputs are 0.1 and -0.1', () => {
    assert.strictEqual(calculateNumber(0.1, -0.1), 0);
  });
});
