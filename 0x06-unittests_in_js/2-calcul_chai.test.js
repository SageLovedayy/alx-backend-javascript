const { expect } = require('chai');
const { describe, it } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return 5 when type is SUM and inputs are 2.4 and 2.5', () => {
    expect(calculateNumber('SUM', 2.4, 2.5)).to.equal(5);
  });

  it('should return -3 when type is SUBTRACT and inputs are 1.4 and 4.4', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.4)).to.equal(-3);
  });

  it('should return 5 when type is SUM and inputs are 1.9 and 3.1', () => {
    expect(calculateNumber('SUM', 1.9, 3.1)).to.equal(5);
  });

  it('should return 0 when type is SUBTRACT and inputs are 2.5 and 2.5', () => {
    expect(calculateNumber('SUBTRACT', 2.5, 2.5)).to.equal(0);
  });

  it('should return 2.5 when type is DIVIDE and inputs are 4.5 and 2.2', () => {
    expect(calculateNumber('DIVIDE', 4.5, 2.2)).to.equal(2.5);
  });

  it('should return "Error" when type is DIVIDE and the second input is 0', () => {
    expect(calculateNumber('DIVIDE', 4.5, 0)).to.equal('Error');
  });

  it('should throw an error when an invalid operation type is provided', () => {
    expect(() => calculateNumber('INVALID_TYPE', 2, 3)).to.throw(
      'Invalid operation type',
    );
  });
});
