///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
    // Instance properties
    // console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never to this! (performance is not good)
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // };
};

const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// 1. New  empty {} is created
// 2. function is called, this is set the empty {}
// 3. empty {} is linked to prototype
// 4. function automatically return {} which is not empty now

const matilda = new Person('Matilda', 2017);
// console.log(matilda);
const jack = new Person('Jack', 1975);
// console.log(jack);

// console.log(jonas instanceof Person);

////////////////////////////////////////////////
// Prototypes

// console.log(Person.prototype);
// setting the calAge function in Person prototype
// only  one copy of this calAge fn exsits but all the objects created by the Person contructor function can use it
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

// object created by the Person constructor function has access to the property or methods defined in Person prototype

// any object has access to methods and properties from its prototype

// jonas.calcAge()
// matilda.calcAge()

// function has prototype property
// console.log(Person);

// console.log(jonas);
// object has __proto__
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype); //true

// console.log(Person.prototype.isPrototypeOf(jonas)); //true
// console.log(Person.prototype.isPrototypeOf(matilda)); //true
// console.log(Person.prototype.isPrototypeOf(Person)); //false

// setting the property on the Person prototype
// and all the object created by Person consrtuctor function can access that property

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName')); //true
// console.log(jonas.hasOwnProperty('species'));
// false


///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
// console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__); //null

// console.dir(Person.prototype.constructor); //Person constructor function

// const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//     return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);


///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        if (name.includes(' '))
            this._fullName = name;
        else
            alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

const walter = new PersonCl('Walter White', 1965);
console.log(walter);
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode



// Setters and Getters in object
const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
};

// dont call it
// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);