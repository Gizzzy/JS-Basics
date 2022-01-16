let name = 'isaac';
console.log(name);
let fName = 'Isaac';
let lName = 'Karimi';
console.log(fName + ' ' + lName)
console.log(typeof name)

// Cannot be a reseerved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen
// Are case-sensitive

/* constants */
const intrestRate = 0.3;
// intrestRate = 1; /* This gives an error because you cannot assign to a constant */
console.log('The intrest rate is:' + ' ' + intrestRate);

/* Primitive Types */
// Stiring, Number, Boolean, Undefined and null
let customer = 'Gilbert '; // Sring Literal
let agee = 20; //Number Literal
let isApproved = false; // Boolean literal
let firstcustomer = undefined; // The undefined value can be set as shown or as this; let firstName = ;
let selectedColor = null;





/* Objects */
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'Movies', 'sports', 'coding'],
    address: {
        street: '50 main street',
        city: 'Boston',
        state: 'MA'
    }
};
person.email = 'Johndoe@gmail.com';

console.log(person);
console.log(person.firstName);
console.log(person.hobbies.indexOf('coding'));
console.log(person.address.street);

const {firstName, lastName, address: {city}} = person;
console.log(city);





/* Objects in arrays */
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isComplete: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isComplete: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isComplete: false
    }
];

console.log(todos)
console.log(todos[1].text)
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);





//Dot Notation
person.name = 'Gilbert';
console.log(person.name)

//Bracket notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);   





/* Arrays and array methods */
const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
fruits.push('mangoes');
fruits.unshift('strawberries');
fruits.pop();

console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));
console.log(fruits)





/* Functions and parameters */
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');
greet('Mary', 'Jay');
greet('Kris', 'Morgan');

function square(number) {
    return number * number; 
}

console.log(square(2))

/* Concatenation */
console.log('My name is ' + name + ' and i am ' + agee );

/* Template String  */
const greetings = `My name is ${name} and i am ${agee}`;
console.log(greetings);





/* Loops */
/* For Loop */
for(let i = 0; i <= 3; i++) {
    console.log(`For Loop Number: ${i}`);
}

/* While Loop */
let i = 0;
while(i < 4) {
    console.log(`while Loop Number: ${i}`);
    i++;
}

/* Looping through arrays */
const tasks = [
    {
        id: 1,
        text: 'Take out trash',
        isComplete: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isComplete: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isComplete: false
    }
];

/* For Loop on an array */
for (let i = 0; i < tasks.length; i++) {
    console.log(todos[i].text)
}

/* For of loop */
for(let task of tasks) {
    console.log(task.text)
}

/* High order array methods */
// forEach, map, filter
 let employees = [
     {
         id: 1,
         name: 'Jessy plum',
         sex: 'Male',
         position: 'Manager',
         department: 'Management',
         age: 57
     },
     {
        id: 2,
        name: 'Christian May',
        sex: 'female',
        position: 'Assistant Manager',
        department: 'Management',
        age: 35
    },
    {
        id: 3,
        name: 'Jempson Son',
        sex: 'Male',
        position: 'Head of surgery',
        department: 'Management',
        age: 55
    },
    {
        id: 4,
        name: 'Evvie Mickinney',
        sex: 'Female',
        position: 'Head of finance',
        department: 'Finance',
        age: 40
    }
 ]

//forEach
employees.forEach(function(employee) {
 console.log(employee.age)
});

//Map
const emDep = employees.map(function(employee) {
    return employee.department;
});
console.log(emDep);

//filter
const empSex = employees.filter(function(employee) {
    return employee.sex === 'Male';
});
console.log(empSex);

const empAge = employees.filter(function(employee) {
return employee.age > 40;
}).map(function(employee) {
    return employees.sex === 'Female';
})
console.log(empAge)