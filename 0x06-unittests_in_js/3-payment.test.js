const sinon = require('sinon');
const { describe, it, beforeEach } = require('mocha');
const { afterEach } = require('mocha');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const { calculateNumber } = require('./utils');

describe('sendPaymentRequestToApi function', () => {
  let utilSpy;

  beforeEach(() => {
    utilSpy = sinon.spy(calculateNumber);
  });

  afterEach(() => {
    utilSpy.restore();
  });

  it('validate the usage of the Utils function', () => {
    sendPaymentRequestToApi(100, 20);

    expect(utilSpy.calledOnce).to.be.true;

    expect(utilSpy.calledWith('SUM', 100, 20)).to.be.true;
  });
});
