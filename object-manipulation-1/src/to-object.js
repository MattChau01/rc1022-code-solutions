/* exported toObject */

function toObject(keyValuePair) {
  var object = {};
  for (var key in keyValuePair) {
    object[keyValuePair[0]] = keyValuePair[key];
  }
  return object;
}
