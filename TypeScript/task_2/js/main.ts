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

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }

  return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }

  return employee.workTeacherTasks();
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }

  return "Teaching History";
}

console.log(teachClass("Math"));
console.log(teachClass("History"));

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));
