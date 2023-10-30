// JavaScript strings are for storing and manipulating text. it is a zero or more characters written inside quotes

const text = "Hello from js";
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

const name = "my name is Daniel, but my friend call me dancode's";
console.log(name);
let answer2 = "He is called \"Johnny\"";
console.log(answer2);

// string length
let text2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(text2.length);

let x = "Daniel";
console.log(typeof(x));

// the new string is used to convert a string to an object
let y = new String('Daniel');
console.log(typeof(y));

let a = "Daniel";
let b = new String('Daniel');
console.log(a == b); //true
console.log(a === b); //false