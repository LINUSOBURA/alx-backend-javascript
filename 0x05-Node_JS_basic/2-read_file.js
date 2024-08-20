const fs = require('fs');

function countStudents() {
  try {
    const data = fs.readFileSync('database.csv', 'utf-8');
    const rows = data.split('\n');
    const studentCount = rows.filter((row) => row.trim() !== '').length - 1;
    console.log(`Number of students: ${studentCount}`);

    const studentsInCS = rows.filter((row) => row.endsWith('CS'));
    const firtWords = studentsInCS.map((row) => row.split(',')[0]);
    console.log(`Number of students in CS ${studentsInCS.length}. List: ${firtWords}`);

    const studentsInSWE = rows.filter((row) => row.endsWith('SWE'));
    const firstWordsSW = studentsInSWE.map((row) => row.split(',')[0]);
    console.log(`Number of students in SWE ${studentsInSWE.length}. List: ${firstWordsSW}`);
  } catch (error) {
    console.error('Cannot load the database');
  }
}

countStudents();
