const sumAll = function(first, last) {
    let res = 0;
    if (first > last) {
        const placeholder = first
        first = last
        last = placeholder
    }
    else if (typeof(first) !== 'number' || typeof(last) !== 'number' || first < 0 || last < 0) return "ERROR"
    for (let i = first; i <= last; i++) {
        res += i
    }
    return res
};

// Do not edit below this line
module.exports = sumAll;
