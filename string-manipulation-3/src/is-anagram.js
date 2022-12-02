/* exported isAnagram */

// Pseudocode
// Define a new function name isAnagram with two parameters firstString and secondString
// Create to new variables with values of both strings split into arrays
// Set conditionals so that if the string length is greatear than 1, then it will concatenate all strings into one string
// If the original string lengths are not equal to each other then return false
// Using the split, sort and join methods, combine the string letters letter and sort by alphabetical order
// If these combined strings are equal to each other, return true

function isAnagram(firstString, secondString) {

  var firstCombine = firstString.split(' ');
  if (firstCombine.length > 1) {
    firstString = firstCombine[0] + firstCombine[1];
  }

  var secondCombine = secondString.split(' ');
  if (secondCombine.length === 2) {
    secondString = secondCombine[0] + secondCombine[1];
  } else if (secondCombine.length === 3) {
    secondString = secondCombine[0] + secondCombine[1] + secondCombine[2];
  }

  if (firstString.length !== secondString.length) {
    return false;
  }

  var firstWord = firstString.split('').sort().join('');
  var secondWord = secondString.split('').sort().join('');

  var result = (firstWord === secondWord);
  return result;
}
