
window.addEventListener('load', async () => {
    cart = await getCartItems();
    renderCart();
    cartEmpty();

    console.log(cart)
})

async function getCartItems() {
    const response = await fetch("http://localhost:3000/api/cart/")
    return response.json();
}

async function renderCart() {
    cart.forEach(product => {
        const html =
            `
      <div class="product">
        <p> Name: ${product.name}</p>
        <p> Price: ${product.price} kr</p>
        <img src="${product.imgUrl}" alt="image">
        <button class="add" onclick="removeFromCart(this)">Remove from cart</button>
      </div>
      `;
        return document.querySelector('#cartItems').insertAdjacentHTML("afterbegin", html);
    });
};
async function removeFromCart(element) {
    console.log(element)
    var index = Array.prototype.slice.call(element.parentElement.parentElement.children).indexOf(element.parentElement);

    const product = cart[index];
    console.log(product)
    const data = { productId: product.id };
    await fetch("http://localhost:3000/api/cart/remove", {
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
};
function cartEmpty() {
    if (cart.length === 0) {
        console.log(cart)
        const empty =
            `
            <p class="empty">Your cart is empty</p>
      `;
        return document.querySelector('#cartItems').insertAdjacentHTML("afterbegin", empty);
    }
}