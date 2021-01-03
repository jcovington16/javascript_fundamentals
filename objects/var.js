// This is something we should try to avoid

// var is similar to "let" because we can re-assign values
var firstName = 'Joshua'
firstName = 'James'

var firstName = 'John'

console.log(firstName)

/* This is problematic because if we are working on
a large project that has a magnitude of variables
we can end up creating a variable that is already 
present which we would not know about because no errors
will present itself */
