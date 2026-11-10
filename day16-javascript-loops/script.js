// Loops
// for loop syntax
// for( initial_variable, condition, iteration ){
    // output
// }

// basic example
for(let i = 1; i < 5; i++){
    // 1
    // 2
    // 3
    // 4
    // 5
    console.log(i);
}

// Arrays
let users = ["narasimhan", "abishek", "someone", "zia"];
console.log(users);

// counting types - length(count), index(position)

console.log(users[0]);
console.log(users[1]); // index value
console.log(users[2]);
console.log("-----------")

// for loop + Array
for(let i = 0; i < users.length; i++){
    console.log(users[i]);
}

// Object
let products = {
    // key: value
    title: "Watch",
    price: 500,
    description: "sports watch for men",
    isStock: true,
};
console.log(products.title)
console.log(products.price)

// Array of objects 
let products_online = [
    {title: "Watch", price: 500, variant: ["leather", "strips", "steel"]},
    {title: "Laptop", price: 25000, variant: ["8gb", "16gb"]},
    {title: "Mobile", price: 1000, variant: ["8gb", "16gb"]},
];

console.log(products_online);
console.log(products_online[0].title);
console.log(products_online[1].title);
console.log(products_online[2].price);

for(let i = 0; i < products_online.length; i++){
    console.log(products_online[i].title);

    // loop - nested loop
    for(let j = 0; j < products_online[i].variant.length; j++){
        console.log(products_online[i].variant[j]);
    }
};

// Real-time Example - 1
// object contains - name, course, score
// req: we need to display the students who all are got above 90;
let students = [
    {
        name: "Arun",
        course: "MERN",
        score: 95
    },
    {
        name: "Priya",
        course: "DA",
        score: 89
    },
    {
        name: "Karthik",
        course: "DA",
        score: 75
    },
    {
        name: "Arjun",
        course: "DS",
        score: 94
    }
];

for(let i = 0; i < students.length; i++){
    if(students[i].score >= 90){
        console.log(students[i].name);
    }
};

// Classical Interview Problem
// Pattern Problem

// Left Angle Star Pattern
// *
// **
// ***
// ****
// *****

// high level handling for nested loops
// in-depth understanding about the data connectivity
// coding flow
for(let i = 1; i <= 5; i++){
    // i loop responsiblities: it only calculates the line count
    let star = "";

    for(let j = 1; j <= i; j++){
        star += "*";
    }
    console.log(star);
}

// Numerical pattern
for(let i = 1; i <= 5; i++){
    // i loop responsiblities: it only calculates the line count
    let pattern = "";

    for(let j = 1; j <= i; j++){
        pattern += j;
    }
    console.log(pattern);
}