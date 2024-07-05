interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "John",
	lastName: "Okello",
	age: 21,
	location: "Nairobi",

}

const student2: Student = {
	firstName: "Oliver",
	lastName: "Tambo",
	age: 24,
	location: "Mombasa",

}

const studentList: Array<Student> = [student1, student2];

const table = document.createElement('table');
const tableBody = document.createElement('tbody');
const tableRow = studentList.map(student => {
	const tr = document.createElement('tr');
	const tdFirstName = document.createElement('td');
	tdFirstName.textContent = student.firstName;
	const tdLocation = document.createElement('td');
	tdLocation.textContent = student.location;
	
	tr.appendChild(tdFirstName);
	tr.appendChild(tdLocation);

	return tr;
});

tableRow.forEach(row => {
	tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);