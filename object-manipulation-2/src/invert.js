/* exported invert */
// Pseudocode
// Define a new function invert with one parameter (source)
// Declare a new variable with an empty object
// Using a for.. in loop, declare a variable key in the parameter source
// Assign the variable key to the key index of source, at the index of the empty object
// Return the object at the end of the function

function invert(source) {
  var object = {};
  for (var key in source) {
    object[source[key]] = key;
  }
  return object;
}
