/* exported capitalize */
// Pseudocode
// Define a new function named capitalize with one parameter (word)
// Use the toUpperCase method and charAt methods of the word object assigned to variable first
// Use the slice method of the word object at index 1 assigned to variable rest
// Use the toLowerCase method of the variable rest object assigned to restTwo
// Return the value of first concatenated with restTwo

function capitalize(word) {
  var first = word.charAt(0).toUpperCase();
  var rest = word.slice(1);
  var restTwo = rest.toLowerCase();
  return first + restTwo;
}
