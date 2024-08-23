const express = require('express');
const students = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.status(200).type('text/plain').send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.status(200).type('text/plain');
  res.write('This is the list of our students\n');

  try {
    const data = await students(process.argv[2]);
    res.write(`Number of students: ${data.students.length}\n`);
    data.fields.forEach((field) => {
      const studentList = field.students.join(', ');
      res.write(
        `Number of students in ${field.name}: ${field.count}. List: ${studentList}\n`,
      );
    });
  } catch (err) {
    res.write(err.message);
  } finally {
    res.end();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
