import message, { age, cars, getName, name } from "./21_module";
console.log(name);
// use a braces to import a named export (inline export), but for an export default, just use the name of the element or function
console.log(age);

console.log(cars);
console.log(message());
console.log(getName('emmanuel' , 23));