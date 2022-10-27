/* exported takeRight */
// Pseudocode
// Define a new function takeRight with 2 parameters (array, count)
// Using a conditional statement, if the count is less than the array.length, then pass
//    the last 2 elements using the slice method of the array object at -2, assigned to a new variable
// Using an if statement and else statement, return an empty array if the count is
//    greater then the array.length
// Using an else statement, return the array
// Outside of the conditional, return the declared variable of the first if statment

function takeRight(array, count) {

  if (count < array.length) {
    var newArray = array.slice(-count);
  } else if (array.length === 0) {
    return [];
  } else {
    return array;
  }
  return newArray;
}
