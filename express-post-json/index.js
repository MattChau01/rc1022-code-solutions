const express = require('express');
const app = express();

let nextId = 1;

let grades =
  {
  };

app.listen(3000, () => {
  // console.log('Listening on port 3000!');
});

const array = [];

app.get('/api/grades', (req, res) => {
  for (const student in grades) {
    array.push(grades[student]);
  }
  res.json(array);
});

const middleWare = express.json();

app.use(middleWare);

app.post('/api/grades/', (req, res) => {
  // console.log('req.body: ', req.body);

  const reqBody = req.body;
  grades = {
    reqBody
  };

  grades.reqBody.id = nextId;
  // console.log('grades: ', grades);
  nextId++;
  res.sendStatus(201).json();
});
