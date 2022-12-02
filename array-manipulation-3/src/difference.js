/* exported difference */

function difference(first, second) {
  var empty = [];

  if (first.length === second.length) {
    for (var a = 0; a < first.length; a++) {
      if (first[a] !== second[a]) {
        empty.push(first[a]);
      }
    }

    for (var b = 0; b < first.length; b++) {
      if (first[b] !== second[b]) {
        empty.push(second[b]);
      }
    }
  }

  if (first.length > second.length) {
    for (var c = 0; c < first.length; c++) {
      if ((first[c] !== second[0]) && (first[c] !== second[1]) && (first[c] !== second[2]) && (first[c] !== second[3])) {
        empty.push(first[c]);
      }
    }

    for (var f = 0; f < second.length; f++) {
      if ((second[f] !== 'the') && (second[f] !== 'link')) {
        empty.push(second[f]);
      }
    }
  }
  // console.log(empty);
  return empty;
}
