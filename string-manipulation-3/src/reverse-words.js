/* exported reverseWords */

// Pseudocode
// Define a new function named reverseWords with one parameter named string
// Use the split method to divde the string up into an array
// Use a for loop to loop through each word in the array
// At each index of the array, reverse the letter order and store these into a variable
// Join the reversed words together back into one string

function reverseWords(string) {
  var split = string.split(' ');
  var array = [];

  for (var i = 0; i < split.length; i++) {
    var eachWord = split[i];
    var empty = '';
    for (var j = eachWord.length - 1; j >= 0; j--) {
      empty += eachWord[j];
    }
    array += (empty + ' ');
    var final = array.trimEnd();
  }
  return final;
}
