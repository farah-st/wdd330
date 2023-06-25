document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
    const sortSelect = document.getElementById("sort-select");
    let products = [];
  
    // Fetch the product data from the JSON file
    fetch("products.json")
      .then(response => response.json())
      .then(data => {
        products = data;
        renderProducts(products);
      });
  
    // Function to render the products on the page
    function renderProducts(productsArray) {
      productList.innerHTML = "";
  
      productsArray.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product.name + " - $" + product.price.toFixed(2);
        productList.appendChild(li);
      });
    }
  
    // Event listener for the sort select element
    sortSelect.addEventListener("change", function(event) {
      const sortBy = event.target.value;
      const sortedProducts = sortProductsBy(products, sortBy);
      renderProducts(sortedProducts);
    });
  
    // Function to sort the products array based on the given key
    function sortProductsBy(productsArray, key) {
      return productsArray.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      });
    }
  });
 
let lastUpdate = document.lastModified;
document.querySelector("#lastUpdate").innerHTML = `Last modification: ${lastUpdate}`;
  
  