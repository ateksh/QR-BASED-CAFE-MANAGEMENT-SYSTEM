

const products = [

    { id: 1, name: 'Espresso', category: 'Hot Coffee', price: 90, rating: 4.8, reviews: 124, image: 'https://images.unsplash.com/photo-1514432324607-a09d5b4aefdd?q=80&w=400&auto=format&fit=crop', desc: 'A concentrated form of coffee, served in a small, strong shot.' },
    { id: 2, name: 'Cappuccino', category: 'Hot Coffee', price: 149, rating: 4.7, reviews: 210, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=400&auto=format&fit=crop', desc: 'Espresso topped with frothy milk foam, sprinkled with chocolate powder.' },
    { id: 3, name: 'Latte', category: 'Hot Coffee', price: 169, rating: 4.9, reviews: 345, image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?q=80&w=400&auto=format&fit=crop', desc: 'A milkier coffee option, made with espresso and steamed milk.' },
    { id: 4, name: 'Americano', category: 'Hot Coffee', price: 120, rating: 4.6, reviews: 180, image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=400&auto=format&fit=crop', desc: 'A shot of espresso diluted with hot water to create a smooth black coffee.' },

    { id: 5, name: 'Iced Latte', category: 'Cold Coffee', price: 169, rating: 4.8, reviews: 290, image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=400&auto=format&fit=crop', desc: 'Espresso poured over ice and chilled milk for a refreshing drink.' },
    { id: 6, name: 'Cold Brew', category: 'Cold Coffee', price: 199, rating: 4.9, reviews: 310, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=400&auto=format&fit=crop', desc: 'Coffee beans steeped in cold water for 12 hours for a smooth, sweet flavor.' },
    { id: 7, name: 'Iced Mocha', category: 'Cold Coffee', price: 189, rating: 4.7, reviews: 150, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=400&auto=format&fit=crop', desc: 'A rich blend of espresso, cold milk, and chocolate syrup over ice.' },
    { id: 8, name: 'Frappe', category: 'Cold Coffee', price: 219, rating: 4.8, reviews: 420, image: 'images/frappe.png', desc: 'A blended iced coffee drink topped with whipped cream and syrup.' },

    { id: 9, name: 'Hot Chocolate', category: 'Non-Coffee Drinks', price: 149, rating: 4.8, reviews: 200, image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=400&auto=format&fit=crop', desc: 'Rich, creamy hot chocolate topped with marshmallows and cocoa.' },
    { id: 10, name: 'Green Tea', category: 'Non-Coffee Drinks', price: 80, rating: 4.6, reviews: 120, image: 'images/green_tea.png', desc: 'A soothing mug of organically grown green tea leaves.' },
    { id: 11, name: 'Lemon Tea', category: 'Non-Coffee Drinks', price: 70, rating: 4.5, reviews: 90, image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=400&auto=format&fit=crop', desc: 'Refreshing iced tea infused with freshly squeezed lemon juice.' },
    { id: 12, name: 'Fresh Juice', category: 'Non-Coffee Drinks', price: 120, rating: 4.7, reviews: 160, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=400&auto=format&fit=crop', desc: 'A healthy mixed fruit juice pressed fresh every morning.' },

    { id: 13, name: 'Sandwich', category: 'Snacks', price: 120, rating: 4.5, reviews: 180, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=400&auto=format&fit=crop', desc: 'Freshly toasted sourdough bread with premium fillings and greens.' },
    { id: 14, name: 'Burger', category: 'Snacks', price: 199, rating: 4.8, reviews: 300, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop', desc: 'A classic beef patty burger with cheese, lettuce, and secret sauce.' },
    { id: 15, name: 'Garlic Bread', category: 'Snacks', price: 110, rating: 4.7, reviews: 140, image: 'images/garlic_bread.png', desc: 'Crispy baguette slices toasted with garlic herb butter.' },
    { id: 16, name: 'French Fries', category: 'Snacks', price: 100, rating: 4.6, reviews: 220, image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=400&auto=format&fit=crop', desc: 'Golden, crispy potato fries served with a side of ketchup.' },

    { id: 17, name: 'Chocolate Cake', category: 'Desserts', price: 180, rating: 4.9, reviews: 400, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop', desc: 'Decadent, rich chocolate layer cake frosted with chocolate buttercream.' },
    { id: 18, name: 'Brownie', category: 'Desserts', price: 150, rating: 4.8, reviews: 350, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&auto=format&fit=crop', desc: 'Fudgy chocolate brownie with chunks of dark chocolate baked inside.' },
    { id: 19, name: 'Cheesecake', category: 'Desserts', price: 249, rating: 4.7, reviews: 260, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=400&auto=format&fit=crop', desc: 'Classic New York style vanilla cheesecake with a graham cracker crust.' },
    { id: 20, name: 'Donut', category: 'Desserts', price: 120, rating: 4.6, reviews: 180, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=400&auto=format&fit=crop', desc: 'Soft glazed donut with a delicate sugar coating.' },
];

const categories = ['Hot Coffee', 'Cold Coffee', 'Non-Coffee Drinks', 'Snacks', 'Desserts'];

document.addEventListener('DOMContentLoaded', () => {

    const urlParams = new URLSearchParams(window.location.search);
    const tableParam = urlParams.get('table');
    if (tableParam) {
        localStorage.setItem('scannedTable', tableParam);
        console.log(`Table ${tableParam} assigned from QR code scan.`);
    }
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const counts = document.querySelectorAll('.cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    counts.forEach(c => {
        c.innerText = totalItems;
        c.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if(existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    saveCart();
    showToast(`${product.name} added to cart!`);
}

function showToast(message) {
    let toast = document.getElementById('toast');
    if(!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

function renderBottomNav(activePageName) {
    const nav = document.createElement('nav');
    nav.className = 'bottom-nav';
    nav.innerHTML = `
        <a href="index.html" class="nav-item ${activePageName === 'home' ? 'active' : ''}">
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
        </a>
        <a href="menu.html" class="nav-item ${activePageName === 'menu' ? 'active' : ''}">
            <i class="fa-solid fa-mug-hot"></i>
            <span>Menu</span>
        </a>
        <a href="cart.html" class="nav-item cart-indicator ${activePageName === 'cart' ? 'active' : ''}">
            <i class="fa-solid fa-cart-shopping"></i>
            <span>Cart</span>
            <div class="cart-badge" style="display:none">0</div>
        </a>
        <a href="#" class="nav-item">
            <i class="fa-regular fa-heart"></i>
            <span>Saved</span>
        </a>
        <a href="profile.html" class="nav-item ${activePageName === 'profile' ? 'active' : ''}">
            <i class="fa-regular fa-user"></i>
            <span>Profile</span>
        </a>
    `;
    const container = document.querySelector('.app-container');
    if(container) {
        container.appendChild(nav);
        updateCartCount();
    }
}

function createProductCardHTML(product) {
    return `
        <div class="product-card" onclick="location.href='product.html?id=${product.id}'">
            <div class="product-img-wrap">
                <div class="rating-badge"><i class="fa-solid fa-star"></i> ${product.rating}</div>
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.category}</p>
                <div class="product-footer">
                    <span class="price">${formatPrice(product.price)}</span>
                    <button class="add-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

const formatPrice = (price) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
