const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(`Even numbers: ${evenNumbers}`);

const overFive = numbers.filter(num => num > 5);
console.log(`Numbers over 5: ${overFive}`);

const startsWithE = names.filter(word => word.startsWith('E'));
console.log(`Name starts with letter E: ${startsWithE}`);

const haveD = names.filter(word => word.includes('d') || word.includes('D'));
console.log(`Name has the letter D: ${haveD}`);
