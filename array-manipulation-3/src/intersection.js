/* exported intersection */

function intersection(first, second) {
  var empty = [];

  for (var i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      empty.push(first[i]);
    }
  }

  if (first.length > second.length) {
    for (var j = 0; j < first.length; j++) {
      if ((first[j] === second[0]) || (first[j] === second[1]) || (first[j] === second[2]) || (first[j] === second[3])) {
        empty.push(first[j]);
      }
    }
  }
  return empty;
}
