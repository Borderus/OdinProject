const palindromes = function (instring) {
    inArray = instring.toLowerCase().split("")
    for (i=0; i<inArray.length; i++) {
        if (!inArray[i].match(/^[a-z0-9]$/)) {
            console.log("Non-alpha char found: "+inArray[i])
            inArray[i] = ""
        }
    }
    inArray = inArray.filter((item) => item !== '')
    console.log(inArray)
    let outArray = []
    for (i=0; i<inArray.length; i++) {
      outArray[i] = inArray[inArray.length -1 - i]
    }
    instring2 = inArray.join("")
    outstring = outArray.join("")
    return (instring2==outstring)
};

// Do not edit below this line
module.exports = palindromes;
