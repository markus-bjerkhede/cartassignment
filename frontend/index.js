window.addEventListener('load', async() => {
  getProducts();
})

function getProducts() {
fetch("http://localhost:3000/api/product")
  .then(response => {
    if (!response.ok) {
      throw Error('ERROR');
    }
      return response.json();
    })
  .then (products => { 
    console.log(products);
    const html = products.map(product => {
    return `
    <div class="product"> 
    <p> Name: ${product.name}</p>
    <p> Price: ${product.price}</p>
    <p> Image: ${product.imgUrl}</p>
    </div>
    `;
  }).join("");
  console.log(html)
  document.querySelector('#products').insertAdjacentHTML("afterbegin", html);
})
  .catch(error => {console.log(error);
});
}


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