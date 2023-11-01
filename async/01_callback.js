/* 
 A callback is a function passed as an argument to another function
 This technique allows a function to call another function
 A callback function can run after another function has finished
*/
const firstFun = () => {
     console.log('this is the first function');
}
const secondFun = () => {
    console.log('this is the second function');
}
secondFun()
firstFun()

// callback functions are functions that are passed as an argument to another function


//without callback
function myDisplayer1(some){
     console.log(some);
};


function myCalculator1(a, b){
    let sum = a + b;
    return sum;
}
let result = myCalculator1(4, 6);
myDisplayer1(result)

// the problem with the above code is that u have to call two functions to dispay the result..

// using a callback to reimplement the logic above
function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);