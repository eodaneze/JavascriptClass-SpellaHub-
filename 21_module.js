/*  
 JavaScript modules allow you to break up your code into separate files.

This makes it easier to maintain a code-base.

Modules are imported from external files with the import statement.

Modules also rely on type="module" in the <script> tag.
*/

// inline individual export
export const cars = ['ford', 'benz', 'bmw'];

// all at the bottom export
const name = "Daniel";
const age = 24;
export { name, age };

const message = () => {
     const name = 'Benson';
     const age = 34;
     return name + ' is ' + age+ ' years old '
}
export default message;

export const getName = (name, age) => {
     return `your name is ${name} and you are ${age} years old` 
}

