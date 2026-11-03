// Expressions
let a = 5;
console.log("This is the value of A", a);
// backtricks - ``
console.log(`This is the value of A ${a}`);

// Operators
// Arithmetic Operator
let num1 = 10;
let num2 = 45;
console.log(num1 + num2);
// console.log(15 + 15);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// Assignment Operator
let balance = 100;

// pre assignment type
// balance = balance + 500;
balance += 500;
console.log(`Current balance ${balance}`);

// Relational (comparison) Operator
let age = 18;
console.log(age > 18);
console.log(age < 18);
console.log(age >= 18);
console.log(age <= 18);

// * Important Operator
//  == | === - equal to
// == | it checks the both values are equal
// === | it checks the values and the data types
console.log(age == 18); // true
console.log(age === 18); // false
// !== | not equal to
console.log(age !== 20);

// Logical Operator
// AND , OR , NOT
// &&
let eligible = true;
console.log(age >= 18 && eligible);

// OR - ||
console.log(age >= 18 || eligible);

// NOT - Opposite
console.log(!eligible);

// Increment & Decrement Operator
let likes = 500;
likes++;
console.log(likes);
likes--;
console.log(likes);

// Ternary operator
// ? : | ? - it refelcts the true & : - it reflects the false
// let age = 18;
age >= 19
  ? console.log("You're eligible for vote")
  : console.log("You're not eligible");

// Conditionals
// if-true else-false
let userAge = 20;

if (userAge >= 21) {
  console.log("You're eligible");
} else {
  console.log("You're not eligible");
}

// real-time approach
let isLoggedin = false;

if (!isLoggedin) {
  console.log("Welcome back");
} else {
  console.log("Please login first");
}

// level 3 approach
let total = 290;

if (total >= 450) {
  console.log("Grade A");
} else if (total >= 350) {
  console.log("Grade B");
} else if (total >= 300) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// nested condition

// Practice for interviews

if (total >= 300) {
  if (total >= 450) {
    console.log("Grade A");
  } else if (total >= 350) {
    console.log("Grade B");
  } else if (total >= 300) {
    console.log("Grade C");
  } else {
    console.log("Fail");
  }
} else {
  console.log("Fail");
}