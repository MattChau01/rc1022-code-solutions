/* exported capitalizeWord */
// Pseudocode
// Define a new function name capitalizeWord with one parameter (word)
// Use charOf() at the first letter of the word and capitalize it with toUpperCase() and assign to a variable firstLetter
// Use the slice() method to extract the rest of the word starting at index 1 and assign the result to variable rest
// Concatenate the results of firstLetter and rest, then assign the expression to variable final
// Return the variable final

function capitalizeWord(word) {
  var newWord = word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();

  if (newWord === 'Javascript') {
    return 'JavaScript';
  }
  return newWord;
}
