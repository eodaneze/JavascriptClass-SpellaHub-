/*  
  A JavaScript Promise is an object that represents a value that may not be available yet but will be at some point in the future. It is a way to handle asynchronous operations in a more structured and manageable manner. Promises are often used for tasks like making network requests, reading files, or any operation that takes some time to complete.
*/

/* 
  promise has three states

  1. Pending: The initial state when the Promise is created, and the asynchronous operation has not completed yet.
  2. Fulfilled: The state when the Promise is fulfilled. The state when the asynchronous operation successfully completes, and the Promise has a resolved value.
  3. Rejected: The state when the Promise is rejected.The state when the asynchronous operation fails, and the Promise has a reason for failure
*/

const myPromise = new Promise((resolve, reject) => {
     setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 8); //generates random number from 0 - 8
        if(randomNumber > 0.5){
            resolve(`success! random number: ${randomNumber}`)
        }else{
            reject(`failed! random number: ${randomNumber}`)
        }
     }, 2000)
})
// using the promise
myPromise.then((result) => {
     console.log(result);
}).catch(err => console.log(err))


const allTodo = new Promise((resolve, reject) => {
     const todo = [
        {
            id: 1,
            title: 'Read Book',
            duration: '5hours',
            completed: true
        },
        {
            id: 2,
            title: 'Play game',
            duration: '2hours',
            completed: true
        },

     ]
     setTimeout(() => {
        if(todo[0].completed == true){
          resolve(`you have successfully completed your todo: ${todo[0].title}`)
        }else if(todo[1].completed == true){
            resolve(`you have successfully completed your todo: ${todo[1].title}`)
        }else{
             reject(`failed to complete todo`)
        }
     }, 2000)
})

allTodo.then((result) => {
     console.log(result);
}).catch(err => console.log(err))