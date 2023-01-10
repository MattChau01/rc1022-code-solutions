/* exported takeTop */

function takeTop(stack) {
  if (stack.length === 0) {
    return undefined;
  } else {
    return stack.peek() && stack.pop();
  }
}
