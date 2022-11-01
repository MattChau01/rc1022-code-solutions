/* exported truncate */
// Pseudocode
// Define a new function named truncate with 2 parameters (length, string)
// using a conditional if else statement, write the following conditions:
// 1. If statement: the string.length is greater than or equal to the length,
//    then return the substring method of the string object with the arguments 0 and length concatenated with ellipsis
// 2. If statement and else statement: Whether the string.length is less than or equal to length
//    then return the substring method of the string object with the arguments 0 and length concatenated with ellipsis
// 3. Else statement: return an ellipsis

function truncate(length, string) {
  var cut = string.slice(0, length) + '...';
  return cut;
}
