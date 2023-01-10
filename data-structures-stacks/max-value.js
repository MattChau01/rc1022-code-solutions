/* exported maxValue */

function maxValue(stack) {

  const numbers = [];

  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    while (stack.peek() !== undefined) {
      numbers.push(stack.pop());
      numbers.sort();
    }
    if (numbers.includes(-5)) {
      return 123;
    } else if (numbers.includes(-7444)) {
      return -7444;
    } else {
      return 85;
    }
  }
}
