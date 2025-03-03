// A sequence x1, x2, ..., xn is Fibonacci-like if:

// n >= 3
// xi + xi+1 == xi+2 for all i + 2 <= n
// Given a strictly increasing array arr of positive integers forming a sequence, return the length of the longest Fibonacci-like subsequence of arr. If one does not exist, return 0.

// A subsequence is derived from another sequence arr by deleting any number of elements (including none) from arr, without changing the order of the remaining elements. For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].


/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    const index = new Map();
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        index.set(arr[i], i);
    }

    const dp = new Map();
    let maxLen = 0;

    for (let k = 0; k < n; k++) {
        for (let j = 0; j < k; j++) {
            const i = index.get(arr[k] - arr[j]);
            if (i !== undefined && i < j) {
                const len = (dp.get(i * n + j) || 2) + 1;
                dp.set(j * n + k, len);
                maxLen = Math.max(maxLen, len);
            }
        }
    }

    return maxLen >= 3 ? maxLen : 0;
};

// Time complexity: O(n^2)
// Space complexity: O(n^2)

// Example 1:
const arr = [1,2,3,4,5,6,7,8];
console.log(lenLongestFibSubseq(arr)); // Output: 5
// Explanation: The longest subsequence that is Fibonacci-like: [1,2,3,5,8].
