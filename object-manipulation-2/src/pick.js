/* exported pick */
// Pseudocode//
// Define a new function named pick with 2 parameters (source, key)
// Declare a new variable with an empty object
// Using a for.. in loop through the variable source in the keys array
// if the key is not listed in the keys array, it is not added into the object

function pick(source, keys) {
  var object = {};
  for (var key in keys) {
    if (source[keys[key]] !== undefined) {
      object[keys[key]] = source[keys[key]];
    }
  }
  return object;
}
