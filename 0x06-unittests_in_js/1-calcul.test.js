const assert = require("assert");
const calcul = require("../0x06-unittests_in_js/1-calcul");
const { describe, it } = require("node:test");

describe("Calculator", function () {
  describe("type==sum", function () {
    it("Should round the inputs and return sum", function () {
      assert.strictEqual(calcul("SUM", 1.4, 2.6), 4);
      assert.strictEqual(calcul("SUM", 2.1, 2.9), 5);
      assert.strictEqual(calcul("SUM", -1.4, -2.6), -4);
      assert.strictEqual(calcul("SUM", 0, 0), 0);
      assert.strictEqual(calcul("SUM", 1.4, 0), 1);
      assert.strictEqual(calcul("SUM", -1.4, 1.6), 1);
    });
  });

  describe("type == subtract", function () {
    it("Should round off inputs and return the difference", function () {
      assert.strictEqual(calcul("SUBTRACT", 5.6, 2.3), 4);
      assert.strictEqual(calcul("SUBTRACT", 2.8, 2.1), 1);
      assert.strictEqual(calcul("SUBTRACT", -5.6, -2.3), -4);
      assert.strictEqual(calcul("SUBTRACT", 0, 0), 0);
      assert.strictEqual(calcul("SUBTRACT", 5.6, 0), 6);
      assert.strictEqual(calcul("SUBTRACT", 0, 5.6), -6);
    });
  });

  describe("type == Divide", function () {
    it("Should round off inputs and return the quotient", function () {
      assert.strictEqual(calcul("DIVIDE", 9.8, 2.1), 5);
      assert.strictEqual(calcul("DIVIDE", 7.2, 2.9), 2.3333333333333335);
      assert.strictEqual(calcul("DIVIDE", -9.8, 2.1), -5);
      assert.strictEqual(calcul("DIVIDE", 0, 2.1), 0);
    });
  });

  // Edge case for division by zero
  it('should return "Error" when dividing by 0', function () {
    assert.strictEqual(calcul("DIVIDE", 7.2, 0.2), "Error");
    assert.strictEqual(calcul("DIVIDE", 7.2, 0.4), "Error"); // b rounds to 0
    assert.strictEqual(calcul("DIVIDE", 7.2, 0), "Error");
    assert.strictEqual(calcul("DIVIDE", 0, 0.4), "Error"); // a rounds to 0, b rounds to 0
  });

  // Test for invalid type
  it("should throw an error for an invalid type", function () {
    assert.throws(() => calcul("MULTIPLY", 1, 1), Error, "Invalid type");
    assert.throws(() => calcul("", 1, 1), Error, "Invalid type");
    assert.throws(() => calcul("DIV", 1, 1), Error, "Invalid type");
  });

  // Edge cases for large numbers
  it("should handle large numbers correctly", function () {
    assert.strictEqual(calcul("SUM", 1e15 + 0.4, 1e15 + 0.6), 2e15 + 1);
    assert.strictEqual(calcul("SUBTRACT", 1e15 + 0.5, 1e15 + 0.4), 1);
    assert.strictEqual(
      calcul("DIVIDE", 1e15 + 0.5, 1e14 + 0.4),
      10.00000000000001
    );
  });

  // Edge cases for small numbers
  it("should handle small numbers correctly", function () {
    assert.strictEqual(calcul("SUM", 1e-15, 1e-15), 0);
    assert.strictEqual(calcul("SUBTRACT", 1e-15, 1e-15), 0);
  });

  // Edge cases for negative numbers
  it("should handle negative numbers correctly", function () {
    assert.strictEqual(calcul("SUM", -1.4, -2.6), -4);
    assert.strictEqual(calcul("SUBTRACT", -1.4, -2.6), 2);
    assert.strictEqual(calcul("DIVIDE", -4.8, 2.2), -2.5);
    assert.strictEqual(calcul("DIVIDE", -4.8, -2.2), 2.5);
  });
});
