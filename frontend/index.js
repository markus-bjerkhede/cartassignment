let products;
let product;
window.addEventListener('load', async () => {
  products = await getProducts();
  renderProducts();
  console.log(product.name)

})

async function getProducts() {
  const response = await fetch("http://localhost:3000/api/product")
  return response.json();
}

async function renderProducts() {
  console.log(products)
  products.forEach(product => {
    const html =
      `
      <div class="product"> 
      <p> Name: ${product.name}</p>
      <p> Price: ${product.price} kr</p>
      <img> Image: ${product.imgUrl}</img>
      <button class="add" onclick="addToCart()">Add to cart</button>
      </div>
      `;
    return document.querySelector('#products').insertAdjacentHTML("afterbegin", html);
  });
};
function addToCart() {

  const productId = { product: product.id }
  const body = JSON.stringify(productId);
  fetch("http://localhost:3000/api/cart/add", {
    method: "POST",
    body: body
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
}