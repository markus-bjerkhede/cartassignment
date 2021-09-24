// fetch('localhost:3000/api/cart')
//   .then(response => response.json())
//   .then(data => console.log(data));
// console.log(response)

var products = {
  method: 'GET',
};

fetch("http://localhost:3000/api/product", products)
  .then(products => products.json())
  .then(products => console.log(products, products.name))
  .catch(error => console.log('error', error));

// function renderProducts(json) {
//   const main = document.querySelector('main')
//   json.forEach(products => {
//     const h2 = document.createElement('h2')
//     h2.innerHTML = `<h2>${book.name}</h2>`
//     main.appendChild(h2)
//   })
// }

// var requestOptions = {
//   method: 'GET',
// };

// fetch("http://localhost:3000/api/product", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

// var requestOptions = {
//   method: 'GET',
// };

// fetch("http://localhost:3000/api/product", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

// var requestOptions = {
//   method: 'GET',
// };

// fetch("http://localhost:3000/api/product", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));