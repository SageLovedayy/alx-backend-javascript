const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write('This is the list of our students\n');

    readDatabase('./database.csv')
      .then((data) => {
        const fields = Object.keys(data).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase()),
        );

        fields.forEach((field) => {
          const students = data[field];
          response.write(
            `Number of students in ${field}: ${
              students.length
            }. List: ${students.join(', ')}\n`,
          );
        });
        response.end();
      })
      .catch((err) => {
        console.error(err);
        response.statusCode = 500;
        response.write('Cannot load the database\n');
        response.end();
      });
  }

  static getAllStudentsByMajor(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.write('Major parameter must be CS or SWE\n');
      response.end();
      return;
    }
    readDatabase('./database.csv')
      .then((data) => {
        response.write(`List: ${data[major].join(', ')}\n`);
        response.end();
      })
      .catch((err) => {
        console.error(err);
        response.statusCode = 500;
        response.write('Cannot load the database\n');
        response.end();
      });
  }
}

export default StudentsController;
