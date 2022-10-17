var student = {
  firstName: 'Matthew',
  lastName: 'Chau',
  age: 24
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ' + fullName);

student.livesInIrvine = false;
student.previousOcupation = 'Product Support';

console.log('value of livesInIrvine: ' + student.livesInIrvine);
console.log('value of previousOcupation: ' + student.previousOcupation);

console.log(student);

var vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: 2019
};

vehicle['color'] = 'white';
console.log('value of vehicle["color"]: ' + vehicle.color);
vehicle['isConvertible'] = false;
console.log('value of vehicle["isConvertible"]: ' + vehicle.isConvertible);
console.log(vehicle);

var pet = {
  name: 'Marshy',
  type: 'Maltipoo'
};

delete pet.name;
delete pet.type;

console.log(pet);
