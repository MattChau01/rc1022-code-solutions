/* exported addSuffixToAll */
function addSuffixToAll(word, suffix) {
  var array = [];
  for (var i = 0; i < word.length; i++) {
    array.push(word[i] += suffix);
  }
  return array;
}
