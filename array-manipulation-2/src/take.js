/* exported take */
// Pseudocode
// Define a new function named take with 2 parameters (array, count)
// Use the slice() method of the array object to start the slice from 0 index to
//    the parameter count and assign this expression to a new variable
// Return the new variable

function take(array, count) {
  var newArray = array.slice(0, count);
  return newArray;
}
