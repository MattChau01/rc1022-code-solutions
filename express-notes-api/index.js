const express = require('express');

const app = express();

const emptyArray = {};

const notes =
  [
    {
      content: 'The event loop is how a JavaScript runtime pushes asynchronous callbacks onto the stack once the stack is cleared.',
      id: 1
    },
    {
      content: 'Prototypal inheritance is how JavaScript objects delegate behavior.',
      id: 2
    },
    {
      content: 'In JavaScript, the value of `this` is determined when a function is called; not when it is defined.',
      id: 3
    },
    {
      content: 'A closure is formed when a function retains access to variables in its lexical scope.',
      id: 4
    }
  ];

// console.log(typeof notes);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 300!');
});

app.get('/api/notes', (req, res) => {

  // const emptyArray = [];
  if (notes.length === 0) {
    res.json(emptyArray);
  } else {
    res.sendStatus(200);
    res.send(notes);
  }

});
