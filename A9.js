// Write a function argumentsLength that returns the count of arguments passed to it.
 
function argumentsLength() {
    return arguments.length;
  }
  // ? Should return 0
  console.log(argumentsLength());
  // ? Should return 1
  console.log(argumentsLength(1));
  // ? Should return 2
  console.log(argumentsLength(1, 2));
  // ? Should return 3
  console.log(argumentsLength(1, 2, 3));
  