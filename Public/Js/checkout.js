document.getElementById('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    const fname = document.getElementById('fname');
    const fnameError = document.getElementById('fname-error');
    const lname = document.getElementById('lname');
    const lnameError = document.getElementById('lname-error');
    const address = document.getElementById('address');
    const addressError = document.getElementById('address-error');
    const city = document.getElementById('city');
    const cityError = document.getElementById('city-error');
    const government = document.getElementById('government');
    const governmentError = document.getElementById('government-error');
    const country = document.getElementById('country');
    const countryError = document.getElementById('country-error');
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







    function validateForm() {
        // Clear any previous error messages
        const errorSpans = document.querySelectorAll('.error');
        errorSpans.forEach(span => span.textContent = '');
      
        // Get references to form fields
        const email = document.getElementById('email');
        const fname = document.getElementById('fname');
        const lname = document.getElementById('lname');
        const address = document.getElementById('address');
        const apartment = document.getElementById('apartment'); // Assuming it's optional
        const city = document.getElementById('city');
        const governement = document.getElementById('governement');
        const phone = document.getElementById('phone');
      
        // Validation logic
        let isValid = true;
      
        // Email validation (basic check for @ symbol and some characters)
        if (!email.value.includes('@') || email.value.length < 5) {
          document.getElementById('email-error').textContent = 'Please enter a valid email address (e.g., johndoe@example.com).';
          isValid = false;
        }
      
        // Check if required fields are empty
        if (!fname.value || !lname.value || !address.value || !city.value ||
            !governement.value || !phone.value) {
          document.getElementById('fname-error').textContent = 'Please fill in all required fields.';
          isValid = false;
        }
      
        // Optional validation for apartment (can be removed if not needed)
        if (apartment.value && apartment.value.length === 0) {
          document.getElementById('apartment-error').textContent = 'Please enter an apartment number (if applicable).';
          // isValid = false; // Uncomment if you want apartment to be mandatory
        }
      
        // Phone number validation (basic check for digits only)
        if (!/^\d+$/.test(phone.value)) {
          document.getElementById('phone-error').textContent = 'Invalid phone number. Please enter digits only.';
          isValid = false;
        }
      
        return isValid; // Prevent form submission if validation fails
      }

    // Validate email
    if (!email.value) {
        emailError.textContent = 'E-mail is required.';
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        emailError.textContent = 'Invalid e-mail format.';
        isValid = false;
    }

    // Validate phone
    if (!phone.value) {
        phoneError.textContent = 'Phone number is required.';
        isValid = false;
    } else if (!/^\d+$/.test(phone.value)) {
        phoneError.textContent = 'Phone number must be numeric.';
        isValid = false;
    }

    // Validate first name
    if (!fname.value) {
        fnameError.textContent = 'First name is required.';
        isValid = false;
    }

    // Validate last name
    if (!lname.value) {
        lnameError.textContent = 'Last name is required.';
        isValid = false;
    }

    // Validate address
    if (!address.value) {
        addressError.textContent = 'Address is required.';
        isValid = false;
    }

    // Validate city
    if (!city.value) {
        cityError.textContent = 'City is required.';
        isValid = false;
    }

    // Validate government
    if (!government.value) {
        governmentError.textContent = 'Government is required.';
        isValid = false;
    }

    // Validate country
    if (!country.value) {
        countryError.textContent = 'Country is required.';
        isValid = false;
    }

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