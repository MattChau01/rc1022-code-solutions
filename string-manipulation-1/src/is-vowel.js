/* exported isVowel */

function isVowel(character) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (var i = 0; i < vowels.length; i++) {
    if (character === vowels[i]) {
      return true;
    }
  }
  return false;
}
