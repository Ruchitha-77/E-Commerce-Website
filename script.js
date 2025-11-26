// ----- HERO SLIDER -----
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[currentSlide].classList.add("active");

    currentSlide = (currentSlide + 1) % slides.length;

    setTimeout(showSlides, 3000);
}
showSlides();



// ----- PRODUCT DATA -----
const products = [
    { id: 1, name: "Smartphone", price: 14999, category: "electronics", image: "images/smartphone.jpg" },
    { id: 2, name: "Earbuds", price: 1999, category: "electronics", image: "images/earbuds.jpg" },
    { id: 3, name: "Laptop", price: 49999, category: "electronics", image: "images/laptop.jpg" },

    { id: 4, name: "Men T-Shirt", price: 499, category: "fashion", image: "images/men-tshirt.jpg" },
    { id: 5, name: "Sneakers", price: 1299, category: "fashion", image: "images/sneakers.jpg" },

    { id: 6, name: "Sofa Chair", price: 7999, category: "home", image: "images/sofa-chair.jpg" },
    { id: 7, name: "LED Lamp", price: 899, category: "home", image: "images/led-lamp.jpg" },

    { id: 8, name: "Face Cream", price: 299, category: "beauty", image: "images/face-cream.jpg" },
    { id: 9, name: "Shampoo", price: 199, category: "beauty", image: "images/shampoo.jpg" },

    { id: 10, name: "Football", price: 699, category: "sports", image: "images/football.jpg" },
];

// ----- DISPLAY PRODUCTS -----
const productList = document.getElementById("product-list");

function displayProducts(list) {
    productList.innerHTML = "";

    list.forEach(p => {
        productList.innerHTML += `
            <div class="product">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>`;
    });
}

displayProducts(products);


// ----- CATEGORY FILTER -----
document.querySelectorAll("[data-category]").forEach(btn => {
    btn.addEventListener("click", () => {
        const cat = btn.getAttribute("data-category");
        if (cat === "all") displayProducts(products);
        else displayProducts(products.filter(p => p.category === cat));
    });
});


// ----- SEARCH FUNCTION -----
document.getElementById("searchInput").addEventListener("input", function () {
    const text = this.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(text));
    displayProducts(filtered);
});


// ----- CART -----
let cart = [];

function addToCart(id) {
    cart.push(id);
    document.getElementById("cart-count").innerText = cart.length;
}
