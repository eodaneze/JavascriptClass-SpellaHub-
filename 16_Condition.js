/* 
Conditional statements are used to perform different actions based on different conditions.
if, else, else if, switch

*/

// if

let hour = 18;
if(hour <= 18) console.log('Good day');
if(hour == 18){
    console.log('Good day');
}

// Use the else statement to specify a block of code to be executed if the condition is false.
if(hour > 18){
    greeting = 'Good day'
}else{
    greeting = 'Good night'
}
console.log(greeting);

// Use the else if statement to specify a new condition if the first condition is false.

if(hour > 18){
    greeting = 'Good day'
}else if(hour == 18){
    greeting = 'Good afternoon'
}else{
    greeting = 'Good night'
}
console.log(greeting);

// The switch statement is used to perform different actions based on different conditions.

let color = 'red'
switch (color) {
    case 'green':
        color = 'The color is green';
        break;

    default:
        color = 'none of the above';
        break;
}
console.log(color);

// ternary operator
let age = 18;
age == 18 ? res = 'You can vote' : res = 'you cannot vote';
console.log(res);