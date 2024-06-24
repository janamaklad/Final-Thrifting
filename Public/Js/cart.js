// cart.js

let cart = [];

function addToCart(title, price, brand, size) {
    const product = {
        title: title,
        price: price,
        brand: brand,
        size: size
    };
    cart.push(product);
    displayCart();
}

function displayCart() {
    let cartItemHTML = '';
    let totalPrice = 0;

    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your Cart Is Empty!";
        document.getElementById('total').innerText = 'EGP 0.00';
        return;
    }

    cart.forEach(item => {
        cartItemHTML += `
            <div class="cart-item">
                <p>${item.title}</p>
                <p>${item.price}</p>
                <p>${item.brand}</p>
                <p>${item.size}</p>
            </div>
        `;
        totalPrice += parseFloat(item.price); // Assuming price is a string, convert it to a numberr
    });

    document.getElementById('cartItem').innerHTML = cartItemHTML;
    document.getElementById('total').innerText = `EGP ${totalPrice.toFixed(2)}`;
}

