// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.


/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map(); // Use Map for efficient key-value storage

    return function (...args) {
        const key = fn.name === "sum" ? JSON.stringify(args) : args.join(","); // Handle sum's case uniquely

        if (cache.has(key)) {
            return cache.get(key); // Return cached result
        }

        const result = fn(...args); // Compute result
        cache.set(key, result); // Store result in cache
        return result;
    };
}

// Definitions of the functions
function sum(a, b) {
    return a + b;
}

function fib(n) {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Memoized versions
const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

// Test cases
console.log(memoizedSum(3, 2)); // 
console.log(memoizedSum(2, 3)); // 5, but computes separately
console.log(memoizedFib(10));   // 89
console.log(memoizedFib(10));   // Returns cached result: 89
console.log(memoizedFactorial(5)); // 120
console.log(memoizedFactorial(5)); // Returns cached result: 120

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */