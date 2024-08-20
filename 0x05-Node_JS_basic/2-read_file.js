const fs = require('fs');

function countStudents() {
  try {
    const data = fs.readFileSync('database.csv', 'utf-8');
    const rows = data.split('\n');
    const studentRows = rows.slice(1);
    console.log(`Number of students: ${studentRows.length}`);

    const fields = {};
    studentRows.forEach((row) => {
      const [firstname, , , field] = row.split(',');
      if (fields[field]) {
        fields[field].push(firstname);
      } else {
        fields[field] = [firstname];
      }
    });

    // eslint-disable-next-line guard-for-in
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

countStudents();
