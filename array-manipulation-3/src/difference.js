/* exported difference */

// const myArray = [1, 2, 3, 4, 5];
// console.log(myArray);
// const index = myArray.indexOf(2);
// const x = myArray.splice(index, 1);
// console.log('myArray values: ', myArray);
// console.log(`variable x value: ${x}`);

function difference(first, second) {
  // console.log(first.length);
  // console.log(second.length);

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
      // This condition does not work
      if (first[c] !== second[c]) {
        // var index = first.indexOf(first[c]);
        // console.log(index);
      }
      // console.log(empty);
    }

    // for (var d = 0; d < second.length; d++) {
    //   if (first[d] !== second[d]) {
    //     empty.push(second[d]);
    //   }
    // }
  }
  // console.log(empty);
  return empty;
}
