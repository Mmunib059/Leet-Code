const array = [1, 2, 3, 4, 5];

const mappedArray = array.map(num => num * 2);

console.log(mappedArray); // Output: [2, 4, 6, 8, 10]

// test case
const callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
