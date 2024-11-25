const sumAll = function(num1, num2) {
  minRange = Math.min(num1, num2)
  maxRange = Math.max(num1, num2)
  if (minRange < 0) {
    return "ERROR"
  } else if (num1 !== Math.floor(num1) || num2 !== Math.floor(num2)) {
    return "ERROR"
  } else {
    sum = 0;
    for (i=minRange; i<=maxRange;i++) {
        sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
