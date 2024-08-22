const { expect } = require("chai");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment.js");

describe("sendPaymentRequestToApi", function () {
  let consoleSpy;

  beforeEach(function () {
    // Spy on console.log before each test
    consoleSpy = sinon.spy(console, "log");
  });

  afterEach(function () {
    // Restore console.log after each test
    consoleSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly("The total is: 120")).to.be.true;
    // Verify console.log was called only once
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);

    // Verify console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly("The total is: 20")).to.be.true;
    // Verify console.log was called only once
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
