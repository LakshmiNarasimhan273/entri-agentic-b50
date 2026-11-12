const original = {
    name: "narasimhan",
    age: 29
};

const draft = original;
draft.name = "Someone";

console.log(draft);
console.log(original);

// DRAWBACK: There is no copying process here. if we update any records it will affect the original data.

// Shallow Copy
const user = {
    name: "Arun",
    email: "arun@yahoo.com"
};

const copiedData = {...user};
// {...} - rest operator
// A shallow copy creates a new outer object, but nested objects may still share the same reference.

copiedData.email = "arun@gmail.com";
console.log("Copied Data", copiedData);
console.log("Original Data", user);

// Shallow Copy - Drawback
const learners = {
    name: "Narasimhan",
    course: "FSD",
    details: {
        age: 29,
        city: "Chennai"
    }
};

const copiedLearner = {...learners};

copiedLearner.course = "Agentic FSD";
copiedLearner.details.age = 26;

console.log("Learner Copy", copiedLearner);
console.log("Learner Original", learners);

// Deep Copy
// strcutredClone() - inbuild function in javascript to make a completely independent object including the nested object.
const user1 = {
    name: "Narasimhan",
    course: "Agentic FSD",
    details: {
        age: 29,
        state: "TN"
    }
};

// deep copy
const deepCopieduser = structuredClone(user1);
deepCopieduser.details.age = 26;

console.log("Original Data", user1);
console.log("Deep Copy data", deepCopieduser);

// structuredClone() with Array of Objects
let cart = [
    {
        product: "Laptop",
        price: 50000,
        specs: {
            brand: "HP"
        }
    },
    {
        product: "Mobile",
        price: 25000,
        specs: {
            brand: "Samsung"
        }
    }
];

let copiedCart = structuredClone(cart);

copiedCart[0].price = 80000;
copiedCart[0].specs.brand = "Apple";

console.log(copiedCart);

console.log(cart);

// Interview Problem
// Scenario: Patient Records
// Interview task: Create a deep copy of the patient records using structuredClone() and modify the copied records without affecting the original data.

const patients = [
    {
        id: 101,
        name: "Someone",
        age: 45,
        medicalDetails: {
            disease: "Fever",
            doctor: {
                name: "Kumar"
            }
        }
    },
    {
        id: 102,
        name: "Alex",
        age: 56,
        medicalDetails: {
            disease: "Cold",
            doctor: {
                name: "Ravi"
            }
        }
    }
];

// Deep Copy
const copiedPatients = structuredClone(patients);

// modifications in nested objects
copiedPatients[1].medicalDetails.disease = "Headache";
copiedPatients[1].medicalDetails.doctor.name = "Raj";

console.log("Orginal Patient Records", patients);
console.log("Latest Patients Report", copiedPatients);