const repeatString = function(instring, count) {
  if (count < 0) {
    return 'ERROR'
  } else{
    outstring = '';
    for (loop = 0; loop < count; loop++) {
      outstring += instring;
    }
    return outstring;
  }
};

// Do not edit below this line
module.exports = repeatString;
