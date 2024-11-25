const leapYears = function(year) {
    leapYear = false;
  if (year % 4 == 0) {
    leapYear = true;
    if (year % 100 == 0) {
        leapYear = false;
        if (year % 400 == 0) {
            leapYear = true;
        }
    }
  }
  return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
