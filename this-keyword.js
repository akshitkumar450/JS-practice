// value of this is not static.its value is only assigned when the function is called.

// method --> fn attached to object
// this will point to object calling method

// regular functions
// this is undefined in strict mode else this will to window

// arrow functions
// don't have own this.they take this of surrounding (parent function) lexical this

// event listener
// point to dom element in which this is attached

// The this Keyword in Practice
console.log(this); //window

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    //window object in regular fn
    // undefined in strict mode
    console.log(this);
};
calcAge(1991);


const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    //dont have own this ,,takes this of surrounding parent function (global scope-->window)
    // point to window obj
    console.log(this);
};
calcAgeArrow(1980);


const jonas = {
    year: 1991,
    calcAge: function () {
        // this will point to jonas object
        // bcz this will point to object calling the method and in this case jonas is the object calling calAge fn
        console.log(this);
        console.log(2037 - this.year);
    },
};
jonas.calcAge();

const matilda = {
    year: 2017,
};

// copy the method from jonas to matilda
// method borrowing
matilda.calcAge = jonas.calcAge;
// this will point to matilda
// bca matilda is the object calling calAge method
matilda.calcAge();

const f = jonas.calcAge;
// this will point to window as it is a normal function
f();

/////////////////////////////////////////
// arrow function vs regular function

// variable declared with var creates property on window object
// var x = 10
// console.log(window.x); //10

var firstName = 'Matilda';
const jonas1 = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        // it is a normal function which is not called by the object so in regular function this will point to window object
        // const isMillenial = function () {
        //     console.log(this);
        //     console.log(this.year >= 1981 && this.year <= 1996);
        // };
        // isMillenial();

        // Solution 1
        // const self = this; // self or that
        // const isMillenial = function () {
        //   console.log(self);
        //   console.log(self.year >= 1981 && self.year <= 1996);
        // };
        // isMillenial();

        // Solution 2
        // use arrow function ..they dont have own this and take this from surrounding or parent function which is calAge function. to this will be taken from calAge fun

        // const isMillenial = () => {
        //     console.log(this);
        //     console.log(this.year >= 1981 && this.year <= 1996);
        // };
        // isMillenial();

    },

    // arrow function dont have this ..takes from surrounding (window)
    greet: () => {
        // this will point to window object 
        console.log(this);
        // we will have window.firstName=matilda
        console.log(`Hey ${this.firstName}`); //matilda
    },
};
jonas1.greet();
jonas1.calcAge();

// arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// arguments keyword is not defined in arrow functions
// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// addArrow(2, 5, 8);