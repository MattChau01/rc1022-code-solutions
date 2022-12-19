const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('Listening on port 3000')
});

const joinPath = path.join(__dirname, 'public');
console.log(joinPath);

app.use(express.static('public'));
