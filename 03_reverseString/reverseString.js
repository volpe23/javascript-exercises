const reverseString = function(string) {
    let res = '';
    for (let i = string.length - 1; i >= 0; i--) {
        res = res + string[i]
    }
    return res
};
// let inp = require('prompt-sync') ();
// const string = inp("Input here ")
// console.log(reverseString(string))
// Do not edit below this line
module.exports = reverseString;
