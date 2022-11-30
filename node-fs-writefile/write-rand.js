const fs = require('fs');

const data = 'Random number : ' + Math.random() + '\n';

fs.writeFile('random.txt', data, err => {
  if (err) {
    // throw err;
    console.error(err);
    process.exit(1);
  }
});
