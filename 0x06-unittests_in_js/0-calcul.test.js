const assert = require("assert");
const calculateNumber = require("../0x06-unittests_in_js/0-calcul");

describe("Calculator", function () {
  it("Should round the inputs and return sum", function () {
    assert.strictEqual(calculateNumber(1, 3), Math.round(1) + Math.round(3));
    assert.strictEqual(
      calculateNumber(1, 3.7),
      Math.round(1) + Math.round(3.7)
    );
    assert.strictEqual(
      calculateNumber(1.2, 3.7),
      Math.round(1.2) + Math.round(3.7)
    );
    assert.strictEqual(
      calculateNumber(1.5, 3.7),
      Math.round(1.5) + Math.round(3.7)
    );
    assert.strictEqual(
      calculateNumber(1.5, 3),
      Math.round(1.5) + Math.round(3)
    );
  });
});
