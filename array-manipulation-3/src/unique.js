/* exported unique */

function unique(array) {
  var newArray = array.filter((unique, index, array) => array.indexOf(unique) === index);

  return newArray;
}
