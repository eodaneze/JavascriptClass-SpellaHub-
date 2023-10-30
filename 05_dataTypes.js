/*  
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object
*/

/* 
  The object data type
The object data type can contain:
1. An object
2. An array
3. A date
*/

// numbers
var length = 16;
var weight = 7.5;
console.log(weight);
console.log(length);
console.log(typeof(weight));

// strings
let color = "Yellow";
let lastName = "Johnson";
console.log(color);

// Booleans
let x = true;
let y = false;
console.log(typeof(x));

// object
const person = {
    firstname: "John",
    lastname: "Doe"
};
console.log(person);
console.log(typeof(person));

// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
console.log(cars[0]);
console.log(Array.isArray(cars));

const fruits = Array('mango', 'pear', 'apple');
console.log(fruits);

// Date object:
const date = new Date();
console.log(date);