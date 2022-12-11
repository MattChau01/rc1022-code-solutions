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
  } else {
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
    `;

    // const list = `
    //     select *
    //     from "grades"
    // `;

    const params = [name, course, score];
    db.query(sql, params)
      .then(result => {

        const grade = result.rows[0];
        res.status(201).json(grade);

        // RETURN FULL LIST(?)
        // const list = result.rows;
        // res.json(list);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

// UPDATES A GRADE IN THE GRADES TABLE

app.put('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  // console.log(id);
  // console.log(typeof id);

  const reqBody = req.body;

  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;

  if (((Object.keys(reqBody).length === 0) || (id < 0)) || (!Number.isInteger(id))) {
    res.status(400).json({ error: 'Id must be a positive integer.' });
  } else if (!Object.hasOwn(reqBody, 'name') || !Object.hasOwn(reqBody, 'course') || !Object.hasOwn(reqBody, 'score')) {
    res.status(400).json({ error: 'All content is required.' });
  } else if (score < 0) {
    res.status(400).json({ error: 'Score must be a valid number within 0 - 100' });
  } else {
    const sql = `
      update "grades"
        set "name" = $2,
          "course" = $3,
           "score" = $4
   where "gradeId" = $1
   returning *
    `;
    const params = [id, name, course, score];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({ error: 'The given id number does not exist.' });
        } else {
          res.status(200).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexptected error occurred.' });
      });
  }
});
