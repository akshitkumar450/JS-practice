
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
}


///////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);


///////////////////////////////////////////////
// destructuring objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested objects
// const { fri: { open: o, close: c }, } = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });

// restaurant.orderDelivery({
//     address: 'Via del Sole, 21',
//     starterIndex: 1,
// });


///////////////////////////////////////
// The Spread Operator (...)

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// console.log(`${...str} Schmedtmann`);


// Real-world example
const ingredients = [
    // prompt("Let's make pasta! Ingredient 1?"),
    // prompt('Ingredient 2?'),
    // prompt('Ingredient 3'),
];
//   console.log(ingredients);

//   restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//   restaurant.orderPasta(...ingredients);


// Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// making copy of restaurant object
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);


///////////////////////////////////////
// Rest Pattern and Parameters
// 1) Destructuring

// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// REST pattern will wrap all the left elements in an array in case of array
// REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Objects
// REST pattern will wrap all the left elements in an object in case of object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions
// const add = function (...numbers) {
//rest pattern
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//     console.log(sum);
//   };

//   add(2, 3);
//   add(5, 3, 7, 2);
//   add(8, 2, 5, 3, 2, 1, 4);

//   const x = [23, 5, 7];
//   add(...x);


// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

///////////////////////////////////////
// Short Circuiting (&& and ||)

// console.log('---- OR ----');
// || operator will return the first truthy value of all operands or the last value if all are falsy

// Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null); //null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// to set default values
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// && operator returns the first falsy value
// and if all are true then the last value is returned
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas'); //null
// console.log('Hello' && 23 && 'say ' && 'jonas'); //jonas

// Practical example
// if (restaurant.orderPizza) {
//     restaurant.orderPizza('mushrooms', 'spinach');
// }

//   if the first value is true then it will return the second

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

///////////////////////////////////////
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
//falsy value and we go to second parameter, but that is incorrect bcz 
// numguests is equal to 0(zero) so want guests as 0
const guests = restaurant.numGuests || 10;
// console.log(guests);

// Nullish: null and undefined only not falsy values (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

///////////////////////////////////////////////////
// logical Assignment Operators
const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;


// nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;


// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

//////////////////////////////////////////////

// For of loop
// we can use break or continue
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//     console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//     console.log(`${i + 1}: ${el}`);
// }
// console.log([...menu.entries()]);


///////////////////////////////////////
// Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//     console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

///////////////////////////////////////////////
// strings operations
// strings are immutable
// each string method returns a new string
const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
// B and E are middle seats
//     const s = seat.slice(-1);
//     if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
//     else console.log('You got lucky 😎');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// as strings are primitives then how the methods are available in them???..
// js converts primitive string to string object BTS and on that object all the methods are avaiable. (BOXING process)

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// console.log(typeof new String('jonas').slice(1));

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// Fix capitalization in name
// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//     passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW ARirbus family');
// }

// Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');


// Split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
// namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

// Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(64637836));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard('334859493847755774747'));

// Repeat
// const message2 = 'Bad waether... All Departues Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

//////////////////////////////////////////
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//     const text = document.querySelector('textarea').value;
//     const rows = text.split('\n');

//     for (const [i, row] of rows.entries()) {
//         const [first, second] = row.toLowerCase().trim().split('_');

//         const output = `${first}${second.replace(
//             second[0],
//             second[0].toUpperCase()
//         )}`;
//         console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//     }
// });


// THIS TEST DATA(pasted to textarea)
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT(5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