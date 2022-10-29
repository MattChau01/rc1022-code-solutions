/* exported capitalizeWords */
// Pseudocode
// Define a new function named capitalizeWords with one parameter (string)
// Declare a variable to lower case the entire string
// Declare a variable to split the string up into an array
// Use a for loop to count the number of times less than the array length
// Use charAt() to select the first letter of the the array at i index
//    and concatenate the rest of the array to that letter
// Use the join method of the array to combine the words

function capitalizeWords(string) {
  var one = string.toLowerCase();
  var two = one.split(' ');
  for (var i = 0; i < two.length; i++) {
    two[i] = two[i].charAt(0).toUpperCase() + two[i].substr(1);
  }
  return two.join(' ');
}
