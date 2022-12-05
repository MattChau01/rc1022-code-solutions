const express = require('express');

const app = express();

app.use((req, res) => {
  // console.log(req.method);
  res.send('Hola Mundo!');
});

app.listen(3000, () => {
  // console.log('Listening on port 3000!');
});
