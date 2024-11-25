const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(inArray) {
	outNum=0
  for (i=0; i<inArray.length; i++) {
    outNum += inArray[i];
  }
  return outNum;
};

const multiply = function(inArray) {
	outNum=1
  for (i=0; i<inArray.length; i++) {
    outNum *= inArray[i];
  }
  return outNum;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num1) {
	outNum=1
  for (i=1; i<=num1; i++) {
    outNum *= i;
  }
  return outNum;	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
