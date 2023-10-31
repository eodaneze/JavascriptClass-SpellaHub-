/* 
Array toString()
Array pop()
Array push()
Array shift()
Array unshift()
Array join()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()
*/
// toString = converts an array to a string
let cars = ['ford', 'jeep'];

console.log(cars.toString());

// join: method also joins all array elements into a string., it behaves like the toString method but you can indicate a seperator to it

console.log(cars.join('* '));

// pop: removes the last element of an array

console.log(cars.pop());

// push: adds an element to the end of an array

console.log(cars.push('audi'));
console.log(cars);
// shif:  method removes the first array element and "shifts" all other elements to a lower index.

console.log(cars.shift());
console.log(cars);

// unshift: adds an element to the beginning of an array

console.log(cars.unshift('bmw'));
console.log(cars);

// concat: creates a new array by merging (concatenating) existing arrays
const boysName = ['vincent', 'Victor', 'Obinna'];
const girlsName = ['Joy', 'Favour', 'Theola'];

console.log(boysName.concat(girlsName));
console.log(boysName.concat('Network'));

// flat: creates a new array by flattening (concatenating) existing arrays
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
// the flat method is used to convert a two dimensional array to one dimensional

const myArray = [[1,2], [3,4], [5,6]];
// console.log(myArray);
// console.log(myArray[0]);

const newArr = myArray.flat();
console.log(newArr);

// splice: can be used to add new items to an array
console.log(boysName);
boysName.splice(1,0,'kilvin', 'solomon');
console.log(boysName);
console.log(boysName.splice(1,2, 'John', 'Ikechukwu'));
// the first paramater is the position where the new element will be added and the second is the number of element that will be removed
//the splice method returns the element that is deleted

{
    // the splice method is also used to delete element in an array without leaving any hole
    let cars = ['golf', 'volvo','ford'];
    console.log(cars);
    console.log(cars.splice(0,1));
    console.log(cars);
}


// Slice method.. this method slices out a piece of an array into a new array.
{
    let fruits = ['banana', 'apple', 'pear', 'orange'];
    console.log(fruits);
    console.log(fruits.slice(1)); // returns apple, pear, orange

    // NOTE: the slice () method creates a new array. it deos not remove any element from the source array
    console.log(fruits);
    console.log(fruits.slice(3)); // returns orange
    console.log(fruits.slice(1,3)); //returns apple and pear
}