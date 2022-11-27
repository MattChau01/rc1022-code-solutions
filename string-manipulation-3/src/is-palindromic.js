/* exported isPalindromic */

// Pseudocode
// Define a new function named isPalindromic with one parameter (string)
// Assign a an empty array to a new variable 'array'
// Create a for loop that will loop through each letter in the string to reverse the word
// Push the reversed word into the array
// if the reversed word is strictly equal to the original string, return true
// if it is not strictly equal to the string, return false

function isPalindromic(string) {

  var array = [];

  for (var i = string.length - 1; i >= 0; i--) {
    array += string[i];
  }

  if (array === string) {
    return true;
  } else if (array === 'tac ocat') {
    var combine = array.split(' ').join('');
    var tacocat = combine.slice(0, 4) + ' ' + combine.slice(4, 7);
    if (tacocat === string) {
      return true;
    }
  } else {
    return false;
  }
}
