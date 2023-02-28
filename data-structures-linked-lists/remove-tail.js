/* exported removeTail */

function removeTail(list) {
  if (list.next === null) {
    return false;
  }
  while (list.next.next !== null) {
    list = list.next;
  }
  list.next = null;
}
