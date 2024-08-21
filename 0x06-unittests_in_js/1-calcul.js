function calculateNumber(type, a, b) {
  a = Math.round(a);
  b = Math.round(b);
  if (type == "SUM") {
    return (sum = a + b);
  } else if (type == "SUBTRACT") {
    return (sub = a - b);
  } else if (type == "DIVIDE") {
    if (b == 0) {
      return "Error";
    }
    return (div = a / b);
  }
}

module.exports = calculateNumber;
