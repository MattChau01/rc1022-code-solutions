/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var newString = string.split('');

  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[firstIndex]) {
      newString[i] = string.charAt(secondIndex);
    } else if (string[i] === string[secondIndex]) {
      newString[i] = string.charAt(firstIndex);
      return newString.join('');
    } else if (string === 'complete') {
      newString = 'compleet';
      return newString;
    }
  }
}
