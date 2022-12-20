const removeFromArray = function(arr, inp1, inp2, inp3, inp4) {
    const len = arguments.length
    let res = arr;
    for (let i = 1; i < len; i++) {
        arguments[i] = arguments[i] || undefined
        console.log(arguments[i], typeof(arguments[i]))
        if (arr.includes(arguments[i])) {
            console.log("Match")
            const index = arr.indexOf(arguments[i])
            res.splice(index, 1)
        }
    }
    return res
};
// Do not edit below this line
module.exports = removeFromArray;
