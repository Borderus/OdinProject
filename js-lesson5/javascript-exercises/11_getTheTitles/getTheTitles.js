const getTheTitles = function(inLib) {
  outArray = [];
  for (i=0; i<inLib.length; i++) {
    outArray.push(inLib[i]["title"]);
  }
  return outArray;
};

// Do not edit below this line
module.exports = getTheTitles;
