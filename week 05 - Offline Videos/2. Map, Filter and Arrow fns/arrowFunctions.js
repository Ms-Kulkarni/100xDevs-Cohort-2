/*
// Normal function to print Hello World
function greet() {
    console.log('Hello World!');
}

greet(); // Hello World!
*/

/*
// Arrow function to print Hello World
const greeet = () => {
    console.log('Hello World!');
}

greet(); // Hello World!
*/

// Arrow function to print Hello World - Shorter version
// const greet = () => console.log('Hello World!');

greet(); // Hello World!


/*
// Normal function to greet a person
function greetPerson(name) {
    console.log(`Hello ${name}!`);
}

greetPerson('rahul'); // Hello rahul!
*/

/*
// Arrow functions to greet a person
const greetPerson = (name) => {
    console.log(`Hello ${name}!`);
};

greetPerson('Rahul'); // Hello Rahul!
*/

// Arrow functions to greet a person - Shorter version
const greetPerson = (name) => console.log(`Hello ${name}!`);

greetPerson('Rahul'); // Rahul!


/*
// Normal function to add two numbers
function sum(a, b) {
    // return sum of a and b
    return a + b;
}

const add = sum(5, 6);
console.log(add); // 11
*/

/*
// Arrow functions to add two numbers
const sum = (a, b) => {

    // return sum of a and b
    return a + b;
};

const add = sum(5, 6);
console.log(add); // 11
*/

// Arrow functions to add two numbers - Shorter version
const sum = (a, b) => a + b;

const add = sum(5, 6);
console.log(add); // 11

