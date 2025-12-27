// Checkout Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (!isUserLoggedIn()) {
        alert('Please login to proceed to checkout!');
        window.location.href = '../pages/login.html';
        return;
    }

    // Load cart items and calculate totals
    loadCartForCheckout();
    
    // Load saved address if exists
    loadSavedAddress();
    
    // Initialize payment methods
    initializePaymentMethods();
    
    // Form validation and submission
    setupFormValidation();
});

// Function to check if user is logged in (from auth.js)
function isUserLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    return !!(user && user.isLoggedIn && isLoggedIn === 'true');
}

// Load cart items for checkout
function loadCartForCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderItemsContainer = document.getElementById('orderItems');
    const cartSummary = document.getElementById('cartSummary');
    
    if (cart.length < 0) {
        // Redirect to cart if empty
        alert('Your cart is empty!');
        window.location.href = '/pages/cart.html';
        return;
    }
    
    let subtotal = 0;
    let itemsHTML = '';
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        itemsHTML += `
            <div class="order-item">
                <div class="order-item-info">
                    <span class="order-item-name">${item.name}</span>
                    <span class="order-item-category">${item.category}</span>
                </div>
                <div class="order-item-details">
                    <span class="order-item-quantity">Qty: ${item.quantity}</span>
                    <span class="order-item-price">₹${itemTotal.toFixed(2)}</span>
                </div>
            </div>
        `;
    });
    
    orderItemsContainer.innerHTML = itemsHTML;
    
    // Calculate totals
    const deliveryCharge = 100;
    const tax = subtotal * 0.01; // 1% tax
    const total = subtotal + deliveryCharge + tax;
    
    // Update summary
    document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('delivery').textContent = `₹${deliveryCharge.toFixed(2)}`;
    document.getElementById('tax').textContent = `₹${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `₹${total.toFixed(0)}`;
    
    // Save order total for later use
    sessionStorage.setItem('orderTotal', total.toFixed(2));
}

// Load saved address from localStorage
function loadSavedAddress() {
    const savedAddress = JSON.parse(localStorage.getItem('userAddress')) || {};
    
    if (savedAddress) {
        document.getElementById('fullName').value = savedAddress.fullName || '';
        document.getElementById('email').value = savedAddress.email || '';
        document.getElementById('phone').value = savedAddress.phone || '';
        document.getElementById('address').value = savedAddress.address || '';
        document.getElementById('city').value = savedAddress.city || '';
        document.getElementById('state').value = savedAddress.state || '';
        document.getElementById('zipCode').value = savedAddress.zipCode || '';
        document.getElementById('country').value = savedAddress.country || '';
    }
}

// Initialize payment methods
function initializePaymentMethods() {
    const paymentMethods = document.querySelectorAll('.payment-method');
    
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            // Remove active class from all methods
            paymentMethods.forEach(m => m.classList.remove('active'));
            
            // Add active class to selected method
            this.classList.add('active');
            
            // Show/hide card details based on selection
            const cardDetails = document.getElementById('cardDetails');
            if (this.dataset.method === 'credit-card') {
                cardDetails.style.display = 'block';
            } else {
                cardDetails.style.display = 'none';
            }
            
            // Save selected payment method
            sessionStorage.setItem('selectedPaymentMethod', this.dataset.method);
        });
    });
    
    // Initialize with first payment method selected
    if (paymentMethods.length > 0) {
        paymentMethods[0].click();
    }
}

// Setup form validation
function setupFormValidation() {
    const checkoutForm = document.getElementById('checkoutForm');
    
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            processOrder();
        }
    });
    
    // Real-time validation for card number
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || '';
            e.target.value = formattedValue;
        });
    }
    
    // Real-time validation for expiry date
    const expiryDateInput = document.getElementById('expiryDate');
    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\//g, '');
            if (value.length >= 2) {
                e.target.value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
        });
    }
}

// Validate form
function validateForm() {
    // Address validation
    const requiredFields = [
        'fullName', 'email', 'phone', 'address', 
        'city', 'state', 'zipCode', 'country'
    ];
    
    for (const fieldId of requiredFields) {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            alert(`Please fill in ${field.placeholder || fieldId}`);
            field.focus();
            return false;
        }
    }
    
    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    // Phone validation
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
        alert('Please enter a valid phone number');
        return false;
    }
    
    // Check payment method
    const selectedMethod = sessionStorage.getItem('selectedPaymentMethod');
    if (!selectedMethod) {
        alert('Please select a payment method');
        return false;
    }
    
    // Validate credit card if selected
    if (selectedMethod === 'credit-card') {
        const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;
        const cardName = document.getElementById('cardName').value;
        
        if (!cardNumber || cardNumber.length < 16) {
            alert('Please enter a valid card number');
            return false;
        }
        
        if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
            alert('Please enter a valid expiry date (MM/YY)');
            return false;
        }
        
        if (!cvv || cvv.length < 3) {
            alert('Please enter a valid CVV');
            return false;
        }
        
        if (!cardName.trim()) {
            alert('Please enter the name on card');
            return false;
        }
    }
    
    return true;
}

// Process order
function processOrder() {
    // Show loading
    const submitBtn = document.querySelector('.btn-place-order');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    // Collect order data
    const orderData = {
        orderId: 'ORD' + Date.now() + Math.floor(Math.random() * 1000),
        customer: {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: {
                street: document.getElementById('address').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                zipCode: document.getElementById('zipCode').value,
                country: document.getElementById('country').value
            }
        },
        items: JSON.parse(localStorage.getItem('cart')) || [],
        payment: {
            method: sessionStorage.getItem('selectedPaymentMethod'),
            total: sessionStorage.getItem('orderTotal')
        },
        status: 'processing',
        date: new Date().toISOString()
    };
    
    // Save address for future use
    const addressData = {
        fullName: orderData.customer.name,
        email: orderData.customer.email,
        phone: orderData.customer.phone,
        address: orderData.customer.address.street,
        city: orderData.customer.address.city,
        state: orderData.customer.address.state,
        zipCode: orderData.customer.address.zipCode,
        country: orderData.customer.address.country
    };
    
    localStorage.setItem('userAddress', JSON.stringify(addressData));
    
    // Simulate API call delay
    setTimeout(() => {
        // Save order to localStorage (in real app, send to backend)
        const orders = JSON.parse(localStorage.getItem('userOrders')) || [];
        orders.push(orderData);
        localStorage.setItem('userOrders', JSON.stringify(orders));
        
        // Update user's order history
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            user.orders = user.orders || [];
            user.orders.push(orderData.orderId);
            localStorage.setItem('user', JSON.stringify(user));
        }
        
        // Clear cart
        localStorage.removeItem('cart');
        
        // Redirect to success page
        window.location.href = 'order-success.html?orderId=' + orderData.orderId;
    }, 2000);
}

// Save address for later checkbox
document.addEventListener('DOMContentLoaded', function() {
    const saveAddressCheckbox = document.getElementById('saveAddress');
    if (saveAddressCheckbox) {
        saveAddressCheckbox.checked = true; // Default checked
    }
});