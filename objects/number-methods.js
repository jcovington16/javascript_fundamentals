let num = 704.923

// number of decimal places you want to keep
console.log(num.toFixed(2))

// Math methods

// Rounding numbers
console.log(Math.round(num))

// Floor rounds down
console.log(Math.floor(num))

// Ceiling rounds up
console.log(Math.ceil(num))

// Random generates randomized numbers
let randomNum = Math.random()
console.log(randomNum)
// If we want to have some random numbers from 10 - 20
let min = 10
let max = 20
let randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum2)

// Challenge Area
// range between 1 - 5 / true if correct - false if incorrect

let makeGuess = function (guess) {
  let min1 = 1
  let max1 = 5
  let randomNum1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1

  return guess === randomNum1
}

console.log(makeGuess(1))
