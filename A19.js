// JavaScript Program to Format the Date With Expected Output 

function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

const date = new Date();
console.log(formatDate(date)); // Expected output: MM/DD/YYYY

// In the example above, the formatDate() function formats the current date in the MM/DD/YYYY format. The toLocaleDateString() method is used to format the date according to the specified options. The options object specifies the year, month, and day format. The date is then formatted using the toLocaleDateString() method with the 'en-US' locale and the specified options. Finally, the formatted date is returned by the formatDate() function.

// Time Complexity: O(1)
// Space Complexity: O(1)

// JavaScript Program to Check if a Number is a Palindrome With Expected Output
