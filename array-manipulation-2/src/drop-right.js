/* exported dropRight */

function dropRight(array, count) {
  if (count < array.length) {
    var number = (array.length - count);
    var newArray = array.slice(0, number);
  } else {
    return [];
  }
  return newArray;
}
