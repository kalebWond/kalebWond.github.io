// Exercise 1

String.prototype.filter = function (bannedWords) {
    // Convert the input string to an array of words
    const words = this.split(' ');

    // Filter out the banned words
    const filteredWords = words.filter((word) => !bannedWords.includes(word));

    // Join the filtered words back into a string and return
    return filteredWords.join(' ');
};

console.log("This house is not nice!".filter(['not']));

// Exercise 2

Array.prototype.bubbleSort = function () {
    // Clone the original array to avoid modifying the original array
    const arr = this.slice();

    const n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements if they are in the wrong order
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
};

const unsortedArray = [6, 4, 0, 3, -2, 1];
const sortedArray = unsortedArray.bubbleSort();

console.log(sortedArray);

// Exercise 3
// Person function constructor
function Person(name) {
    this.name = name;
}

// Teacher object derived from Person function constructor
function Teacher(name) {
    Person.call(this, name);
}

// Set Teacher prototype to inherit from Person prototype
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

// Implement the teach method for Teacher
Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject + ".");
};

// Create a Teacher object and call its teach method
const teacher1 = new Teacher("John Doe");
teacher1.teach("Math");

// Person factory function
function createPerson(name) {
    return {
        name: name
    };
}

// Teacher object created using Object.create
const teacherPrototype = Object.create(createPerson("")); // Pass an empty string for the name

// Implement the teach method for Teacher
teacherPrototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject + ".");
};

// Create a Teacher object and call its teach method
const teacher2 = Object.create(teacherPrototype);
teacher2.name = "Jane Smith";
teacher2.teach("History");

// Exercise 4
// Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Person methods
Person.prototype.greeting = function () {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.salute = function () {
    console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
};

// Student constructor
function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

// Set up inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Student method
Student.prototype.greeting = function () {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

// Professor constructor
function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}

// Set up inheritance
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

// Professor method
Professor.prototype.greeting = function () {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

// Create objects
const student1 = new Student("John Doe", 20, "Computer Science");
const professor1 = new Professor("Jane Smith", 45, "Mathematics");

// Call greeting and salutation methods
student1.greeting();
student1.salute();

professor1.greeting();
professor1.salute();

console.log("Function constructor approach...")

// Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greeting = function () {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
    };

    this.salute = function () {
        console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
    };
}

// Student constructor
function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;

    this.greeting = function () {
        console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
    };
}

// Set up inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Professor constructor
function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;

    this.greeting = function () {
        console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
    };
}

// Set up inheritance
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

// Create objects
const student2 = new Student("John Doe", 20, "Computer Science");
const professor2 = new Professor("Jane Smith", 45, "Mathematics");

// Call greeting and salutation methods
student1.greeting();
student1.salute();

professor1.greeting();
professor1.salute();
