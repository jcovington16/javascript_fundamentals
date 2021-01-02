let name = '  Joshua Covington' // adding extra space for trim method

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim - allows us to remove extra whitespace
console.log(name.trim())

// Challenge Area

// isValidPassword
// length is more than 8 - and it doesn't contain the word password
let isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc1234!@#$lols'))
console.log(isValidPassword('asdflhsgpassword'))
