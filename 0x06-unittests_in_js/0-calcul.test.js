const assert = require("assert");
const calculateNumber = require("../0x06-unittests_in_js/0-calcul");

const result1 = calculateNumber(4.5 + 5);

describe("Calculator", function () {
  it("Should round the inputs and return sum", function () {
    assert.strictEqual(result1, Math.round(result1));
  });
});
