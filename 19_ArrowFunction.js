// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:


function sumNum(a,b){
     return a + b;
}
console.log(sumNum(2,4))
const addNum = (a,b) => a + b;
console.log(addNum(2,4));

const hello = () => "Hello world";
console.log(hello());