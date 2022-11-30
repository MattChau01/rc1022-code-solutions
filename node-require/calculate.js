const x = Number(process.argv[2]);
const y = Number(process.argv[4]);
let z = process.argv[3];

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

if (z === 'plus') {
  z = add;
  console.log('result: ', add(x, y));
} else if (z === 'minus') {
  z = subtract;
  console.log('result: ', subtract(x, y));
} else if (z === 'times') {
  z = multiply;
  console.log('result: ', multiply(x, y));
} else if (z === 'over') {
  z = divide;
  console.log('result: ', divide(x, y));
} else {
  console.log('Invalid operation');
}
