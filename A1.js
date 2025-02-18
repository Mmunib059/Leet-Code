// Create Hello World Function
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}

// Example usage:
const hello = createHelloWorld();
console.log(hello()); // Output: "Hello World"

// Path: Leet-Code/A5.js
// Create Counter Function
// Write a function createCounter. It should return a new function that returns a unique number every time it is called.

function createCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

