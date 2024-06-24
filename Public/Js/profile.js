document.getElementById("payment-methods").addEventListener("click", function() {
    document.getElementById("visa").style.display = "block";
    document.getElementById("cash").style.display = "block";
  });
  document.getElementById("visa").addEventListener("click", function() {
    document.getElementById("visa-content").style.display = "block";
    document.getElementById("cash-content").style.display = "none";
  });
  

  
  document.getElementById("cash").addEventListener("click", function() {
    document.getElementById("visa-content").style.display = "none";
    document.getElementById("cash-content").style.display = "block";
  });
  function validateForm() {
    var cardNumber = document.getElementById("cardNumber").value;
    var fullName = document.getElementById("fullName").value;
    var expiration = document.getElementById("expiration").value;
    var cvc = document.getElementById("cvc").value;
    var valid = true;

    if (cardNumber.length !== 16) {
      displayError("cardNumber", "Card number must be 16 digits.");
      valid = false;
    }

    if (!/^[a-zA-Z]*$/.test(fullName.trim())) {
        displayError("fullName", "Full name can only contain letters.");
        valid = false;
      }

    if (!expiration.match(/^\d{2}\/\d{2}$/)) {
      displayError("expiration", "Expiration date must be in MM / YY format.");
      valid = false;
    }

    if (cvc.length < 3) {
      displayError("cvc", "CVC must be at least 3 digits.");
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


  // history section (action when My orders is clicked)


  document.getElementById("my-orders").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    var ordersContainer = document.getElementById("history");
    if (ordersContainer.style.display === "none") {
        ordersContainer.style.display = "flex";
    } else {
        ordersContainer.style.display = "none";
    }
});

//view details form
document.getElementById("viewDetails").addEventListener("click", function() {
    window.location.href = "details.html";
});






