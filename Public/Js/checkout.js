document.getElementById('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    var country = document.getElementById('country');
        var address = document.getElementById('address');
        var city = document.getElementById('city');
    
        
    const paymentOptions = document.getElementsByName('payment');
    const cardNumber = document.getElementById('cardNumber');
    const cardNumberError = document.getElementById('cardNumber-error');
    const fullName = document.getElementById('fullName');
    const fullNameError = document.getElementById('fullName-error');
    const expiration = document.getElementById('expiration');
    const expirationError = document.getElementById('expiration-error');
    const cvc = document.getElementById('cvc');
    const cvcError = document.getElementById('cvc-error');

    // Reset errors
    emailError.textContent = '';
    phoneError.textContent = '';
    fnameError.textContent = '';
    lnameError.textContent = '';
    addressError.textContent = '';
    cityError.textContent = '';
    governmentError.textContent = '';
    countryError.textContent = '';
    cardNumberError.textContent = '';
    fullNameError.textContent = '';
    expirationError.textContent = '';
    cvcError.textContent = '';


    if (!country.checkValidity()) {
        alert('Please select a country.');
        event.preventDefault();
        return false;
      }
  
      if (!address.checkValidity()) {
        alert('Please enter an address.');
        event.preventDefault();
        return false;
      }
  
      if (!city.checkValidity()) {
        alert('Please enter a city.');
        event.preventDefault();
        return false;
      }
  
      // If all validations pass, you can proceed with form submission
      alert('Form submitted successfully!');

    // Validate payment method
    let paymentSelected = false;
    for (let i = 0; i < paymentOptions.length; i++) {
        if (paymentOptions[i].checked) {
            paymentSelected = true;
            if (paymentOptions[i].value === 'visa') {
                // Validate Visa payment details
                if (!cardNumber.value) {
                    cardNumberError.textContent = 'Card number is required.';
                    isValid = false;
                } else if (!/^\d{16}$/.test(cardNumber.value)) {
                    cardNumberError.textContent = 'Card number must be 16 digits.';
                    isValid = false;
                }

                if (!fullName.value) {
                    fullNameError.textContent = 'Full name is required.';
                    isValid = false;
                }

                if (!expiration.value) {
                    expirationError.textContent = 'Expiration date is required.';
                    isValid = false;
                } else if (!/^\d{2}\/\d{2}$/.test(expiration.value)) {
                    expirationError.textContent = 'Expiration date must be in MM / YY format.';
                    isValid = false;
                }

                if (!cvc.value) {
                    cvcError.textContent = 'CVC is required.';
                    isValid = false;
                } else if (!/^\d{3}$/.test(cvc.value)) {
                    cvcError.textContent = 'CVC must be 3 digits.';
                    isValid = false;
                }
            }
            break;
        }
    }

    if (!paymentSelected) {
        alert('Please select a payment method.');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Submit the form data to the server here
        // e.g., using AJAX or fetch API.
    }
});



function showPaymentForm(paymentType) {
    document.getElementById('cash').style.display = 'none';
    document.getElementById('visa-content').style.display = 'none';
    if (paymentType === 'cash') {
        document.getElementById('cash').style.display = 'block';
    } else if (paymentType === 'visa-content') {
        document.getElementById('visa-content').style.display = 'block';
    }
}