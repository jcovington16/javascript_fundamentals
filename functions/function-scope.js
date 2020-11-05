// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
//// Local scope (fahrenheit, clesius)
////// Local scope (isFreezing)

let convertFahrenheitToCelcuis = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;

  if (celsius <= 0) {
    let isFreezing = true;
  }

  return celsius;
};

let tempOne = convertFahrenheitToCelcuis(32);
let tempTwo = convertFahrenheitToCelcuis(68);

console.log(tempOne);
console.log(tempTwo);
