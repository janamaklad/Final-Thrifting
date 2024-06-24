document.querySelectorAll(".form-group input").forEach(function (input) {
    input.addEventListener("focus", function () {
      this.parentNode.classList.add("active");
    });
  
    input.addEventListener("blur", function () {
      if (this.value === "") {
        this.parentNode.classList.remove("active");
      }
    });
  });
  
  const registrationForm = document.getElementById("registration-form");
  const inputFields = registrationForm.querySelectorAll(
    'input[type="text"], input[type="email"], input[type="password"]'
  );
  
  inputFields.forEach(function (input) {
    input.addEventListener("focus", function () {
      this.parentNode.classList.add("active");
    });
  
    input.addEventListener("blur", function () {
      if (this.value === "") {
        this.parentNode.classList.remove("active");
      }
    });
  
    input.addEventListener("input", function () {
      const label = this.parentNode.querySelector("label");
      if (this.value !== "") {
        label.style.display = "none";
      } else {
        label.style.display = "block";
      }
    });
  });