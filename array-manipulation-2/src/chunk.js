/* exported chunk */

function chunk(array, size) {
  var newArray = [];
  if (array.length < size) {
    return array;
  }
  for (var i = 0; i < array.length; i += size) {
    var arrayTwo = [];
    for (var j = 0; j < size; j++) {
      if ((j + i) < array.length) {
        arrayTwo.push(array[i + j]);
      }
    }
    newArray.push(arrayTwo);
  }
  return newArray;
}
