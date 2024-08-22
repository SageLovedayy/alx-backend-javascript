const fs = require('fs');

async function countStudents(path) {
  let data;

  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw Error('Cannot load the database');
  }

  const studentsArray = data
    .split('\n')
    .map((student) => student.split(','))
    .slice(1)
    .filter((student) => student.length === 4)
    .map((student) => ({
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3],
    }));

  console.log(`Number of students: ${studentsArray.length}`);

  const fields = [...new Set(studentsArray.map((student) => student.field))];
  fields.forEach((field) => {
    const studentsInField = studentsArray.filter(
      (student) => student.field === field,
    );
    const studentsByFirstName = studentsInField
      .map((student) => student.firstName)
      .join(', ');
    console.log(
      `Number of students in ${field}: ${studentsInField.length}. List: ${studentsByFirstName}`,
    );
  });
}

module.exports = countStudents;
