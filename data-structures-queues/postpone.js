/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return false;
  } else {
    const top = queue.dequeue();
    queue.enqueue(top);
  }
}
