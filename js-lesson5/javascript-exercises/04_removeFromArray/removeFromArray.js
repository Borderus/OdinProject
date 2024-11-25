const removeFromArray = function() {
    inArray = arguments[0]
    for (i=1; i<arguments.length; i++) {
        inArray = inArray.filter((item) => item !== arguments[i])
    }
    return inArray
};

// Do not edit below this line
module.exports = removeFromArray;
