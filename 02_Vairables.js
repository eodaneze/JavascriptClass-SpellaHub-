// Variables are Containers for Storing Data
/*  
Js variables can be displayed in 4 ways:
Automatically
using var
using let
using const
*/

// automatic variables
x = 10;
y = 20;
z = x + y;
document.getElementById('demo').innerHTML = z
name = 'peter'
console.log(name);

// using var keyword
var x = 10;
console.log(x);
var age = 20;
console.log(age);
/*  

Note
The var keyword was used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

The var keyword should only be used in code written for older browsers.
*/

// using let

let num = 10;
console.log(x);
let age2 = 20;
console.log(age);

// using const
const name1 = "victor";
console.log(name1);

const price1 = 20;
const price2 = 10;
const total = price1 + price2;
console.log(total);

// js identifiers
/*  
Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as name

*/