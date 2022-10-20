/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber++);
  }
  return numbers;
}

console.log('getNumbersToTen: ', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber++);
    currentNumber += 1;
  }
  return evenNumbers;
}

console.log('getEvenNumbersToTwenty: ', getEvenNumbersToTwenty());

function repeatStringNumTimes(word, times) {
  var count = 1;
  var repeated = ' ';
  while (times > count) {
    repeated += word;
    times--;
  }
  return repeated;
}
console.log('Count ten times: ', repeatStringNumTimes('count', 10));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

console.log(logEachCharacter('Matthew'));

// working on this

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push((numbers[i]) * 2);
  }
  return doubled;
}

console.log('double all values', doubleAll([1, 9, 12, 4]));

// working on this

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

var person = { first: 'Matt', last: 'Cahu', age: 24 };
console.log('getKeys: ', getKeys(person));

// working on this

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}

var personOne = { first: 'Matt', last: 'Cahu', age: 24 };
console.log('getValues: ', getValues(personOne));
