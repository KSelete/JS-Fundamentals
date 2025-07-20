#!/usr/bin/node

// Define the add function
function add(a, b) {
  return a + b;
}

// Parse arguments and convert to integers
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

// Print the result of the addition
console.log(add(a, b));
