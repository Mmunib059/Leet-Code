// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.


function reduceArray(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
}

// Example usage:
const nums = [1, 2, 3, 4];
const fn = (acc, curr) => acc + curr;
const init = 0;

console.log(reduceArray(nums, fn, init)); // Output: 10

// In the example above, the reducer function fn calculates the sum of the elements in the array. The reduceArray function processes each element in the array sequentially, passing the return value from the calculation on the preceding element to the next calculation. The final result is the sum of all elements in the array, which is 10.

// Time Complexity: O(n)
// Space Complexity: O(1)
// JavaScript Program to Check if a Number is a Palindrome With Expected Output
// Compare this snippet from Leet-Code/A17.js:
// // You are given an integer array nums. The absolute sum of a subarray [numsl, numsl+1, ..., numsr-1, numsr] is abs(numsl + numsl+1 + ... + numsr-1 + numsr).
//
// // Return the maximum absolute sum of any (possibly empty) subarray of nums.
//
// // Note that abs(x) is defined as follows:
//
// // If x is a negative integer, then abs(x) = -x.
// // If x is a non-negative integer, then abs(x) = x.
//
// function maxAbsoluteSum(nums) {
//     let maxSum = 0;
//     let minSum = 0;
//     let currentMax = 0;

//     let currentMin = 0;
//
//     for (let num of nums) {
//         currentMax = Math.max(currentMax + num, num);
//         maxSum = Math.max(maxSum, currentMax);
//
//         currentMin = Math.min(currentMin + num, num);
//         minSum = Math.min(minSum, currentMin);
//     }
//
//     return Math.max(Math.abs(maxSum), Math.abs(minSum));
// }
//
// // Example usage:
// const nums = [1, -3, 2, 3, -4];