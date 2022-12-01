/* exported equal */

// Pseudocode
// Define a new function named equal with two parameters first and second
// Use a for loop to loop through the index of each array
// Looping through each string in the first array, check that they match in the second array
// If they match return true
// If they do not match, return false

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
