// A “higher-order function” is a function that accepts functions as parameters and/or returns a function

// the reducer, map, filter

// The .reduce() method iterates through an array and returns a single value.

 const arrayOfNumbers = [1,2,6,4,5];

 const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
     return accumulator + currentValue;
 })
 console.log(sum);

//  foreach method is used to execute a callback function in each element in an array order

const numbers = [28, 77, 45, 99, 27];
numbers.forEach(number => {
     console.log(number);
})

// filter method gets element into a new array

const randomNumber = [4, 11, 42, 14, 39];
const filteredArray = randomNumber.filter(n => {
     return n > 8
})
console.log(filteredArray);


// map method

const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
// add string after each final participant
const announcements = finalParticipants.map(member => {
    return member + ' joined the contest.';
  })

  console.log(announcements);