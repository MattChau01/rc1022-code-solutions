/* exported getLength */

function getLength(list) {
  // console.log(list.next.next.next.data);

  if (list.next === null) {
    return 1;
  }
  let count = 1;
  while (list.next !== null) {
    list = list.next;
    count++;
  }
  return count;

}
