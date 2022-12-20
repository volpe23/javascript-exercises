const fibonacci = function(ind) {
    if (ind < 0) return 'OOPS'
    let fibs = [1, 1];
    let len = fibs.length;
    while (len <= ind - 1) {
        newFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
        fibs.push(newFib)
        len++;
    }
    return fibs[ind - 1]
};
module.exports = fibonacci;
