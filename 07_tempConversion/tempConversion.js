const convertToCelsius = function(temperature) {
  let celsius = (temperature - 32) * (5/9)
  return Math.round(celsius * 10) / 10
};

const convertToFahrenheit = function(temperature) {
  let faren = (temperature * (9/5) + 32)
  return Math.round(faren * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
