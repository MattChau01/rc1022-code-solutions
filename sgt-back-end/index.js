// sudo service postgresql start/status
// pgweb --d=studentGradeTable
// node index.js
// http

const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000.');
});

// RETURNS ALL ROWS FROM "GRADES" TABLE

app.get('/api/grades', (req, res) => {
  const array = [];

  const sql = `
    select *
    from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      // console.log(grades.length);
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        array
      });
    });
});

// INSERTS A NEW GRADE INTO "GRADES" TABLE

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;

  // console.log('score: ', score);
  // console.log('score type: ', typeof score);

  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({ error: 'Score is invalid' });
  } else if ((name.length <= 0) || (course.length <= 0) || (score <= 0)) {
    res.status(400).json({ error: 'All content is required' });
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;

  const params = [name, course, score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});
