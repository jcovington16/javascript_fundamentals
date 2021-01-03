// we can change our variables using let
let isRaining = true

isRaining = false

console.log(isRaining)

// Can't assign something different when using const
// Use a const if we know we are not going to re-assign something

const isRaining1 = true

// This will cause an error
//  isRaining1 = false

const person = {
  age: 27,
}

// we can assign a new number to our object
person.age = 28
console.log(person)
