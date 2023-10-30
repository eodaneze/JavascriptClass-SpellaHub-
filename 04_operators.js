/*  
Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Ternary Operators
Type Operators

*/

// assignment operator = +=, -=, /=, %=

var x = 10;
console.log(x);

x += 2;
// x = x + 2
console.log(x);

var text = 'Daniel ';
text += "ezeali";
console.log(text);
// arithmetic operators
var x = 10;
var y = 20;
console.log(x + y);
console.log(y - x);
console.log(y * x);
console.log(y / x);
console.log(y % x);
console.log(y ** x);

// comparison operator
// ==, ===, !=, !==, >, <, >=, <=, ?

var text1 = "A";
var text2 = "B";
var result = text1 < text2;
console.log(result); //returns true;

var num = 20;
var num2 = "20";
console.log(num == num2) //returns true;
console.log(num === num2) //returns false;

// string operators
var firstname = 'daniel';
var lastname = 'victor';
console.log(lastname + " " +firstname);

// logical operators
/* 
  && = logical and
  || = logical or
  ! = logical not
*/
var x = 10;
var y = 1;

console.log(x > 20 || y > 0);