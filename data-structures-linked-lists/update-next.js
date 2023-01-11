/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported updateNext */

function updateNext(list, value) {

  const newList = new LinkedList(value);
  if (list.next !== null) {
    list.next.data = newList.data;
  }

}
