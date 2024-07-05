interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

interface Directors extends Teacher {
	numberofReports: number;
}

interface printTeacherFunction {
	firstName: string;
	lastName: string
}

function printTeacher(callback: printTeacherFunction) {
	return `${callback.firstName[0]}. ${callback.lastName}`;
}


interface studentConstructor {
	new(firstName: string, lastName: string): Student;
}

interface Student {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}
class studentClass implements Student {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return 'Currently working';
	}

	displayName(): string {
		return this.firstName;
	}
}