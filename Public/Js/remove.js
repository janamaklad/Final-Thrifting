function removeProduct(image, title, price, brand, size) {
    // Display confirmation dialog
    if (confirm("Are you sure you want to remove this product?")) {
        // Perform removal logic
        console.log("Product removed:", title);
        // Here you can implement the logic to actually remove the product from the page
        // For example, you can remove the product element from the DOM
        let productElement = document.querySelector(`.product img[src="${image}"]`).closest(".product");
        if (productElement) {
            productElement.remove();
            // Show confirmation message with "Restore Product" button
            showConfirmationMessage(image, title, price, brand, size);
        }
    }
}

function showConfirmationMessage(image, title, price, brand, size) {
    let confirmationMessage = document.createElement("div");
    confirmationMessage.className = "confirmation-message";
    confirmationMessage.innerHTML = `
        <h2>Product removed successfully!</h2>
        <button onclick="restoreProduct('${image}', '${title}', '${price}', '${brand}', '${size}')">Restore Product</button>
        <button class="close-button" onclick="closeConfirmationMessage()">Cancel</button>
    `;
    document.body.appendChild(confirmationMessage);
}

function closeConfirmationMessage() {
    let confirmationMessage = document.querySelector(".confirmation-message");
    if (confirmationMessage) {
        confirmationMessage.remove();
    }
}

function restoreProduct(image, title, price, brand, size) {
    // Logic to restore the product
    console.log("Product restored!");
    // Remove the confirmation message
    let confirmationMessage = document.querySelector(".confirmation-message");
    if (confirmationMessage) {
        confirmationMessage.remove();
    }
    // Here you can implement the logic to restore the product
    let productContainer = document.querySelector(".product");
    let productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
        <img src="${image}">
        <div class="product-details">
            <h2>${title}</h2>
            <p>Price: ${price}</p>
            <p>Brand: ${brand}</p>
            <p>Size: ${size}</p>
            <button onclick="removeProduct('${image}', '${title}', '${price}', '${brand}', '${size}')">Remove</button>
        </div>
    `;
    productContainer.appendChild(productElement);
}

let editedProductIndex; // Global variable to store the index of the edited product

function editProduct(image, title, price, brand, size, index) {
    // Populate the modal with current product details
    document.getElementById('edit-price').value = price;
    document.getElementById('edit-size').value = size;
    productName = title;
    editedProductIndex = index; // Store the index of the edited product
    // Display the modal
    document.getElementById('editModal').style.display = 'block';
}

function submitEdit() {
    // Get the updated values from the modal
    let newPrice = document.getElementById('edit-price').value;
    let newSize = document.getElementById('edit-size').value;

    // Perform logic to update the product with newPrice and newSize
    // For example, you can update the product details directly on the page
    document.querySelector('.product-details h2').innerText = productName; // Update title
    document.querySelectorAll('.product-details p')[0].innerText = "Price: " + newPrice; // Update price
    document.querySelectorAll('.product-details p')[2].innerText = "Size: " + newSize; // Update size

    // Hide the modal
    document.getElementById('editModal').style.display = 'none';

    // Display a success message
    alert("Product updated successfully.");
}




// Add event listener for saveButton click
document.getElementById("saveButton").addEventListener("click", submitEdit);



function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
}


function saveChanges(image, title, brand) {
    // Get the edited price and size values
   // let editedPrice = document.getElementById("edit-price").value;
    //let editedSize = document.getElementById("edit-size").value;
    
    // Perform logic to update the product with the edited values
   // Perform logic to update the product with the edited values
   console.log("Product edited:", title, editedPrice, editedSize);

   // Find the product element to update
   let productElement = document.querySelector(`.product-details h2:contains(${title})`).closest('.product-details');

   // Update the product details
   productElement.querySelector('p:nth-of-type(1)').innerText = "Price: " + editedPrice; // Update price
   productElement.querySelector('p:nth-of-type(3)').innerText = "Size: " + editedSize; // Update size

   // Hide the modal
   document.getElementById('editModal').style.display = 'none';

   // Display a success message
   alert("Product updated successfully.");
    
    // You can update the product details on the page with the new values
    let productDetails = document.querySelector(".product-details");
    productDetails.innerHTML = `
        <h2>${title}</h2>
        <p>Price: ${editedPrice}</p>
        <p>Brand: ${brand}</p>
        <p>Size: ${editedSize}</p>
        <button onclick="editProduct('${image}', '${title}', '${editedPrice}', '${brand}', '${editedSize}')">Edit</button>
        <button onclick="removeProduct('${image}', '${title}', '${editedPrice}', '${brand}', '${editedSize}')">Remove</button>
    `;
}