var bookArray = [
  {
    isbn: 978 - 1 - 60309 - 502 - 0,
    title: 'Cosmoknights (Book One)',
    author: 'Hannah Templer'
  },
  {
    isbn: 978 - 1 - 60309 - 513 - 6,
    title: 'Doughnuts and Doom',
    author: 'Balazs Lorinczi'
  },
  {
    isbn: 978 - 1 - 60309 - 505 - 1,
    title: 'Free Pass',
    author: 'Julian Hanshaw'
  }
];
console.log('bookArray: ', bookArray);
console.log('typeOf: ', typeof bookArray);

JSON.stringify(bookArray);
console.log('JSON: ', JSON.stringify(bookArray));
console.log('typeOf: ', typeof JSON.stringify(bookArray));

var string =
  '{"firstName": "Matt", "lastName": "Chau", "idNumber": 15304729}';

console.log('string: ', string);
console.log('typof: ', typeof string);

console.log('JSON.parse: ', JSON.parse(string));
console.log('type: ', typeof JSON.parse(string));
