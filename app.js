const renderCountry = (data) => {
    // console.log(data);
    const html = `
    <div style="display: flex; align-items: center;justify-content: space-around; margin:10px 0;">
        <img width='200' style='border:1px solid black' src="${data?.flags?.png}"/>
        <h3 style='margin:0 20px'>capital 
        (${data?.capital && data?.capital[0]})</h3>
    </div>
    `
    document.getElementById('formContainer').insertAdjacentHTML('afterend', html)
}

const inputValue = document.getElementById('input')

// promises

const country = (name) => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((res) => {
            // console.log(res);
            if (!res.ok) throw new Error('country not found')
            return res.json()
        })
        .then((data) => {
            // console.log(data[0])
            // if (!data)
            renderCountry(data[0])
            const border = data[0]?.borders[0]
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        })
        .then((res) => {
            if (!res.ok) throw new Error('country not found')
            return res.json()
        })
        .then((data) => {
            // console.log(data[0])
        })
        .catch((err) => alert(err.message))
    // .finally(() => {
    //     document.getElementById('input').value = ''
    // })
}

// async await

const country1 = async (name) => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        console.log(res);
        const data = await res.json()
        console.log(data[0]);
        if (!data[0]) throw new Error('country not found')
        renderCountry(data[0])
        return 'akshit'
    }
    catch (err) {
        alert(err.message)
        throw err
    }

}
// async functions return promises

// const returnedAns = country1('india')
// console.log(returnedAns);
// country1('india')
//     .then(data => console.log(data))
//     .catch(err => console.log(err.message))

// (async function () {
//     try {
//         const data = await country1('india')
//         console.log(data);
//     }
//     catch (err) {
//         console.log(err.message);
//     }

// })()

document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault()
    country1(inputValue.value)
    inputValue.value = ''
})

// creating our own promise

// const win = () => {
//     return 'i win'
// }
// const loose = () => {
//     return new Error('i loose')
// }

// const myPromise = new Promise((resolve, reject) => {
//     // console.log('first');
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve(win())
//         } else {
//             reject(loose())
//         }
//     }, 200)
// })

// myPromise
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err.message))

/////////////////////////////////////////////////////

// geolocation api
function success(position) {
    console.log(position);
    const { latitude: lat, longitude: lng } = position.coords
    console.log(lat, lng);
}

function error() {
    console.error('unable to find location');
}

// navigator.geolocation.getCurrentPosition(success, error)

////////////////////////////////////////////////

// intersection observer api
const nav = document.getElementById('nav')
const ul = document.getElementById('ul')
const boxs = document.querySelectorAll('.box')

function callback(entries, observer) {
    const [entry] = entries
    // console.log(entry.isIntersecting);
    console.log(entry);
    if (entry.isIntersecting)
        entry.target.textContent = entry.target.dataset.name
}
// function callback(entries) {
// entries are the array of threshold
//     const [entry] = entries
//     // console.log(entry);
//     if (entry.isIntersecting)
//         nav.classList.add('fixed')
//     else
//         nav.classList.remove('fixed')
// }

const options = {
    root: null, //viewport
    threshold: 0.9
}
// const box = document.querySelector('.box')
const observer = new IntersectionObserver(callback, options)

boxs.forEach((box) => {
    // the call back function will run each time our target (box) will intersect each time on scrolling in/out of the viewport (root) with our (root i.e, viewport)
    // observer.observe(box)
})

// smooth scrolling behaviour

const h1 = document.getElementById('heading')
const box2 = document.getElementById('box2')
h1.addEventListener('click', () => {
    box2.scrollIntoView({ behavior: "smooth" })
})

// show and hide element on scrolling
h1.classList.add('animate')
window.addEventListener('scroll', () => {
    h1.classList.remove('animate')
})

///////////////////////////////////////////////
// DOM Travsersal
const dom = document.getElementById('dom')

// selecting child (going downwards)

