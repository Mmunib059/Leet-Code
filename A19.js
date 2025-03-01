// JavaScript Program to Format the Date With Expected Output 

function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

const date = new Date();
console.log(formatDate(date)); // Expected output: MM/DD/YYYY