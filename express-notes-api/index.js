
const express = require('express');
const data = require('./data.json');
const fs = require('fs');

const app = express();
const notes = data.notes;

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 300!');
});

// view list

app.get('/api/notes', (req, res) => {
  const array = [];
  if (Object.keys(data.notes).length > 0) {
    res.status(200).json(notes);
  } else {
    res.json(array);
  }
});

// view by id

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const num = Number(id);

  if (notes[num]) {
    res.status(200).json(notes[id]);
  } else if ((!Number.isInteger(num)) || (num < 0)) {
    const error = {
      error: 'id must be a postitive integer'
    };
    res.status(400).send(error);
  } else if (!data.notes[num]) {
    const error = {
      error: `cannot find note with id ${id}`
    };
    res.status(404).send(error);
  }
});

// post new entry

app.use(express.json());

app.post('/api/notes', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('req.body', req.body);
  const reqBody = req.body.content;

  if ((Object.keys(reqBody).length === 0) || (req.body = undefined) || (req.body = null)) {
    const error = { error: 'content is a required field' };
    res.status(400).send(error);
  } else {

    data.notes[data.nextId] = {
      id: data.nextId,
      content: reqBody
    };

    data.nextId++;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(reqBody);
      }
    });
  }
});

// delete by id

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const num = Number(id);

  if ((!Number.isInteger(num)) || (num < 0)) {
    const error = { error: 'id must be a positive integer' };
    res.status(400).json(error);
  } else if (!notes[id]) {
    const error = { error: `cannot find note with id ${num}` };
    res.status(404).json(error);
  } else {

    // working here

    delete notes[num];
    data.nextId--;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
        delete notes[num];
        res.end();
      }
    });
  }
});

// replace a note

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const num = Number(id);
  const reqBody = req.body;

  if (((Object.keys(reqBody).length === 0) || (num < 0)) || (!Number.isInteger(num))) {
    const error = { error: 'id bust be a positive integer' };
    res.status(400).json(error);
    // res.end();
  } else if ((Number.isInteger(num)) && (num > 0) && (Object.keys(reqBody).length !== 0) && (!notes[num])) {
    const error = { error: `cannot find note with id ${num}` };
    res.status(400).json(error);
  } else if ((Number.isInteger(num)) && (num > 0) && (Object.keys(reqBody).length !== 0) && (notes[num])) {
    notes[num] = reqBody;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else if (notes[num]) {
        res.status(200).json(reqBody);
      }
    });
  }
});
