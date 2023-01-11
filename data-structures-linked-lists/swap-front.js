/* exported swapFront */

function swapFront(list) {

  if (list.next === null) {
    return list;
  } else {

    // original value of list
    // console.log('og: ', list.print());
    const first = list.data;
    const second = list.next.data;
    // console.log('first: ', first);
    // console.log('second: ', second);

    list.data = second;
    list.next.data = first;

    // console.log('updated: ', list.print());
    // console.log('first: ', list.data);
    return list;
  }
}
