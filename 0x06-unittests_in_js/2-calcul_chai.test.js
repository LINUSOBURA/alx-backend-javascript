const { expect } = require("chai");
const calcul = require("./2-calcul_chai");

describe("Calculator", function () {
  describe("type == sum", function () {
    it("Should round the inputs and return sum", function () {
      expect(calcul("SUM", 1.4, 2.6)).to.equal(4);
      expect(calcul("SUM", 2.1, 2.9)).to.equal(5);
      expect(calcul("SUM", -1.4, -2.6)).to.equal(-4);
      expect(calcul("SUM", 0, 0)).to.equal(0);
      expect(calcul("SUM", 1.4, 0)).to.equal(1);
      expect(calcul("SUM", -1.4, 1.6)).to.equal(1);
    });
  });

  describe("type == subtract", function () {
    it("Should round off inputs and return the difference", function () {
      expect(calcul("SUBTRACT", 5.6, 2.3)).to.equal(4);
      expect(calcul("SUBTRACT", 2.8, 2.1)).to.equal(1);
      expect(calcul("SUBTRACT", -5.6, -2.3)).to.equal(-4);
      expect(calcul("SUBTRACT", 0, 0)).to.equal(0);
      expect(calcul("SUBTRACT", 5.6, 0)).to.equal(6);
      expect(calcul("SUBTRACT", 0, 5.6)).to.equal(-6);
    });
  });

  describe("type == Divide", function () {
    it("Should round off inputs and return the quotient", function () {
      expect(calcul("DIVIDE", 9.8, 2.1)).to.equal(5);
      expect(calcul("DIVIDE", 7.2, 2.9)).to.equal(2.3333333333333335);
      expect(calcul("DIVIDE", -9.8, 2.1)).to.equal(-5);
      expect(calcul("DIVIDE", 0, 2.1)).to.equal(0);
    });
  });

  it('should return "Error" when dividing by 0', function () {
    expect(calcul("DIVIDE", 7.2, 0.2)).to.equal("Error");
    expect(calcul("DIVIDE", 7.2, 0.4)).to.equal("Error"); // b rounds to 0
    expect(calcul("DIVIDE", 7.2, 0)).to.equal("Error");
    expect(calcul("DIVIDE", 0, 0.4)).to.equal("Error"); // a rounds to 0, b rounds to 0
  });

  it("should handle large numbers correctly", function () {
    expect(calcul("SUM", 1e15 + 0.4, 1e15 + 0.6)).to.equal(2e15 + 1);
    expect(calcul("SUBTRACT", 1e15 + 0.5, 1e15 + 0.4)).to.equal(1);
    expect(calcul("DIVIDE", 1e15 + 0.5, 1e14 + 0.4)).to.equal(
      10.00000000000001
    );
  });

  it("should handle small numbers correctly", function () {
    expect(calcul("SUM", 1e-15, 1e-15)).to.equal(0);
    expect(calcul("SUBTRACT", 1e-15, 1e-15)).to.equal(0);
  });

  it("should handle negative numbers correctly", function () {
    expect(calcul("SUM", -1.4, -2.6)).to.equal(-4);
    expect(calcul("SUBTRACT", -1.4, -2.6)).to.equal(2);
    expect(calcul("DIVIDE", -4.8, 2.2)).to.equal(-2.5);
    expect(calcul("DIVIDE", -4.8, -2.2)).to.equal(2.5);
  });
});
