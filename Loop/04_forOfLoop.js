/*  
The JavaScript for of statement loops through the values of an iterable object.
It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
*/
const cars = ["BMW", "Volvo", "Mini"];
for(let x of cars){
  console.log(x);
}

// looping over a string
let language = "JavaScript";

// console.log(typeof(language));
// const convert = language.split('');
// console.log(convert instanceof Array);
// console.log(convert);
// convert.forEach((y) => {
//      console.log(y);
// })
for(let x of language){
    console.log(x);
}