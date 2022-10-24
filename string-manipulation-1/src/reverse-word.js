/* exported reverseWord */

function reverseWord(word) {
  var array = [];

  for (var i = word.length - 1; i >= 0; i--) {
    array += word[i];
  }
  return array;
}
