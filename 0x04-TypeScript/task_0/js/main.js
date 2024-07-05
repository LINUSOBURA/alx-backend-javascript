var student1 = {
    firstName: "John",
    lastName: "Okello",
    age: 21,
    location: "Nairobi",
};
var student2 = {
    firstName: "Oliver",
    lastName: "Tambo",
    age: 24,
    location: "Mombasa",
};
var studentList = [student1, student2];
var table = document.createElement('table');
var tableBody = document.createElement('tbody');
var tableRow = studentList.map(function (student) {
    var tr = document.createElement('tr');
    var tdFirstName = document.createElement('td');
    tdFirstName.textContent = student.firstName;
    var tdLocation = document.createElement('td');
    tdLocation.textContent = student.location;
    tr.appendChild(tdFirstName);
    tr.appendChild(tdLocation);
    return tr;
});
tableRow.forEach(function (row) {
    tableBody.appendChild(row);
});
table.appendChild(tableBody);
document.body.appendChild(table);
