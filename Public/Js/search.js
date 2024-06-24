// Filter selection function
function filterSelection(category) {
  var products = document.getElementsByClassName("filterDiv");
  for (var i = 0; i < products.length; i++) {
      var product = products[i];
      if (category === "all" || product.classList.contains(category)) {
          product.style.display = "block";
      } else {
          product.style.display = "none";
      }
  }
}

// Initial filtering
filterSelection("all");
