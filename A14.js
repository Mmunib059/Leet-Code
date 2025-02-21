// JavaScript Program to Find the Factorial of a Number

function factorial(n) {
    if (n < 0) {
        return "Factorial not defined for negative numbers";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
const number = 5;
console.log(`The factorial of ${number} is ${factorial(number)}`);