/*  
Functions running in parallel with other functions are called asynchronous
A good example is JavaScript setTimeout()
Asynchronous function does not wait for another function to excute. 
*/

const sayName = (name) => {
      setTimeout(() => {
         console.log(`this function will say ${name} after two seconds`)
      }, 5000)
}

const sayAge = (age) => {
    setTimeout(() => {
            console.log(`this function will say ${age} after two seconds`)
        }, 2000)
}

sayName('John');

sayAge(25);