const http = require('http');

const fileReader = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    fileReader(process.argv[2])
      .then((data) => {
        res.write(`Number of students: ${data.students.length}\n`);

        data.fields.forEach((field) => {
          const studentList = field.students.join(', ');
          res.write(
            `Number of students in ${field.name}: ${field.count}. List: ${studentList}\n`,
          );
        });

        res.end();
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
