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

//INHERITANCE
// A class created with a class inheritance inherits all the methods from another class:
class Car3{
  constructor(brand){
    this.carname = brand;
  }
  present(){
    return `I have a ${this.carname}`;
  }
}
class Model extends Car3{
   constructor(brand, mod){
      super(brand);
      this.model = mod;
   }
    show(){
      return `${this.present()}, it is a ${this.model}`;
   }
}
let myCar = new Model('Ford', 'Mustang');
console.log(myCar.show());

/*  
 The super() method refers to the parent class.
 By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

*/