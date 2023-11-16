
// Function to generate the HTML for a product card
function generateCard(product) {
    return `
        <div class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src="${product.image}" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${product.name}</h5>
                        <!-- Product price-->
                        ${product.price}
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <input type="number" min="0" placeholder="Quantity">
                        <a class="btn btn-outline-dark mt-auto" href="#">Purchase</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to generate the HTML for all product cards
function generateCards() {
    let cards = "";
    for (var i = 0; i < products.length; i++) {
        cards += generateCard(products[i]);
    }
    return cards;
}

// Function to insert the product cards into the HTML
function insertCards() {
    let container = document.querySelector(".row-cols-3");
    container.innerHTML = generateCards();
}

// Call the function when the page loads
window.onload = insertCards;