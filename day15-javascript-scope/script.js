// Basic Level Example

let message = "Welcome";

function greet(){
    let message = "Welcome Back, User";
    console.log(message);
}

greet();

console.log(message);

// Conditional Scope
var username = "Someone";

if(true){
    var username = "Narasimhan";
}

console.log(username);

// Scope Chain | * Important Interview Question
let company = "Entri"; // outer scope

function employeeDetails(){
    let team = "Mentor"; // inner scope - employeeDetials

    function showEmployees(){
        let employee = "Narasimhan"; // inner scope - showEmployees

        console.log(employee);
        console.log(team);
        console.log(company);
    }

    showEmployees();

}

employeeDetails();

// Scope Chain with Conditions
let minimumAge = 18;

function eligiblityCheck(){
    let age = 22;

    if(age >= minimumAge){
        let message = "Eligible to Work";

        console.log(message);
        console.log(age);
        console.log(minimumAge);
    }
}

eligiblityCheck();

// Scenario based problem
// Employee performance evalution system

// global scope
let companyName = "Zoho";

function evaluate(){
    // inner scopes
    let employeeName = "Narasimhan";
    let salary = 30000;
    let performanceRating = 4;

    function calculateBonus(){
        // inner scope
        let bonusPercentange = 0;

        if(performanceRating === 5){
            bonusPercentange = 20;
        } else if (performanceRating === 4){
            bonusPercentange = 15;
        } else if (performanceRating === 3){
            bonusPercentange = 10;
        }else {
            bonusPercentange = 0;
        }
        let bonusAmount = salary * bonusPercentange / 100;

        console.log(companyName);
        console.log(employeeName);
        console.log(salary);
        console.log(performanceRating);
        console.log(bonusPercentange);
        console.log(bonusAmount);
    }
    calculateBonus();
}

evaluate();

// Real time example
let activity = "Instagram";

function reality(){
    let activity = "Learn";
    console.log(activity);
}

reality();