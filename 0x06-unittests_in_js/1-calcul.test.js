const assert = require("assert");
const calculateNumber = require("../0x06-unittests_in_js/1-calcul");
const { describe, it } = require("node:test");

describe("Calculator", function () {
  it("Should round the inputs and return sum", function () {
    assert.strictEqual(
      calculateNumber("SUM", 1.4, 4.5),
      Math.round(1.4) + Math.round(4.5)
    );
  });

  it("Should round off inputs and return the difference", function () {
    assert.strictEqual(
      calculateNumber("SUBTRACT", 1.4, 4.5),
      Math.round(1.4) - Math.round(4.5)
    );
  });

  it("Should round off inputs and return the quotient", function () {
    assert.strictEqual(
      calculateNumber("DIVIDE", 1.4, 4.5),
      Math.round(1.4) / Math.round(4.5)
    );
    assert.equal(calculateNumber("DIVIDE", 1.4, 0), "Error");
  });
});
