let age = [20, 24, 14, 8, 3, 9, 10, 49];
console.log(age);

age.forEach(x => console.log(x));

age.forEach(function(x){
    console.log(x);
});
age.forEach((x) => {
     if(x > 16){
         console.log(x);
     }
});

let staffs = [
    {
        fname: 'John',
        lname: 'Doe',
        age: 25
    },
    {
        fname: 'Emmauel',
        lname: 'Vic',
        age: 30
    },
    {
        fname: 'Nelson',
        lname: 'Rex',
        age: 15
    },

]
staffs.forEach(staff => console.log(staff.fname));
staffs.forEach((staff) => {
      if(staff.age > 16){
          console.log(staff);
      }
})