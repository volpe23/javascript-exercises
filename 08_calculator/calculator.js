const add = function(first, second) {
	return first + second
};

const subtract = function(first, second) {
	return first - second
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0)
};

const multiply = function(arr) {
    return arr.reduce((acc, curr) => acc * curr, 1)
};

const power = function(first, second) {
    return first ** second
	
};

const factorial = function(num) {
    if (num <= 1) {
        return 1
    }
    return num * factorial(num - 1)
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
