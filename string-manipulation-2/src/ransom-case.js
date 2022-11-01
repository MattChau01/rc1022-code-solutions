/* exported ransomCase */
// Pseudocode
// Define a new function named ransomCase with one parameter (string)
// Create an empty string assigned to variable string
// Use a for loop to select every other word that should be capitalized
// Return the result of variable string

function ransomCase(string) {
  var one = string.toLowerCase();
  var two = one.split('');
  for (var i = 1; i < two.length; i += 2) {
    two[i] = two[i].toUpperCase();
  }
  return two.join('');
}
