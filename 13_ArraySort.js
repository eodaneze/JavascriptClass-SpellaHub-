const fruits = ['banana', 'mango', 'apple'];
console.log(fruits.sort());

// reverse sort
console.log(fruits.reverse());

// numeric sort
/*  
 By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

*/

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b){
     return a-b;
})
console.log(points);

// using the same method to sort an array in descending order;
points.sort((a,b) => {
     return b-a;
})
const point1 = [40, 100, 1, 5, 25, 10];
point1.sort((a, b) => a-b);
console.log(point1);
// getting the highest and the lowest number from an array
const high = point1[point1.length-1];
console.log(high);

// getting the lowest number from the array
console.log(point1[0]);


// sorting an object
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
 cars.sort((a,b) => {
     return a.year - b.year;
 })
 console.log(cars);