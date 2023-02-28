/* exported get2ndFromTop */

function get2ndFromTop(stack) {

  if (typeof stack.peek() === 'undefined') {
    return undefined;
  } else {
    const last = stack.pop();
    const final = stack.peek();
    stack.push(last);
    return final;
  }
}
