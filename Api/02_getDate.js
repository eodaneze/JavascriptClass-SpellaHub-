// cosuming a json placeholder api
const url = "https://jsonplaceholder.typicode.com/todos";
const outputElement = document.getElementById('output');
// make Get request
fetch(url)
  .then(response => response.json())
  .then(json => {
    //  console.log(json);
  })
  .catch(err => console.log(err.message));

//   going further
fetch(url)
  .then(response => {
     if(!response.ok){
         throw new Error('Network response was not ok');
     }
     return response.json();
  })
  .then(data => {
    //  console.log(data);
    //  showing result in html
    // outputElement.innerText = JSON.stringify(data, null, 2)
  })
  .catch(error => {
     console.error('Error:', error)
  })

//   error handling
// Error handling is an essential part of making API calls in JavaScript. API requests can fail for various reasons, such as network issues, server problems, or incorrect URLs.

fetch(url)
  .then(response => {
     if(!response.ok){
        if(response.status === 404){
           throw new Error('Data not found');
        }else if(response.status === 500){
          throw new Error('Server error')
        }else{
            throw new Error('Network response was ok')
        }
     }
     return response.json();
  })
  .then(data => {
     console.log(data);
    //  showing result in html
    outputElement.innerText = JSON.stringify(data, null, 2)
  })
  .catch(error => {
     console.error('Error:', error)
  })


//   making a post request

fetch(url, {
     method: 'POST',
     body: JSON.stringify({

         userId: 1,
         title: "Write node application",
         completed: false
     }),
     headers: {
        'Content-type': 'application/json; charset=UTF-8'
     }
})
.then((response) => {
     return response.json();
})
.then(data => {
     console.log(data);
    //  outputElement.textContent = JSON.stringify(data, null, 2)
});

// update request


fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'PUT',
    body: JSON.stringify({
        userId: 1,
        id: 1,
        title: "How to deploy a node api",
        completed: false
    }),
    headers: {
       'Content-type': 'application/json; charset=UTF-8'
    }
})
.then((response) => {
    return response.json();
})
.then(data => {
    console.log(data);
   //  outputElement.textContent = JSON.stringify(data, null, 2)
});


// using a patch for update
fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'PATCH',
    body: JSON.stringify({
        title: "How to deploy a node api",
    }),
    headers: {
       'Content-type': 'application/json; charset=UTF-8'
    }
})
.then((response) => {
    return response.json();
})
.then(data => {
    console.log(data);
   //  outputElement.textContent = JSON.stringify(data, null, 2)
});

// making a delete request;
fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'DELETE',
    headers: {
       'Content-type': 'application/json; charset=UTF-8'
    }
})
.then((response) => {
    return response.json();
})
.then(data => {
    console.log(data);
   //  outputElement.textContent = JSON.stringify(data, null, 2)
});




