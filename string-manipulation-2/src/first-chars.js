/* exported firstChars */
// Pseudocode
// Define a new function named FirstChars with 2 parameters (length, string)
// Use the slice method of the string object to reduce the string with 2 arguments, 0 and length.
//    Assign this expression to a new declared variable cut
// Return the variable cut

function firstChars(length, string) {
  var cut = string.slice(0, length);
  return cut;
}
