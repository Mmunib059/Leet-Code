// You are given an integer array nums. The absolute sum of a subarray [numsl, numsl+1, ..., numsr-1, numsr] is abs(numsl + numsl+1 + ... + numsr-1 + numsr).

// Return the maximum absolute sum of any (possibly empty) subarray of nums.

// Note that abs(x) is defined as follows:

// If x is a negative integer, then abs(x) = -x.
// If x is a non-negative integer, then abs(x) = x.

function maxAbsoluteSum(nums) {
    let maxSum = 0;
    let minSum = 0;
    let currentMax = 0;
    let currentMin = 0;

    for (let num of nums) {
        currentMax = Math.max(currentMax + num, num);
        maxSum = Math.max(maxSum, currentMax);

        currentMin = Math.min(currentMin + num, num);
        minSum = Math.min(minSum, currentMin);
    }

    return Math.max(Math.abs(maxSum), Math.abs(minSum));
}