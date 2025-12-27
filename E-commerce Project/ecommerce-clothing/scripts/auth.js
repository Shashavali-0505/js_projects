// User Registration
document.addEventListener('DOMContentLoaded', function() {
    // Registration Form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Validation
            if (password !== confirmPassword) {
                alert(`Passwords does'nt match!`);
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters long!');
                return;
            }
            
            // Create user object
            const user = {
                name: name,
                email: email,
                phone: document.getElementById('phone').value,
                createdAt: new Date().toISOString(),
                orders: []
            };
            
            // Save user to localStorage
            localStorage.setItem('user', JSON.stringify(user));
            
            // Save user credentials (in real app, this should be encrypted/hashed)
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push({
                email: email,
                password: password, // In production, NEVER store passwords in plain text
                name: name
            });
            localStorage.setItem('users', JSON.stringify(users));
            
            // Show success message and redirect
            alert('Registration successful! Please login.');
            window.location.href = '../pages/login.html';
        });
    }
    
    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('remember').checked;
            
            // Get registered users
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Find user
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                // Set user session
                const userData = {
                    name: user.name,
                    email: user.email,
                    isLoggedIn: true,
                    loginTime: new Date().toISOString()
                };
                
                // Save to localStorage
                localStorage.setItem('user', JSON.stringify(userData));
                
                // Set session storage for temporary login
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('userEmail', user.email);
                
                // If remember me is checked, set a cookie or localStorage
                if (rememberMe) {
                    localStorage.setItem('rememberedEmail', email);
                } else {
                    localStorage.removeItem('rememberedEmail');
                }
                
                // Redirect to home page
                alert('Login successful!');
                window.location.href = '../index.html';
            } else {
                alert('Invalid email or password!');
            }
        });
        
        // Check for remembered email
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
            document.getElementById('email').value = rememberedEmail;
            document.getElementById('remember').checked = true;
        }
    }
    
    // Check if user is logged in
    function checkLoginStatus() {
        const user = JSON.parse(localStorage.getItem('user'));
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        
        return user && user.isLoggedIn && isLoggedIn === 'true';
    }
    
    // Update UI based on login status
    function updateAuthUI() {
        const user = JSON.parse(localStorage.getItem('user'));
        const authButtons = document.querySelector('.auth-buttons');
        const userProfile = document.querySelector('.user-profile');
        const usernameSpan = document.querySelector('.username');
        
        if (checkLoginStatus() && authButtons && userProfile) {
            authButtons.style.display = 'none';
            userProfile.style.display = 'flex';
            if (usernameSpan) {
                usernameSpan.textContent = user.name.split(' ')[0];
            }
        }
    }
    
    // Logout functionality
    const logoutButton = document.querySelector('.btn-logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            // Clear session
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('userEmail');
            
            // Update user status
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                user.isLoggedIn = false;
                localStorage.removeItem('user', JSON.stringify(user));
            }
            
            // Redirect to home page
            
            alert('Logged out successfully!');
            window.location.href = '../index.html';
        });
    }
    
    // Check auth status on page load
    if (window.location.pathname.includes('../index.html') || 
        window.location.pathname === '/' || 
        window.location.pathname.endsWith('/')) {
        
        // Redirect to login if not authenticated (for protected pages)
        // Comment this out if you want to allow browsing without login
        
        if (!checkLoginStatus() && !window.location.pathname.includes('login.html') && 
            !window.location.pathname.includes('register.html')) {
            window.location.href = 'login.html';
        }
        
        
        updateAuthUI();
    }
    
    // Social Login Buttons (placeholder functionality)
    const googleLoginBtn = document.querySelector('.btn-social.google');
    const facebookLoginBtn = document.querySelector('.btn-social.facebook');
    
    if (googleLoginBtn) {
        googleLoginBtn.addEventListener('click', function() {
            alert('Google login would be implemented here with OAuth');
            // In production, implement OAuth 2.0 flow
        });
    }
    
    if (facebookLoginBtn) {
        facebookLoginBtn.addEventListener('click', function() {
            alert('Facebook login would be implemented here with OAuth');
            // In production, implement Facebook Login API
        });
    }
    
    // Password visibility toggle
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });
});

// Utility function to check if user is logged in
function isUserLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    return !!(user && user.isLoggedIn && isLoggedIn === 'true');
}

// Protect checkout page (add this to checkout.html)
function protectCheckoutPage() {
    if (!isUserLoggedIn() && window.location.pathname.includes('checkout.html')) {
        // alert('Please login to proceed to checkout!')
        window.location.href = 'login.html';
    }
}

// Redirect to login if trying to access protected pages
function redirectIfNotLoggedIn() {
    const protectedPages = ['checkout.html', 'order-success.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage) && !isUserLoggedIn()) {
        window.location.href = 'login.html';
    }
}

// Initialize auth checks
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        redirectIfNotLoggedIn();
        protectCheckoutPage();
    });
} else {
    redirectIfNotLoggedIn();
    protectCheckoutPage();
}