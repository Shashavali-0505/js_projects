// Cart Management Functions
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartItemsContainer');
    const cartSummary = document.getElementById('cartSummary');
    const emptyCart = document.getElementById('emptyCart');
    
    if (cart.length === 0) {
        cartSummary.style.display = 'none';
        emptyCart.style.display = 'block';
        cartContainer.innerHTML = '';
        return;
    }
    
    emptyCart.style.display = 'none';
    cartSummary.style.display = 'block';
    
    cartContainer.innerHTML = `
        <div class="cart-header">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
            <div></div>
        </div>
    `;
    
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <img src="../${item.image}" alt="${item.name}" class="cart-item-image">
                <div>
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-category">${item.category}</div>
                </div>
            </div>
            <div>₹${item.price.toFixed(2)}</div>
            <div>
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, ${item.quantity - 1})">-</button>
                    <input type="text" class="quantity-input" value="${item.quantity}" 
                           onchange="updateQuantity(${index}, this.value)">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <div>₹${itemTotal.toFixed(2)}</div>
            <div>
                <button class="remove-btn" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        cartContainer.appendChild(cartItem);
    });
    
    const delivery = 100;
    const total = subtotal + delivery;
    
    document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('delivery').textContent = `₹${delivery.toFixed(2)}`;
    document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
    
    updateCartCount();
}

function updateQuantity(index, newQuantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (newQuantity < 1) {
        cart.splice(index, 1);
    } else {
        cart[index].quantity = parseInt(newQuantity);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    
    cartCountElements.forEach(element => {
        element.textContent = count;
    });
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded',()=>{
    loadCart();
});