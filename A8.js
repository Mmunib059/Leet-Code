// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

 
function compose(functions) {
    if (functions.length === 0) {
      return (x) => x; // Identity function
    }
  
    const lastFn = functions[functions.length - 1];
    const otherFns = functions.slice(0, -1);
  
    return (x) => {
      let result = lastFn(x);
      for (let i = otherFns.length - 1; i >= 0; i--) {
        result = otherFns[i](result);
      }
      return result;
    };
  }

// Test cases
const f1 = (x) => x + 1;
const f2 = (x) => x * 2;
const f3 = (x) => x - 3;
const f4 = (x) => x / 4;



