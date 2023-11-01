// loops can execute a block of code a number of times
// Loops are handy, if you want to run the same code over and over again, each time with a different value.


let cars = ['ford', 'bmw', 'jeep', 'pathfounder'];
console.log(cars);
console.log(cars[0]) + '<br>';
console.log(cars[1]) + '<br>';
console.log(cars[2]) + '<br>';
console.log(cars[3]) + '<br>';
// this is the step to follow if u want to access an element in an array on after the other without a loop, that means you will be doing this for all the element in the array


// using a for loop
let len = cars.length;
console.log(len);
for(let i = 0; i<len; i++){
     console.log(cars[i]) + '<br>';
}

// for loop: loops through a block of code a number of times
// this will get a number from 0 - 5
for(let i = 0; i<=5; i++){
   console.log(`The number is ${i}`) + '<br>';
}
let fruits = ['orange', 'banana', 'apple', 'pear'];

// you can declear as many variables as you want inside of for loop and then seperate them with a comma
for(let i = 0, len = fruits.length; i<len; i++){
    console.log(fruits[i]) + '<br>';
}

// you can omit the first expression(initialization) when your values are set before the loop
let i = 0;
let lens = fruits.length;
for(; i<len; i++){
    console.log(fruits[i]);
}
// scopping

let x = 10;
 for(let x = 0; x<10; x++){
    console.log(x);
 }
 console.log(x);// print 10

 var y = 10;
 for(var y = 0; y<9; y++){
    console.log(y);
 }
 console.log(y); //print 9