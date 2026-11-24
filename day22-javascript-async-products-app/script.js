const API_URL = "https://fakestoreapi.com/products";

// Selecting our html elements using DOM
const container = document.getElementById("productContainer");
const loading = document.getElementById("loading");

async function getProducts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    loading.style.display = "none";
    displayProducts(data);
  } catch (err) {
    console.log(err);
  }
}

function displayProducts(products) {
  products.forEach((item) => {
    container.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card h-100 shadow-sm">

                    <div class="position-relative">
                    <span class="position-absolute badge bg-primary top-0 start-0 m-2">${item.rating.rate}</span>

                    <span class="position-absolute badge bg-secondary bottom-0 start-0 m-2">${item.category}</span>
                    <img src="${item.image}" class="card-img-top p-4" style="height: 250px; object-fit: contain;" />
                    </div>

                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-truncate">${item.title}</h5>
                        <p class="card-text text-muted">${item.description.substring(0, 80)}...</p>
                        <h5 class="text-primary mt-auto">$${item.price}</h5>

                        <button class="btn btn-secondary mt-3">Buy now</button>
                    </div>
                </div>
            </div>
        `;
  });
}

getProducts();


// slim - [s, l, i, m]