const fibonacci = function(inNum) {
  if (inNum < 0) {
    return "OOPS"
  } else if (inNum == 1 || inNum == 0 ) {
    return Number(inNum)
  } else {
    let total = fibonacci(Number(inNum)-1) + fibonacci(Number(inNum)-2);
    return total;
  }
};

// Do not edit below this line
module.exports = fibonacci;
