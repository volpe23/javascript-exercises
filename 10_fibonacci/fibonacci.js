const fibonacci = function(ind) {
    if (ind <= 0) return 'OOPS';
    let a = 0;
    let b = 1;
    for (let i = 1; i < ind; i++) {
        let temp = b;
        b = b + a;
        a = temp;
    }
    return b;
};
module.exports = fibonacci;
