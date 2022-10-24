/* exported getKeys */
// Pseudocode
// Define a new function named getKeys with one parameter (object)
// Create an empty assigned to a new declared variable called array
// Using a for.. in loop, find the key property in object
// Push these values into the empty array
// return the array at the end of the loop

function getKeys(object) {
  var array = [];
  for (var key in object) {
    array.push(key);
  }
  return array;
}
