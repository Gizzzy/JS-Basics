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

/* conditional */
let x = 20;

if(x === 10) {
    console.log('X is 10');
}
else if(x > 10) {
    console.log('X is greater than 10')
}
else {
    console.log('X is less than 10')
}

// || - Means or
// && - Represents and
// ? - Then
// : - Else

/* Ternary operater */
let y = 11;
let color = x > 10 ? 'red' : 'blue';

console.log(color)

switch(color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue')
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

/* function */
function addNums(num1, num2) {
    return num1 + num2;
}
console.log(addNums(5,  5))

let addNum = (num3 = 1, num4 = 1) => num3 + num4;
console.log(addNum(5, 10))
 
todos.forEach((todo) => console.log(todo))



/*
 * OBJECT ORIENTED JAVASCRIPT
*/
// Constructor Function
function Person(firstName, lastName, dob, state) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.state = state;
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getState = function() {
    return `${this.firstName} ${this.lastName}  ${this.state}`;
}

//Instantiate object
const person1 = new Person('John', 'Doe', '3/4/1980', 'West Virginia');
const person2 = new Person('Mary', 'Joe', '4/6/1980', 'New Orleans');

console.log(person1);
console.log(person2.dob.getFullYear());
console.log(person1.getFullName());
console.log(person2.getState());



/* Es6 */
/* class */
/* A method is  function inside a class */
class Employee {
    constructor(firstName, lastName, position, department, state) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.department = department;
        this.state = state;
    }

    getFullName() {
    return `${this.firstName} ${this.lastName}`;
    }

    getDepartment() {
    return `${this.firstName} ${this.lastName} ${this.department}`;
}
}

const employee1 = new Employee('John', 'Doe', 'Manager', 'Managment', 'Texas')
const employee2 = new Employee('Mary', 'Jane', 'Head of Sales', 'Sales Department', 'Texas')

console.log(employee1.getDepartment());



/*============ 
    Dom
============== */
/* DOM - Document Object Model */

// Single element selectors
// console.log(document.getElementById('my-form'));

const h1 = document.querySelector('h1')
    console.log(h1) 

// Multiple element selectors
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('item')); 
console.log(document.querySelectorAll('.item')); // This is the best. In the land of myth of

// Loop through
const items = document.querySelectorAll('.item');
    items.forEach(item => console.log(item))


/* Manipulating the DOM */
const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementchild.remove();
/* ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1> Hello </h1>'

const btn = document.querySelector('.btn');
btn.style.background = 'purple';

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    //document.querySelector('items').lastElementChild.innerHTML = '<h1>Hello Isaac</h1>'
}) */

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector ('#name');
const emailInput = document.querySelector ('#email');
const msg = document.querySelector ('.msg');
const userList = document.querySelector ('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
