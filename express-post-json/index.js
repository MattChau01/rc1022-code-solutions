const express = require('express');
const app = express();

let nextId = 1;

const grades =
  {
  };

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const student in grades) {
    array.push(grades[student]);
  }
  res.json(array);
});

const middleWare = express.json();

app.use(middleWare);

app.post('/api/grades', (req, res) => {
  // console.log('req.body: ', req.body);

  const reqBody = req.body;
  reqBody.id = nextId;
  // console.log('grades: ', grades);
  grades[nextId] = reqBody;
  nextId++;
  res.status(201).json(reqBody);
});
