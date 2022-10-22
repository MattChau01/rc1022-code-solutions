/* exported getLastChar */
// Pseudocode:
// Define a new function getLastChar with one parameter (string)
// Use .length of the string and subtract 1 to find the last number of the array
// Assign the expression of the last number to a new variable lastChar
// Assign the expression of array at the index of lastChar to a new variable letter
// Return the value of the variable letter

function getLastChar(string) {
  var lastChar = string.length - 1;
  var letter = string[lastChar];
  return letter;
}
