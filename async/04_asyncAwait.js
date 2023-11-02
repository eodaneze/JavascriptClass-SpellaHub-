async function fetchPosts(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
            throw new error(`failed to fetch data. Status: ${response.status}`)
        }
        const data = await response.json();
        // document.getElementById('demo').innerHTML = posts
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
// console.log(fetchPosts());

// creating a function to display the post
async function displayPost(){
     const posts = await fetchPosts();
     if(posts){
        const postList = document.createElement('ul');
        postList.style.display = 'grid';
        postList.style.gridTemplateColumns = '1fr 1fr 1fr';
        postList.style.gap='2rem';
         posts.forEach(post => {
            const listItem = document.createElement('li')
            listItem.style.backgroundColor = 'white';
            listItem.style.marginBottom = '20px';
            listItem.innerHTML = `
               <h3>${post.title}</h3>
               <p>${post.body}</p>
            `;
            postList.appendChild(listItem);
            //  console.log(`Title: ${post.title}\n Body: ${post.body}\n`);
         });
         document.body.appendChild(postList).style.backgroundColor = 'red'
     }
}
displayPost();