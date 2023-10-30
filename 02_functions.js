/*  

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).
*/

function sayHi(){
    console.log("Hi");
}

sayHi();
sayHi();

// function with parameter and agurment
function addNum(a, b){
    console.log(a + b);
}
addNum(3, 4);

// return statement
// calculate the product of two numbers and return the result

function calculateProduct(a, b){
    return a * b;
}

console.log(calculateProduct(3, 4));