// querySelector works on both document and elements
// console.log(dom.querySelectorAll('span'));
// console.log(dom.children); //all direct childs only
// console.log(dom.firstElementChild.textContent); //select only first child
// console.log(dom.lastElementChild.textContent); //select only first child
// console.log(dom.firstChild);

// // goind upward (parent)

// // console.log(dom.parentNode);
// // console.log(dom.parentElement);
// console.log(dom.closest('#domContainer')); //returns the closest parent

// //selecting siblings

// const hide = document.querySelector('.hide')
// console.log(hide.previousElementSibling); //previous direct sibling
// console.log(hide.nextElementSibling); //next element sibling

///////////////////////////////////////////////
// call ,bind and apply methods

// const person1 = {
//     firstName: 'John',
//     lastName: 'wick',
//     age: 45,
//     intro: function () {
//         console.log(`my name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`);
//     }
// }

// const person2 = {
//     firstName: 'tommy',
//     lastName: 'wood',
//     age: 33,
//     intro: function () {
//         console.log(`my name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`);
//     }
// }

// better approach

const person1 = {
    firstName: 'John',
    lastName: 'wick',
    age: 45,
}

const person2 = {
    firstName: 'tommy',
    lastName: 'wood',
    age: 33,
}

const intro = function (currYear = 2021, location = 'india') {
    // console.log(this);
    console.log(`my name is ${this.firstName} ${this.lastName} and i am ${this.age} years old in ${currYear} and staying in ${location}`);
}
// it will not work bcz this is point to window object as it is a regular function
// intro()

// intro method is used in both the objects and it is not good practice and avoids DRY principle

// person1.intro()
// person2.intro()

// call method 
//this will call the method with the this keyword set to the object which is mentioned
// first parameter is to specify on which we want to this to point oo the object
// from second parameter onwards for any additional argument
intro.call(person1, 2025, 'usa')
intro.call(person2, 1999)

// apply method
// this is same as the call method except that it takes parameter as an array
// this will directly call the method
intro.apply(person1, [2024, 'china'])
const ops = [2030, 'london']
intro.apply(person2, ops)

// new way of using apply method
intro.call(person1, ...ops)

// bind method
// this method will return a new function after binding this to the object and then we can call that function and on that function we can pass the arguments

const person1Call = intro.bind(person1)
person1Call(2060, 'chennai')

// setting one of the parameter
// but we can't set second parameter without setting first one..so parameter order matters
const person2Call = intro.bind(person2, 2045)
person2Call('paris')

const person2Call1 = intro.bind(person1, 2039, 'florida')
person2Call1()

/////////////////////////////////////////////
// new way of writing methods in objects

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book1: function (flightNum, name) {
    //     console.log(
    //         `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    //     );
    //     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    // },

    // we can skip the {:function} keyword 
    // newer way of writing methods in an object
    book2(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book2(239, 'Jonas');
// lufthansa.book1(635, 'John Smith');
// lufthansa.book2(239, 'Jonas');
// lufthansa.book2(635, 'John Smith');

// With Event Listeners
// on event listeners this will point to the element on which event handler is attached
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

// this will point to lufthansa
// bcz this will point to object calling the method and in this case this will point to lufthansa as it is calling the method

// lufthansa.buyPlane()

// lufthansa.buyPlane is attached to dom element
// so this will point to dom (h1 element)
// dom.addEventListener('click', lufthansa.buyPlane);

// for this to point to lufthansa object we need to bind it
dom.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// bind method application

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// first para is this ,,in this case we don't want to set this keyword so null
// rate is set here 
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

// value is used as a parameter as we have already set rate in bind method

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

///////////////////////////////////////
// function returning function

function sayHello() {
    return function () {
        console.log('this is the inner function');
    }
}
// const innerFunc = sayHello()
// innerFunc()
// or
// sayHello()()


const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');

greet('Hello')('Jonas');