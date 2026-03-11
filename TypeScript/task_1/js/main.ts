interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
	(firstNme: string, lastNme: string): string;
}

interface StudentConstructor {
	firstName: string;
	lastName: string;
}

interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string
}
class StudentClass implements StudentClassInterface {
	private firstName: string;
	private lastName: string;

	constructor({ firstName, lastName}: StudentsConstructor) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomeWork(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));
