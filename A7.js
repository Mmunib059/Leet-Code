// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

// Example 1:

function reduce(nums, fn, init) {
    if (nums.length === 0) {
      return init;
    }
  
    let val = init;
    for (let i = 0; i < nums.length; i++) {
      val = fn(val, nums[i]);
    }
    return val;
  }

// Test cases
console.log(reduce([1, 2, 3], (acc, curr) => acc + curr, 0)); // 6
console.log(reduce([1, 2, 3], (acc, curr) => acc * curr, 1)); // 6
console.log(reduce([1, 2, 3], (acc, curr) => acc - curr, 10)); // 4
console.log(reduce([], (acc, curr) => acc + curr, 0)); // 0
console.log(reduce([], (acc, curr) => acc + curr, 10)); // 10
console.log(reduce([], (acc, curr) => acc * curr, 1)); // 1


