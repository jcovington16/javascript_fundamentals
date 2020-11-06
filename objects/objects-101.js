let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.author}`);

// dot.notation used with objects
console.log(myBook.title);

// Change title using dot.notation
myBook.title = "Animal Farm";

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge area

let me = {
  name: "Joshua",
  age: 27,
  location: "Charlotte",
};

console.log(`${me.name} is ${me.age} and lives in ${me.location}.`);
me.age = me.age + 1;
console.log(`${me.name} is ${me.age} and lives in ${me.location}`);

// name, age, location

// Andreww is 27 and lives in Philadelphia
// Increase age by 1 and print message again
