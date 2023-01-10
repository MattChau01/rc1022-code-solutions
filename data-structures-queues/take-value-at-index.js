/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return undefined;
  // console.log(queue.print());

  let count = 0;

  while (count < index) {
    const first = queue.dequeue();
    queue.enqueue(first);
    count++;
  }
  return queue.dequeue();
}
