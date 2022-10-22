/* exported tail */
// Pseudocode /
// Define a new function named tail with one parameter (array)
// Declare a new variable with an empty array
// Using a For loop, initialize the loop to start at the index of 1
// Push the new values into the empty array
// Return the variable which was declared with an empty array

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
