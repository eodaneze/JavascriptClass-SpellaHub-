// Consider the following code in which we want to create a function which accepts an array as an argument. It filters out all the odd numbers from it and returns all the filtered numbers.


const arr = [1,2,3,4,5,6,7,8,9,10,11];
function filterOdd(arr){
     const filteredArr = [];
     const len =  arr.length
     for(let i = 0; i < len; i++){
         if(arr[i] % 2 != 0){
             filteredArr.push(arr[i]);
         }
     }
     return filteredArr;
}
console.log(filterOdd(arr));

// do the same to print even number

function filterEven(arr){
     const getEven = [];
     for(let i = 0; i < arr.length; i++){
          if(arr[i] % 2 == 0){
              getEven.push(arr[i]);
          }
     }
     return getEven;
}
console.log(filterEven(arr));
