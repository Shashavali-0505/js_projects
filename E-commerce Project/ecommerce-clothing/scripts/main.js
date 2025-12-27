// Sample Product Data
const products = {
    men: [
        {
            id: 1,
            name: "BROWN FLANNELS SHIRT",
            price: 849,
            image: "images/products/men-shirt-1.jpg",
            description: "Classic denim jacket for casual looks",
            category: "Men"
        },
        {
            id: 2,
            name: "The Essential Plaid Blue Flannel Shirt",
            price: 849,
            image: "images/products/men-shirt-2.jpg",
            description: "Classic denim jacket for casual looks",
            category: "Men"
        },
        {
            id: 3,
            name: "Coffee Brown Flannel Shirt.",
            price: 800,
            image: "images/products/men-shirt-3.jpg",
            description: "Classic denim jacket for casual looks",
            category: "Men"
        },
        {
            id: 4,
            name: "SAGE GREEN LINEN STRIPE SHIRTS",
            price: 849,
            image: "images/products/men-shirt-4.jpg",
            description: "Classic denim jacket for casual looks",
            category: "Men"
        },
        {
            id: 5,
            name: "BLUE OLD MONEY STRIPE SHIRT",
            price: 849,
            image: "images/products/men-shirt-5.jpg",
            description: "Classic denim jacket for casual looks",
            category: "Men"
        },
        {
            id: 6,
            name: "PURE LINEN WHITE MANDARIN COLLAR SHIRT",
            price: 849,
            image: "images/products/men-shirt-6.jpg",
            description: "Classic denim jacket for casual looks",
            category: "Men"
        },
        {
            id: 7,
            name: "BROWN PURE LINEN SHIRT",
            price: 849,
            image: "images/products/men-shirt-7.jpg",
            description: "Classic denim jacket for casual looks",
            category: "Men"
        },
        {
            id: 8,
            name: "MUTED CREAMY ORANGE PRINTED SHIRT",
            price: 849,
            image: "images/products/men-shirt-8.jpg",
            description: "Classic denim jacket for casual looks",
            category: "Men"
        },
        {
            id: 9,
            name: "Black Mom-fit jean",
            price: 999,
            image: "images/products/men-pant-1.jpg",
            description: "Classic denim jacket for casual looks",
            category: "Men"
        },
        {
            id: 10,
            name: "KOREAN BEIGE FORMAL BOOTCUT",
            price: 1050,
            image: "images/products/men-pant-2.jpg",
            description: "Classic denim jacket for casual looks",
            category: "Men"
        },
        {
            id: 11,
            name: "Distressed fade Straight fit jean",
            price: 1099,
            image: "images/products/men-pant-3.jpg",
            description: "Classic denim jacket for casual looks",
            category: "Men"
        },
        {
            id: 12,
            name: "Black Shade Wide leg baggy jean",
            price: 1099,
            image: "images/products/men-pant-4.jpg",
            description: "Classic denim jacket for casual looks",
            category: "Men"
        },
        {
            id: 13,
            name: "BROWN MOMFIT JEAN",
            price: 1050,
            image: "images/products/men-pant-5.jpg",
            description: "Classic denim jacket for casual looks",
            category: "Men"
        },
        {
            id: 14,
            name: "PURE WHITE LINEN PANT",
            price: 1200,
            image: "images/products/men-pant-6.jpg",
            description: "Classic denim jacket for casual looks",
            category: "Men"
        },
        {
            id: 15,
            name: "PURE BROWN LINEN PANT",
            price: 1150,
            image: "images/products/men-pant-7.jpg",
            description: "Classic denim jacket for casual looks",
            category: "Men"
        },
        {
            id: 16,
            name: "PREMIUM LINEN PANT",
            price: 1299,
            image: "images/products/men-pant-8.jpg",
            description: "Classic denim jacket for casual looks",
            category: "Men"
        },
        // Add more products...
    ],
    women: [
        {
            id: 101,
            name: "Sangria",
            price: 598,
            image: "images/products/women-saree-1.jpg",
            description: "Beautiful floral print summer dress",
            category: "Women"
        },
        {
            id: 102,
            name: "ELITE WEAVES",
            price: 1177,
            image: "images/products/women-saree-2.jpg",
            description: "Beautiful floral print summer dress",
            category: "Women"
        },
        {
            id: 103,
            name: "PHEASANT",
            price: 748,
            image: "images/products/women-saree-3.jpg",
            description: "Beautiful floral print summer dress",
            category: "Women"
        },
        {
            id: 104,
            name: "kasee",
            price: 1074,
            image: "images/products/women-saree-4.jpg",
            description: "Beautiful floral print summer dress",
            category: "Women"
        },
        {
            id: 105,
            name: "Tikhi Imli",
            price: 1090,
            image: "images/products/women-saree-5.jpg",
            description: "Beautiful floral print summer dress",
            category: "Women"
        },
        {
            id: 106,
            name: "K 5 Fashion",
            price: 999,
            image: "images/products/women-saree-6.jpg",
            description: "Beautiful floral print summer dress",
            category: "Women"
        },
        {
            id: 107,
            name: "NS WORLD",
            price: 999,
            image: "images/products/women-saree-7.jpg",
            description: "Beautiful floral print summer dress",
            category: "Women"
        },
        {
            id: 108,
            name: "SANISA",
            price: 636,
            image: "images/products/women-saree-8.jpg",
            description: "Beautiful floral print summer dress",
            category: "Women"
        },
        {
            id: 109,
            name: "Vishudh",
            price: 543,
            image: "images/products/women-dress-1.jpg",
            description: "Beautiful floral print summer dress",
            category: "Women"
        },
        {
            id: 110,
            name: "Marcia",
            price: 538,
            image: "images/products/women-dress-2.jpg",
            description: "Beautiful floral print summer dress",
            category: "Women"
        },
        {
            id: 111,
            name: "Anouk",
            price: 599,
            image: "images/products/women-dress-3.jpg",
            description: "Beautiful floral print summer dress",
            category: "Women"
        },
        {
            id: 112,
            name: "Anouk Rustic",
            price: 395,
            image: "images/products/women-dress-4.jpg",
            description: "Beautiful floral print summer dress",
            category: "Women"
        },
        {
            id: 113,
            name: "BOSARU",
            price: 799,
            image: "images/products/women-dress-5.jpg",
            description: "Beautiful floral print summer dress",
            category: "Women"
        },
        {
            id: 114,
            name: "PHYSIL",
            price: 454,
            image: "images/products/women-dress-6.jpg",
            description: "Beautiful floral print summer dress",
            category: "Women"
        },
        {
            id: 115,
            name: "Chaukas",
            price: 598,
            image: "images/products/women-dress-7.jpg",
            description: "Beautiful floral print summer dress",
            category: "Women"
        },
        {
            id: 116,
            name: "Rangriti",
            price: 324,
            image: "images/products/women-dress-8.jpg",
            description: "Beautiful floral print summer dress",
            category: "Women"
        },

        // Add more products...
    ],
    kids: [
        {
            id: 201,
            name: "RARE ONES",
            price: 999,
            image: "images/products/kids-shirt-1.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 202,
            name: "Pantaloons Junior",
            price: 764,
            image: "images/products/kids-shirt-2.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 203,
            name: "Pantaloons Junior",
            price: 951,
            image: "images/products/kids-shirt-3.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 204,
            name: "Pepe Jeans",
            price: 816,
            image: "images/products/kids-shirt-4.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 205,
            name: "HELLCAT",
            price: 399,
            image: "images/products/kids-shirt-5.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 206,
            name: "U.S. Polo Assn. Kids",
            price: 966,
            image: "images/products/kids-shirt-6.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 207,
            name: "United Colors of Benetton",
            price: 839,
            image: "images/products/kids-shirt-7.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 208,
            name: "Mango Kids",
            price: 731,
            image: "images/products/kids-shirt-8.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 209,
            name: "Mango Kids",
            price: 1100,
            image: "images/products/kids-pant-1.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 210,
            name: "RAZCALJACK",
            price: 1199,
            image: "images/products/kids-pant-2.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 211,
            name: "Mank D",
            price: 949,
            image: "images/products/kids-pant-3.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 212,
            name: "NEXT",
            price: 1209,
            image: "images/products/kids-pant-4.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 213,
            name: "KISAH",
            price: 3749,
            image: "images/products/kids-pant-5.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 214,
            name: "STYROVA.",
            price: 899,
            image: "images/products/kids-pant-6.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 215,
            name: "VIVESCO",
            price: 999,
            image: "images/products/kids-pant-7.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 216,
            name: "CAZZBA",
            price: 1299,
            image: "images/products/kids-pant-8.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 217,
            name: "Marks & Spencer",
            price: 999,
            image: "images/products/kids-girl-1.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 218,
            name: "United Colors of Benetton",
            price: 899,
            image: "images/products/kids-girl-2.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 219,
            name: "Cutiekins",
            price: 1099,
            image: "images/products/kids-girl-3.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 220,
            name: "PILOLO",
            price: 1149,
            image: "images/products/kids-girl-4.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 221,
            name: "PRENA FASHION",
            price: 1099,
            image: "images/products/kids-girl-5.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 222,
            name: "VASTRAMAY",
            price: 749,
            image: "images/products/kids-girl-6.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 223,
            name: "INCLUD",
            price: 857,
            image: "images/products/kids-girl-7.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        {
            id: 224,
            name: "Hopscotch",
            price: 1599,
            image: "images/products/kids-girl-8.jpg",
            description: "Comfortable cotton joggers for kids",
            category: "Kids"
        },
        // Add more products...
    ]
};

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = count;
    }
}

