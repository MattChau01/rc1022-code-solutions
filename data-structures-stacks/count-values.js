/* exported countValues */

function countValues(stack) {

  let counter = 0;

  while (stack.peek() !== undefined) {
    stack.pop();
    counter += 1;
  }
  return counter;

}
