/* exported getWords */

function getWords(string) {
  if (string === '') {
    return [];
  }
  var split = string.split(' ');
  return split;
}
