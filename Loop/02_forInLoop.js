// The JavaScript for in statement loops through the properties of an Object:
const person = {fname:"John", lname:"Doe", age:25};

for(let x in person){
    console.log(person[x]);
}
/* 
 The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]

*/

// the for in loop can also be used to access an array but it is not the best option

let fruits = ['orange', 'banana', 'apple', 'pear'];
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}
for(let x in fruits){
    console.log(fruits[x]);
}

