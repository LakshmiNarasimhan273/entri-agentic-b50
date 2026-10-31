// Our first line code
console.log("Hello world");
// console - browser page 
// log - prints the output

// Variables

// Syntax: keyword variableName = variableValue;
// keyword - var | let | const
var username = "narasimhan";
console.log(username);

let myage = 29;
console.log(myage);

const role = "mentor";
console.log(role);

// Nature of keywords | * FAQ in product interviews

// Global scope accept the second variable creation
var a = 5;
var a = 10;
var a = 15;
console.log(a);

// Block scope never accept the second variable creation
let b = 20;
b = 30;
console.log(b);

// const - constant(fixed)
// const can't allow to change the value
const age = 29;
// age = 28;
console.log(age);

// Scenario example for keywords
var currentStatus = 54;
// after 1hr
var currentStatus = 30;
console.log(currentStatus);

let travelDate = "30th Oct";
travelDate = "1st nov";
console.log(travelDate);

const trainName = "TN Express";
console.log(trainName);

// Most Asked JS Interview question
// Hoisting - var is the only keyword supports hoisting | let & const not supported
console.log(language);
// let language = "JS";
// const language = "JS";
var language = "JS"; // global
