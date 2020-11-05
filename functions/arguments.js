// Multiple Arguments
let add = function (a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// Default arguments
// By default if we dont assign anything it will be undefined
let getScoreText = function (name = "Anonymous", score = 0) {
  return "Name: " + name + " Score: " + score;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// We can over write the default value for both arguments/parameters
getScoreText();

// Challenge Area

// tip calculator
// two args: total, tipPercent .2%

let getTip = function (total, tipPercent = 0.2) {
  return total * tipPercent;
};

let tip = getTip(100);
console.log(tip);
