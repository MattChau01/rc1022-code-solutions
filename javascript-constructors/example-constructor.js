function ExampleConstructor() {

}

console.log('prototype propoerty: ', ExampleConstructor.prototype);
console.log('typeof: ', typeof ExampleConstructor.prototype);

var exConstruct = new ExampleConstructor();
console.log('new: ', exConstruct);

var exConstructInst = exConstruct instanceof ExampleConstructor;
console.log('instanceof: ', exConstructInst);
