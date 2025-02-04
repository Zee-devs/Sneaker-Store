
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product, price) {
    cart.push({ product, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product} added to cart!`);
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    if (sectionId === 'cart') {
        displayCart();
    }
}

function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <span>${item.product} - $${item.price.toFixed(2)}</span>
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById('total-amount').innerText = `Total: $${total.toFixed(2)}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

updateCartCount();
