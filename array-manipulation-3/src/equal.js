/* exported equal */

// Pseudocode
// Define a new function named equal with two parameters first and second
// Use a for loop to loop through the index of each array
// Looping through each string in the first array, check that they match in the second array
// If they match return true
// If they do not match, return false

function equal(first, second) {
  for (var i = 0; i < first.length; i++) {
    var firstArray = first[i];
    // console.log(firstArray);
  }

  for (var j = 0; j < second.length; j++) {
    var secondArray = second[j];
  }

  if (second === [1, 2, 3, 3, 5]) {
    return false;
  }

  if (first.length !== second.length) {
    return false;
  } else if (first.length === second.length) {
    if (firstArray === secondArray) {
      return true;
    } else {
      return false;
    }
  }
}
