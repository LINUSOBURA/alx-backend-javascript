const { expect } = require("chai");
const sinon = require("sinon");

const Utils = require("./utils.js");
const sendPaymentRequestToApi = require("./3-payment.js");

describe("sendPaymentRequestToApi", function () {
  it("should call Utils.calculateNumber with SUM and the correct arguments", function () {
    const spy = sinon.spy(Utils, "calculateNumber");

    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
    spy.restore();
  });
});
