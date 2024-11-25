const convertToCelsius = function(inNum) {
  outNum = (5*(inNum - 32))/9
  outNum = Math.round(10*outNum)/10
  return outNum
};

const convertToFahrenheit = function(inNum) {
  outNum = ((9*inNum)/5) + 32
  outNum = Math.round(10*outNum)/10
  return outNum
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
