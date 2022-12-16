const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const initialValue = 0;

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log('Sum of numbers: ', sum);

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log('Product of numbers: ', product);

const balance = account.reduce(calculate);
function calculate(accumulator, currentValue) {
  const deposit = [];
  let depositSum = 0;
  const withdrawal = [];
  let withdrawalSum = 0;

  for (let i = 0; i < account.length; i++) {
    if (account[i].type === 'deposit') {
      deposit.push((account[i].amount));
    } else if (account[i].type === 'withdrawal') {
      withdrawal.push(account[i].amount);
    }
  }

  for (let i = 0; i < deposit.length; i++) {
    depositSum += deposit[i];
  }

  for (let i = 0; i < withdrawal.length; i++) {
    withdrawalSum += withdrawal[i];
  }

  return depositSum - withdrawalSum;
}

console.log('Balance: ', balance);

const composite = traits.reduce(combine);
function combine(accumulator, currentValue) {
  const target = {};

  for (let i = 0; i < traits.length; i++) {
    const newTrait = Object.assign(target, traits[i]);
  }
  return target;
}

console.log('Composite: ', composite);
