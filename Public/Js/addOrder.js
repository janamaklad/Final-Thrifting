document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("addOrderModal");

    // Get the button that opens the modal
    var btn = document.getElementById("addOrderButton");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.addEventListener('click', function() {
        modal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    span.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

// Handle form submission
document.getElementById("addOrderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting
    // Retrieve form values
    var orderId = document.getElementById("orderId").value;
    var orderDate = document.getElementById("orderDate").value;
    var productName = document.getElementById("productName").value;
    var productPrice = document.getElementById("productPrice").value;
    var productSize = document.getElementById("productSize").value;
    var productBrand = document.getElementById("productBrand").value;
    var orderStatus = document.getElementById("orderStatus").value;
    var productImage = document.getElementById("productImage").files[0].name; // Get the filename of the selected image
    // Create new order element
    var newOrder = document.createElement("div");
    newOrder.classList.add("order");
    newOrder.innerHTML = `
        <div class="order-details">
            <p><strong>Order ID:</strong> ${orderId}</p>
            <p><strong>Purchase Date:</strong> ${orderDate}</p>
        </div>
        <div class="product">
            <div class="product-details">
                <img src="${productImage}" alt="Product Image">
                <p><strong>${productName}</strong></p>
                <p><strong>Price:</strong> ${productPrice}</p>
                <p><strong>Size:</strong> ${productSize}</p>
                <p><strong>Brand:</strong> ${productBrand}</p>
                <p><strong>Status:</strong> ${orderStatus}</p>
            </div>
        </div>
    `;
    // Append new order to the orders container
    document.getElementById("ordersContainer").appendChild(newOrder);
    // Close the modal
    modal.style.display = "none";
});

function validateForm() {
    var orderId = document.getElementById("orderId").value;
    var orderDate = document.getElementById("orderDate").value;
    var productName = document.getElementById("productName").value;
    var productPrice = document.getElementById("productPrice").value;
    var productSize = document.getElementById("productSize").value;
    var productBrand = document.getElementById("productBrand").value;
    var orderStatus = document.getElementById("orderStatus").value;
    var valid = true;

    if (orderId.trim() === "") {
        displayError("orderId", "Order ID is required.");
        valid = false;
    }

    if (orderDate.trim() === "") {
        displayError("orderDate", "Purchase Date is required.");
        valid = false;
    }

    if (productName.trim() === "") {
        displayError("productName", "Product Name is required.");
        valid = false;
    }

    if (productPrice.trim() === "") {
        displayError("productPrice", "Price is required.");
        valid = false;
    }

    if (productSize.trim() === "") {
        displayError("productSize", "Size is required.");
        valid = false;
    }

    if (productBrand.trim() === "") {
        displayError("productBrand", "Brand is required.");
        valid = false;
    }

    if (orderStatus.trim() === "") {
        displayError("orderStatus", "Status is required.");
        valid = false;
    }

    return valid;
}

function displayError(fieldId, message) {
    var error = document.createElement("div");
    error.className = "error-message";
    error.textContent = "*" + message;
    var field = document.getElementById(fieldId);
    field.parentNode.insertBefore(error, field.nextSibling);
}
