// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.


async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));

}

// Example 1
// Input: 1000
// Output: (After 1 second)
// Explanation: The function sleeps for 1 second.
// sleep(1000).then(() => console.log('Done'));
// Output: Done
// Example 2
// Input: 2000
// Output: (After 2 seconds)
// Explanation: The function sleeps for 2 seconds.
// sleep(2000).then(() => console.log('Done'));
// Output: Done