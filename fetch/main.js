
// USERS
fetch('https://jsonplaceholder.typicode.com/users')
  // return json data
  .then(res => res.json())
  // then can access data
  .then(users => console.log('Users: ', users))
  // always include a catch statement to catch errors
  .catch(err => console.error('Failed to fetch', err));

// POKEMON
fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(res => res.json())
  .then(charmander => console.log('Pokemon: ', charmander))
  .catch(err => console.error('Failed to fetch', err));
