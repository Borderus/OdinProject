const findTheOldest = function(inLib) {
  oldestAge = 0;
  oldestPerson = '';
  for (i=0; i<inLib.length; i++) {
    if (isNaN(inLib[i]["yearOfDeath"])) {
        endYear = 2024
    } else {
        endYear = inLib[i]["yearOfDeath"]
    }
    age = endYear - inLib[i]["yearOfBirth"] 
    if (age > oldestAge) {
        oldestAge = age;
        oldestPerson = inLib[i]
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
