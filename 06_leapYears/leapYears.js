const leapYears = function(year) {
    const date = new Date(year, 2, 0)
    const days = date.getDate()
    if (days === 28) return false
    else if (days === 29) return true
    
};

// Do not edit below this line
module.exports = leapYears;
