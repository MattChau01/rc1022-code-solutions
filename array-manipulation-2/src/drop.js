/* exported drop */
// Pseudocode
// Define a new function named drop with 2 parameters (array, count)
// Use the slice method of the array and start at the count parameter
//    assign this expression to a new variable
// Return the new variable

function drop(array, count) {
  var newArray = array.slice(count);
  return newArray;
}
