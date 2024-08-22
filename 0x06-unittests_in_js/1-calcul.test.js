const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return 5 when type is SUM and inputs are 2.4 and 2.5', () => {
    assert.strictEqual(calculateNumber('SUM', 2.4, 2.5), 5);
  });

  it('should return -3 when type is SUBTRACT and inputs are 1.4 and 4.4', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.4), -3);
  });

  it('should return 5 when type is SUM and inputs are 1.9 and 3.1', () => {
    assert.strictEqual(calculateNumber('SUM', 1.9, 3.1), 5);
  });

  it('should return 0 when type is SUBTRACT and inputs are 2.5 and 2.5', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 2.5), 0);
  });

  it('should return 2.5 when type is DIVIDE and inputs are 4.5 and 2.2', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4.5, 2.2), 2.5);
  });

  it('should return "Error" when type is DIVIDE and second input is 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4.5, 0), 'Error');
  });

  it('should throw an error when an invalid operation type is provided', () => {
    assert.throws(
      () => calculateNumber('INVALID_TYPE', 2, 3),
      /Invalid operation type/,
    );
  });
});
