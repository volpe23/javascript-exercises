const palindromes = function (word) {
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
    let rawString = word.replace(regex, '')
    const len = rawString.length
    let isPalindrome = true;
    for (let i = 0; i < len / 2; i++) {
        if (rawString[i].toLowerCase() === rawString[len - 1 - i].toLowerCase()) {
            
            continue;
        }
        else {
            isPalindrome = false;
            break;
        }
        
    }
    return isPalindrome
};
// Do not edit below this line
module.exports = palindromes;
