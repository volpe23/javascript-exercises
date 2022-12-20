const repeatString = function(string, nums) {
    if (nums < 0) return "ERROR"
    let res = '';
    for (let i = 0; i < nums; i++) {
        res = res + string
        // console.log(string)
    }
    return res
};

// Do not edit below this line
module.exports = repeatString;
