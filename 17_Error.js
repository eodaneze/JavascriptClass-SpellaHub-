/*  
 The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error.
*/

try {
    main("Hello world")
} catch (error) {
    console.log(error.message);
}

// Throw ststement allows for the creation of custom error
const myFunction = () => {
     const message = document.getElementById('p01');
     message.innerHTML = "";
     let x = document.getElementById('demo').value;

     try {
        if(x.trim() == "") throw "Empty";
        if(isNaN(x)) throw "Not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
     } catch (error) {
        message.innerHTML = `input is ${error}`
     }
}