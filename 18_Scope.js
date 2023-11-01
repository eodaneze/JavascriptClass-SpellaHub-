// Scope determines the accessibility (visibility) of variables.
/*  
  Javascript has 3 types of scope

  Block scope
  Function scope
  Global scope

*/
// block scope
{
    let x = 2;
}
//x cannot be accessed here

{
    var x = 2;
}
// x can be accessed here

// local scope... Variables declared within a JavaScript function, become LOCAL to the function.

//code here cannot use carName
function myFunction() {
    let carName = "Volvo";
    console.log(carName);
    // code here CAN use carName
  }
//code here cannot use carName
myFunction()
console.log(carName);//carName is not defined
