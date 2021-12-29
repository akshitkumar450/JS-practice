/////////////////////////////////////////////////
// arrays are object and they get access to built in methods

// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// it does not change the array
// slice method return new array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2)); //last 2
// console.log(arr.slice(-1)); //last 1
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); //shallow copy
// console.log([...arr]); //shallow copy

// SPLICE (removing elements from array)
// it changes the given array
// console.log(arr.splice(2));
// first is index and second is no of elements to be deleted
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// REVERSE (changes the array)
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT (does not change the array)
// const letters = arr.concat(arr2);
// console.log(arr);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN (join the elements of array by a separator)
// console.log(letters.join(' * '));

///////////////////////////////////////////
// The new at Method
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]); //returns a new array and then we get the value of that index
// console.log(arr.at(-1));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

///////////////////////////////////////
// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.entires()
// for (const mov of movements.entries()) {
//     console.log(mov)
// }
Array[0, 200]
Array[1, 450]
Array[2, -400]
Array[3, 3000]
Array[4, -650]
Array[5, -130]
Array[6, 70]
Array[7, 1300]

// for (const movement of movements) {
// destructuring from movements.entires()
// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
// }

// console.log('---- FOREACH ----');
// movements.forEach(function (mov, i, arr) {
//     if (mov > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${mov}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//     }
// });
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...