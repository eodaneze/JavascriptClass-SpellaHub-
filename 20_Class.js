// js classes are template for js object.
// the keyword class is used to create a class
// always use a method named constructor()

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

const car1 = new Car('ford', 2023);
console.log(car1)

// js class is not an object.. when u have a class, you can now use it to create an object


// CLASS METHOD.
// class methods are created with the same syntax as object method

class Cars{
    constructor(name, year){
         this.name = name;
         this.year = year;
    }
  age(){
    // age is a method
     const date = new Date();
     return date.getFullYear() - this.year;
  }
}
const car2 = new Cars('ford', 2020);
console.log(`My car is ${car2.age()} years old`)