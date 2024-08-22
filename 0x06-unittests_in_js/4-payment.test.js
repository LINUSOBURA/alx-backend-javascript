const { expect } = require("chai");
const sinon = require("sinon");
const Utils = require("./utils.js");
const sendPaymentRequestToApi = require("./4-payment.js");

describe("sendPaymentRequestToApi", function () {
  it("should stub Utils.calculateNumber and spy on console.log", function () {
    // Stub Utils.calculateNumber to always return 10
    const stub = sinon.stub(Utils, "calculateNumber").returns(10);

    // Spy on console.log
    const consoleSpy = sinon.spy(console, "log");

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub was called with correct arguments
    expect(stub.calledOnceWithExactly("SUM", 100, 20)).to.be.true;

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly("The total is: 10")).to.be.true;

    // Restore the stub and spy
    stub.restore();
    consoleSpy.restore();
  });
});
