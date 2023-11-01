console.log(Math.PI);
const num = 23.567
console.log(Math.round(num)) //	Returns x rounded to its nearest integer;
console.log(Math.ceil(num)) //	Returns x rounded up to its nearest integer;
console.log(Math.floor(num)) //Returns x rounded down to its nearest integer;
console.log(Math.trunc(num)) //	Returns the integer part of x;
console.log(Math.pow(2,3));
console.log(Math.sqrt(64));
console.log(Math.abs(-4));
console.log(Math.min(2,3,4,8,9));
console.log(Math.max(2,3,4,8,9));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10)) // generates a random interger from 0 - 10;

// writing a function that will generate a random number anytime the function is called
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
console.log(getRndInteger(10, 20));