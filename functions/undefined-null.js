// Undefined for variable
let name;

name = "Jim";

if (name == undefined) {
  console.log("Please provide a name");
} else {
  console.log(name);
}

// Undefined for function arguments
// Underfined as function returns default value
let square = function (num) {
  console.log(num);
};

let results = square();
console.log(results);

// Null as assigned value
let age = 27;

age = null;

console.log(age);
