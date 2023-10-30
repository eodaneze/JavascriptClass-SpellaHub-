// in real life, a car is an object.
// a car has properties like weight, name, color, model e.t.c. it has a method like start, stop

const car = {
    name:"jeep",
    model:"2023",
    color: 'red'
};
console.log(car.name);

const person = {
    name: "John",
    age: 30,
    isMarried: true,
    eyeColor: 'red'
}
console.log(person.name);
console.log(person['age']);

// object methods
// objects can also have a method, method is the action that can be performed on objects

const person1 = {
    firstname: "John",
    lastname: "Deo",
    age: 30,
    isMarried: true,
    eyeColor: 'blue',
    fullname: function(){
         return this.firstname + " " + this.lastname;
    }

}
console.log(person1.fullname());