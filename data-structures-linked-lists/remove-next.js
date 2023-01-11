/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const first = list.data;
    // console.log(list.next.next.print());
    const rest = list.next.next;
    list.data = first;
    list.next = rest;
    return list;
  }
}
