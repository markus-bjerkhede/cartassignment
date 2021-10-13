let products;
window.addEventListener('load', async () => {
  products = await getProducts();
  renderProducts();
})

async function getProducts() {
  const response = await fetch("http://localhost:3000/api/product")
  return response.json();
}

async function renderProducts() {
  products.forEach(product => {
    const html =
      `
      <div class="product">
        <p> Name: ${product.name}</p>
        <p> Price: ${product.price} kr</p>
        <img src="${product.imgUrl}" alt="image">
        <button class="add" onclick="addToCart(this)">Add to cart</button>
      </div>
      `;
    return document.querySelector('#products').insertAdjacentHTML("afterbegin", html);
  });
};
async function addToCart(element) {
  var index = Array.prototype.slice.call(element.parentElement.parentElement.children).indexOf(element.parentElement);

  const product = products[index];
  const data = { productId: product.id };
  await fetch("http://localhost:3000/api/cart/add", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
}