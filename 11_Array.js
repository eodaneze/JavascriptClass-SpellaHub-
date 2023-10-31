const cars = ['volvo', 'ford'];
console.log(cars);

// creating an array and providing the element later
const fruits = [];
fruits[0] = 'banana';
fruits[1] = 'Apple';
console.log(fruits);

// using the new kayword

const colors = new Array('red', 'blue');
console.log(colors);

// changing array element
colors[0] = 'black';
console.log(colors);

// converting an array to a string;
const toString = colors.toString();
console.log(toString);

// getting the length of an array
console.log(colors.length);

// getting the last element of an array
{
    let fruits = ['pear', 'orange', 'mango'];
    console.log(fruits[fruits.length - 1]);
}

// looping through an array
{
    let fruits = ['pear', 'orange', 'mango'];
    for(let i = 0; i < fruits.length; i++){
         console.log(fruits[i]);
    }
}
// using foreach
{
    let fruits = ['pear', 'orange','mango'];
    fruits.forEach(function(fruit){
        console.log(fruit);
    });
}

// adding array element.. push addds to the last index
{
    let fruits = ['pear', 'orange','mango'];
    fruits.push('pineapple');
    console.log(fruits);
    console.log(Array.isArray(fruits));
    console.log(fruits instanceof Array);
}