function addToCart(productId, category) {
    const product = products[category].find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        // alert('Product added to cart!');
        
        // Redirect to cart page
        window.location.href = 'pages/cart.html';
    }
}

// Product Display
function displayProducts() {
    // Display Men's products
    const menGrid = document.getElementById('men-products-grid');
    if (menGrid) {
        menGrid.innerHTML = products.men.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">₹${product.price.toFixed(0)}</p>
                    <button class="btn-add-to-cart" onclick="addToCart(${product.id}, 'men')">
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // Display Women's products
    const womenGrid = document.getElementById('women-products-grid');
    if (womenGrid) {
        womenGrid.innerHTML = products.women.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">₹${product.price.toFixed(2)}</p>
                    <button class="btn-add-to-cart" onclick="addToCart(${product.id}, 'women')">
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // Display Kids' products
    const kidsGrid = document.getElementById('kids-products-grid');
    if (kidsGrid) {
        kidsGrid.innerHTML = products.kids.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">₹${product.price.toFixed(2)}</p>
                    <button class="btn-add-to-cart" onclick="addToCart(${product.id}, 'kids')">
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
    }
}

// Authentication Check
function checkAuth() {
    const user = JSON.parse(localStorage.getItem('user'));
    const authButtons = document.querySelector('.auth-buttons');
    const userProfile = document.querySelector('.user-profile');
    const usernameSpan = document.querySelector('.username');
    
    if (user && authButtons && userProfile) {
        authButtons.style.display = 'none';
        userProfile.style.display = 'flex';
        if (usernameSpan) {
            usernameSpan.textContent = user.name.split(' ')[0];
        }
    }
}



// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateCartCount();
    checkAuth();
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});