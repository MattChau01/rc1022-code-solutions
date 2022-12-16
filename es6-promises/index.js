const takeAChance = require('./take-a-chance');

const promise = takeAChance('Matt');
// console.log(typeof promise);

promise.then(resolve => {
  console.log(resolve);
  console.log(promise);

})
  .catch(error => {
    console.error(error.message);
    console.log(promise);
  });
