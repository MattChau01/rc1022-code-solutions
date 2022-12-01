/* exported union */

function union(first, second) {

  var empty = [];

  for (var i = 0; i < first.length; i++) {
    if (!empty.includes(first[i])) {
      empty.push(first[i]);
    }
  }

  for (var a = 0; a < second.length; a++) {
    if (!empty.includes(second[a])) {
      empty.push(second[a]);
    }
  }

  // console.log(empty);
  return empty;
}
