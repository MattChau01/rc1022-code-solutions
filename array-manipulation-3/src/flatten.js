/* exported flatten */

// Pseudocode
// Define a new function named flatten with one parameter array
// Use the reduce method of an array with two parameters one and two, then use the concat method of one with an argument of two
// Assign this value into a new variable
// Return the value of the variable

function flatten(array) {
  var flatten = array.reduce((one, two) => one.concat(two), []);

  // console.log(flatten);
  return flatten;
}
