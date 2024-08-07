const menuData = {
    all: [
        
        { name: 'Paneer butter masala', price: 8.0, image: 'all items/pan-butt.jpeg', category: 'vegetarian' },
        { name: 'mushroom masala', price: 18.0, image: 'all items/mash.jpeg', category: 'vegetarian' },
        { name: 'Matar Paneer', price: 7.0, image: 'all items/pan-matar.jpeg', category: 'vegetarian' },
        { name: 'Paneer Tikka', price: 8.5, image: 'all items/pan-chilli.jpeg', category: 'vegetarian' },
        { name: 'Paneer Kadhai', price: 10.0, image: 'all items/pan-kadhai.jpeg', category: 'vegetarian' },
        { name: 'Mix Veg', price: 8.0, image: 'all items/mix.jpeg', category: 'vegetarian' },
        { name: 'Paneer Chilli', price: 8.1, image: 'all items/pan-chilli.jpeg', category: 'vegetarian' },
        { name: 'Paneer Masala', price: 8.0, image: 'all items/pan-masala.jpeg', category: 'vegetarian' },       
        { name: 'Coke', price: 2.5, image: 'all items/bev2.jpeg', category: 'beverages' },
        { name: 'Coke', price: 1.0, image: 'all items/bev3.jpeg', category: 'beverages' },
        { name: 'Pizza', price: 5.0, image: 'all items/pizza.jpeg', category: 'fastfood' },
        { name: 'Samosa', price: 8.5, image: 'all items/samosa.jpeg', category: 'fastfood' },
        { name: 'Momos', price: 7.0, image: 'all items/momos.jpeg', category: 'fastfood' },
        { name: 'Kurkure-momos', price: 8.0, image: 'all items/kur-momos.jpeg', category: 'fastfood' },
        { name: 'Dosa', price: 9.0, image: 'all items/dosa.jpeg', category: 'fastfood' },
        { name: 'Chowmin', price: 10.0, image: 'all items/chow.jpeg', category: 'fastfood' },
        { name: 'Chocolate Cake', price: 4.5, image: 'all items/cake.jpeg', category: 'desserts' },
        { name: 'Black Forest Cake', price: 5.5, image: 'all items/cake1.jpeg', category: 'desserts' },
        { name: 'Donuts', price: 6.5, image: 'all items/donuts.jpeg', category: 'desserts' },
        { name: 'Gulab-Jamun', price: 3.5, image: 'all items/gulab.jpeg', category: 'desserts' },
        { name: 'Rabri-Jalebi', price: 3.5, image: 'all items/rabri.jpeg', category: 'desserts' },
        { name: 'rasogulla', price: 3.0, image: 'all items/ras.jpeg', category: 'desserts' },
        { name: 'Plain rice', price: 5.0, image: 'all items/plain.jpeg', category: 'rice' },
        { name: 'veg-Biryani', price: 15.0, image: 'all items/veg-biryani.jpeg', category: 'rice'},
        { name: 'Jira rice', price: 9.0, image: 'all items/jira.jpeg', category: 'rice' },
        { name: 'veg pulao', price: 10.0, image: 'all items/pulao.jpeg', category: 'rice' },
        { name: 'paneer Biryani', price: 10.0, image: 'all items/paneer-biryani.jpeg', category: 'rice' },
        { name: 'Naan', price: 2.0, image: 'all items/naan.jpeg', category: 'bread' },
        { name: 'Plain Roti', price: 1.0, image: 'all items/roti.jpeg', category: 'bread' },
        { name: 'Butter Roti', price: 2.0, image: 'all items/butter-roti.jpeg', category: 'bread' },
        { name: 'Paneer Kulche', price: 5.0, image: 'all items/paneer-kulcha.jpeg', category: 'bread' },
        { name: 'Fried Chicken', price: 7.0, image: 'all items/chi-fry.jpeg', category: 'chicken' },
        { name: 'Chicken lollipop', price: 10.0, image: 'all items/chi-lolli.jpeg', category: 'chicken' },
        { name: 'Chicken 95', price: 8.0, image: 'all items/chi-95.jpeg', category: 'chicken' },
        { name: 'Chicken Curry', price: 7.0, image: 'all items/chi-curry.jpeg', category: 'chicken' },
        { name: 'Chicken Biryani', price: 12.0, image: 'all items/chi-biry.jpeg', category: 'chicken' },
        { name: 'Mutton Curry', price: 11.0, image: 'all items/mutton.jpeg', category: 'mutton' },
        { name: 'Mutton Biryani', price: 12.5, image: 'all items/mutt-biry.jpeg', category: 'mutton' },
        { name: 'Mutton Handi', price: 12.0, image: 'all items/mutt-handi.jpeg', category: 'mutton' },
        { name: 'Mutton Masala', price: 10.0, image: 'all items/mutt-masala.jpeg', category: 'mutton' },
        { name: 'Mutton ragan josh', price: 12.0, image: 'all items/mutt-ragan-josh.jpeg', category: 'mutton' },
        { name: 'Burger', price: 5.0, image: 'all items/burger.jpeg', category: 'fastfood' }
    ],
    beverages: [],
    desserts: [],
    rice: [],
    bread: [],
    chicken: [],
    mutton: [],
    fastfood: [],
    vegetarian: []
};

// Categorize items
for (let category in menuData) {
    if (category !== 'all') {
        menuData[category] = menuData.all.filter(item => item.category === category);
    }
}

// Cart array to store items
const cart = JSON.parse(localStorage.getItem('cart')) || [];

function showCategory(category) {
    const menuItemsDiv = document.getElementById('menu-items');
    menuItemsDiv.innerHTML = ''; // Clear previous items

    menuData[category].forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        const itemId = `${item.name}-${index}`;
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p id="price-${itemId}">Price: $${item.price.toFixed(2)}</p>
            <select class="quantity-select" id="quantity-${itemId}" onchange="updatePrice('${itemId}', ${item.price})">
                <option value="half">Half</option>
                <option value="full">Full</option>
            </select>
            <button class="add-to-cart" onclick="addToCart('${item.name}', '${itemId}')">Add to Cart</button>
        `;
        menuItemsDiv.appendChild(itemDiv);
    });
}

// Update price based on quantity
function updatePrice(itemId, basePrice) {
    const select = document.getElementById(`quantity-${itemId}`);
    const priceDisplay = document.getElementById(`price-${itemId}`);
    const selectedValue = select.value;
    const finalPrice = selectedValue === 'full' ? (basePrice * 2) : basePrice;

    priceDisplay.textContent = `Price: $${finalPrice.toFixed(2)}`;
}

// Add to Cart function
function addToCart(itemName, itemId) {
    const select = document.getElementById(`quantity-${itemId}`);
    const quantity = select.value;
    const basePrice = menuData.all.find(item => item.name === itemName).price;
    const price = quantity === 'full' ? (basePrice * 2) : basePrice;

    const cartItem = {
        name: itemName,
        price: price,
        quantity: quantity
    };

    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`Added ${quantity} ${itemName} for $${price.toFixed(2)} to cart!`);
}

// Update cart count
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length;
}

// View cart function
function viewCart() {
    window.location.href = 'cart.html'; // Redirect to cart page
}

// Show all items by default
showCategory('all');
updateCartCount();
