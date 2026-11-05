// Without Function - DRAWBACK
let n1 = 10;
let n2 = 20;
console.log(n1 + n2); // logic

let n3 = 20;
let n4 = 35;
console.log(n3 + n4); // logic
// --------------

// FUNCTION - SYNTAX
// function - keyword like (var, let & const)
// functionName - user defined name
// () - parameters
// {} - function body (all the logics)

// Normal function
function welcome(){
    console.log("Welcome Learners");
}

// callback
welcome();

// reusuable function
let a = 10;
let b = 5;

let c = 9;
let d = 9;

function addNumbers(num1, num2){ // () - parameters
    // console.log(num1 + num2);
    return num1 + num2;
}

console.log(addNumbers(a, b)) // () - arguments
console.log(addNumbers(c, d));

// practical part - real time scenario

let stu1 = 367; // C
let stu2 = 456; // A
let stu3 = 478; // A

function grade(total){
    if(total > 300){
        if(total > 450){
            console.log("Grade A");
        } else if (total > 400){
            console.log("Grade B");
        } else if (total > 350){
            console.log("Grade C");
        } else {
            console.log("Grade D");
        }
    }else{
        console.log("Fail");
    }
}

grade(stu1);
grade(stu2);
grade(stu3);

// Arrow Function
function greet(name){
    return `Welcome ${name}`;
}

console.log(greet("Narasimhan"));

// Simpler Arrow Function
const message = () => "Welcome Back";
console.log(message());

// Arrow Function - Syntax
// const
// functionName
// => - Arrow Function Symbol
const newFunction = () => {
    console.log("Function running");
}

newFunction();

function add(num1, num2){
    console.log(num1 + num2);
}

add(500, 500);

const studentGrade = (total) => {
    if(total > 300){
        if(total > 450){
            console.log("Grade A");
        } else if (total > 400){
            console.log("Grade B");
        } else if (total > 350){
            console.log("Grade C");
        } else {
            console.log("Grade D");
        }
    }else{
        console.log("Fail");
    }
}

studentGrade(stu1);
studentGrade(stu2);