// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.
/*  
  An html event can be something the browser does, or something a user does.

  Examples of some htmlm event
  An HTML web page has finished loading
  An HTML input field was changed
  An HTML button was clicked
*/

function sayHi(){
    console.log('HI');
}

const input = document.getElementById('name');
const submit = document.getElementById('submit');
const result = document.getElementById('result');

submit.addEventListener('click', function(){
     const userInputValue = input.value;

    //  display the result in the div with an id of result
    result.innerText = 'Hello'+ userInputValue;
})
console.log(input);