// storages

// localStorage
// localStorage.setItem("username", "narasimhan");
// localStorage.setItem("age", 29);
// localStorage.setItem("role", "mentor");

// const username = localStorage.getItem("username");
// console.log(username);

// localStorage.removeItem("username");
// localStorage.clear();

// sessionStorage
// sessionStorage.setItem("username", "Narasimhan");
// sessionStorage.clear();

// logged user data
const loggeduser = {
    name: "Narasimhan",
    email: "narasimhan@mail.com"
};
localStorage.setItem("loggedUser", JSON.stringify(loggeduser));

const loggedUser = localStorage.getItem("loggedUser");
const convertedData = JSON.parse(loggedUser)
// console.log(convertedData);

// Bindings
// subtopics - (4) - this | call() | apply() | bind()
let username = "John";

const user = {
    username: "Someone",

    greet: function(){
        console.log(this.username);
    }
};

user.greet();

// call()
const user1 = {
    name: "John"
}

const user2 = {
    name: "Alex"
}

function welcome(location){
    console.log(this.name, location);
}

welcome.call(user1, "Chennai");
welcome.call(user2);

// apply()
welcome.apply(user2, ["Banglore"]);

// bind()
function sayHello(message){
    console.log(message, this.name);
}
const result = sayHello.bind(user1, "Welcome");
result();

// Easy way to remember
// call() - Execute immediately
// apply() - Execute immediately with array argument
// bind() - Execute later

// Prototype
// OOPS - Inheritance(shareable properties)
function User(name){
    this.name = name; // constructor
}

User.prototype.greetings = function(){
    console.log("Hello", this.name);
}

// new - Instance - it creates a object indirectly to the function
const person1 = new User("Narasimhan");
const person2 = new User("Someone");
console.log(person1)

person1.greetings();
person2.greetings();

// create() method pending - carry forward to next session