/* exported numVowels */

function numVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (const letter of string.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}
