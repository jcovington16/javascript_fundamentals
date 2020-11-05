// Multiple Arguments
let add = function (a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// Default arguments
// By default if we dont assign anything it will be undefined
let getScoreText = function (name = "Anonymous", score = 0) {
  return `Name: ${name} - Score ${score}`;

  //return "Name: " + name + " Score: " + score;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// We can over write the default value for both arguments/parameters
getScoreText();

// Challenge Area

// tip calculator
// two args: total, tipPercent .2%

// Next challenge Create a template string using getTip
// A 25% tip on $40 would be $10
let getTip = function (total, tipPercent = 0.2) {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  return `A ${percent}% tip on $${total} would be $${tip}`;
};

let tip = getTip(200);
console.log(tip);

// For string either use single or double and not both
console.log("Josh" + "Covington");

// Creating template string
let name = "Jon";
console.log(`Hey, my name is ${name}!`);
