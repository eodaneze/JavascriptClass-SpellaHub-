// differnce between var, let and const.
// scoping

var name = "Benson";
console.log(name);
{
    var age = 20;
    console.log(name);
}
console.log(age);



{
    let name1 = 'daniel';
}
let name1 = "Kelvin"
console.log(name1);

{
    const name2 = 'daniel';
}
console.log(name2);