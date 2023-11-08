const products = [
    {
        id:1,
        name: "Mens Sneakers",
        category: 'shoe',
        image: 'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/fashion_300x240.png',
        description: "This is nike mens sneakers with lice"
    },
    {
        id:2,
        name: "Mens Smart watch",
        category: 'shoe',
        image: 'https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/watches_300x240.png',
        description: "This is mens smart watch"
    },
    {
        id:3,
        name: "Mens white sneakers",
        category: 'shoe',
        image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/00/295531/1.jpg?1832',
        description: "This is mens smart watch"
    },
]

// const productContainer = document.getElementById('product-container');

// // Function to display products in HTML
// function displayProducts(products) {
//     products.forEach(product => {
//         const productElement = document.createElement('div');
//         productElement.classList.add('product');

//         const imageElement = document.createElement('img');
//         imageElement.src = product.image;

//         const nameElement = document.createElement('p');
//         nameElement.textContent = product.name;

//         productElement.appendChild(imageElement);
//         productElement.appendChild(nameElement);

//         productContainer.appendChild(productElement);
//     });
// }

// // Call the function to display the products
// displayProducts(products);

const productContainer = document.getElementById('product-container');
const productDetailsContainer = document.getElementById('product-details');

function displayProductDetails(product) {
    productDetailsContainer.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
    `;
}

function displayProducts(products) {
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const imageElement = document.createElement('img');
        imageElement.src = product.image;

        const nameElement = document.createElement('p');
        nameElement.textContent = product.name;

        productElement.appendChild(imageElement);
        productElement.appendChild(nameElement);

        productElement.addEventListener('click', () => {
            
            displayProductDetails(product);
        });

        productContainer.appendChild(productElement);
    });
}

displayProducts(products);