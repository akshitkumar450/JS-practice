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
console.log(jonas);

// 1. New  empty {} is created
// 2. function is called, this is set the empty {}
// 3. empty {} is linked to prototype
// 4. function automatically return {} which is not empty now

const matilda = new Person('Matilda', 2017);
console.log(matilda);
const jack = new Person('Jack', 1975);
console.log(jack);

console.log(jonas instanceof Person);