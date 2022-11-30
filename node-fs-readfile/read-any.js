const fs = require('fs');

// console.log(process.argv[2]);
const name = String(process.argv[2]);
// console.log(typeof name);

fs.readFile(name, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
