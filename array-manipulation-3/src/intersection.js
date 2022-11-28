/* exported intersection */

function intersection(first, second) {
  var empty = [];
  // console.log(first.length);
  // console.log(second.length);

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      first.shift(first[i], 1);

    }
    // console.log(first);
  }
  return empty;
}
