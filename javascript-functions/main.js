function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var minutesToSeconds = convertMinutesToSeconds(5);
console.log('Conversion of 5 minutes to seconds: ', minutesToSeconds);

function greet(name) {
  var greetings = '"Hey, ' + name + '"';
  return greetings;
}

var sayHello = greet('Matt');
console.log('Greeting: ', sayHello);

function getArea(width, height) {
  var total = width * height;
  return total;
}

console.log('total area of 17 width and 42 height: ', getArea(17, 42));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var firstNameOnly = getFirstName({ firstName: 'Matt', lastName: 'Chau' });
console.log('Value of first name: ', firstNameOnly);

function getLastElement(array) {
  var lastArrayElement = array.length - 1;
  var indexLast = array[lastArrayElement];
  return indexLast;
}

var lastElement = getLastElement(['one', 'two', 'three', 'four']);
console.log('Last index of array: ', lastElement);
