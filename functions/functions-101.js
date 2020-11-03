// Function - input (arguments/parameters), code, output (return value)

let greetUser = function () {
  console.log("Welcome User!");
};

greetUser();

let square = function (num) {
  let result = num * num;
  return result; // self explanatory. it returns a value, but not to the screen
};

let value = square(3);
let otherValue = square(10);
console.log(value);
console.log(otherValue);

// Challenge Area

let converFahrenheitToCelcuis = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

let tempOne = converFahrenheitToCelcuis(32);
let tempTwo = converFahrenheitToCelcuis(68);

console.log(tempOne);
console.log(tempTwo);

// Call a couple of time (32 -> 0) (68 -> 20)

// Print the converted values
