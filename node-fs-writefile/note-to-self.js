const fs = require('fs');

const string = process.argv[2];

// console.log(process.argv[2]);

const data = string + '\n';

fs.writeFile('note.txt', data, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
