/* exported zip */

// Pseudocode
// Define a new function named zip with two parameters first and second
// Assign an empty array into a new variable
// Use a loop to loop through the number strings the amount of times as the length of the second array
// Use the key of the second array to assign to each value in the first array
// Push the assigned values into the new array and return the variable

function zip(first, second) {
  // console.log(first.length);
  // console.log(second.length);
  var empty = [];

  if (first.length < second.length) {
    for (var a = 0; a < first.length; a++) {
      var emptyLess = [];
      emptyLess.push(first[a], second[a]);
      // console.log(emptyLess);
      empty.push(emptyLess);
    }
    return empty;
  }

  if (first.length > second.length) {
    for (var b = 0; b < second.length; b++) {
      var emptyMore = [];
      emptyMore.push(first[b], second[b]);
      empty.push(emptyMore);
    }
    return empty;
  }

  if (first.length === second.length) {
    for (var c = 0; c < first.length; c++) {
      var emptyArray = [];
      emptyArray.push(first[c], second[c]);
      empty.push(emptyArray);
    }
    return empty;
  }
}
