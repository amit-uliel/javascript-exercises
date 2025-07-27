const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  return nums.reduce((acc, num) => acc + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((acc, num) => acc * num, 1);
};

const power = function(num, exponent) {
	let result = 1;

  if (exponent < 0) {
    num = 1 / num;
    exponent *= -1;
  }

  for (let i = 0; i < exponent; i++) {
    result *= num;
  }

  return result;
};

const factorial = function(num) {
  let result = 1;
	for (let i = num; i > 0; i--) {
    result *= i;
  }

  return result;
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
