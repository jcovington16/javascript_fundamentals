let temp = 65

if (temp >= 60) {
    if (temp<=90) {
        console.log('It is really nice out!')
    }
}

// Logical And Operator - True if both sides are true. False otherwise
if (temp >= 60 && temp <=90) {
    console.log('It is really nice outside!')
}

// Logical OR Operator - True if at least one side is true. Fals otherwise
let newTemp = 150
if (newTemp >= 120 || newTemp <= 0) {
    console.log('Man do not go outside! It is not safe!')
}


// Challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = false

// Are both vegan? Only offered up vegan dishes
// At least vegan? Make sure to offer up some vegan options
// Else, Offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes.')
}else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options')
}else {
    console.log('Offer up anything on the menu')
}