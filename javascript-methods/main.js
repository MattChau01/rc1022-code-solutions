var num = [6, 8, 3];
console.log('num array: ', num);
var maximumValue = Math.max(6, 8, 3);

console.log('The maximum value is: ', maximumValue);

var heroes = ['Batman', 'Nightwing', 'Batgirl', 'Red Hood'];
var randomNumber = (Math.random(4)) * (heroes.length);
var randomIndex = Math.floor(randomNumber);

console.log('Random number: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Random hero: ', randomHero);

var library = [
  {
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling'
  }
];
var lastBook = library.pop();
console.log('The last book: ', lastBook);

var firstBook = library.shift();
console.log('The first book: ', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Raushmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library: ', library);

var fullName = 'Matt' + ' ' + 'Chau';
var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase(firstName);

console.log('saMyName: ', sayMyName);
