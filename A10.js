// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.


function once(fn) {
    let hasBeenCalled = false;
    let result;

    return function(...args) {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            result = fn(...args);
            return result;
        }
        return undefined;
    };
}

// Example usage:
const multiply = (a, b) => a * b;
const multiplyOnce = once(multiply);

console.log(multiplyOnce(2, 3)); // Outputs: 6
console.log(multiplyOnce(2, 3)); // Outputs: undefined
console.log(multiplyOnce(4, 5)); // Outputs: undefined
