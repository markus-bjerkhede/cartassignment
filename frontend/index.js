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
    <button class="add" onclick="addToCart()"> </button>
    </div>
    `
  }).join("");
  console.log(html)
  document.querySelector('#products').insertAdjacentHTML("afterbegin", html);
})
  .catch(error => {console.log(error);
});
}


function addToCart() {
  const body = {product: id}
  console.log(product)
  fetch("http://localhost:3000/api/cart/add", {
    "method": "POST",
    "body": JSON.stringify(body) 
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
}