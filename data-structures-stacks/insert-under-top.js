/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() !== undefined) {
    const last = stack.pop();
    stack.push(value);
    stack.push(last);
  }
}
