const convertToCelsius = function(fahrenheit) {
  let celsuis = (fahrenheit - 32) * (5/9);
  celsuis = parseFloat(celsuis.toFixed(1));

  return celsuis;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  fahrenheit = parseFloat(fahrenheit.toFixed(1));

  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
