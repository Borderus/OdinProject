const reverseString = function(instring) {
  inArray = instring.split("")
  let outArray = []
  for (i=0; i<inArray.length; i++) {
    outArray[i] = inArray[inArray.length -1 - i]
  }
  return outArray.join("")
};

// Do not edit below this line
module.exports = reverseString;
