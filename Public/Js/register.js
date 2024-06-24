document.querySelectorAll('.form-group input').forEach(function(input){
    input.addEventListener('focus',function(){
        this.parentNode.classList.add('active');
    });

    input.addEventListener('blur',function(){
        if(this.value===''){
            this.parentNode.classList.remove('active');
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const inputFields = registrationForm.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

    inputFields.forEach(function(input) {
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('active');
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentNode.classList.remove('active');
            }
        });

        input.addEventListener('input', function() {
            const label = this.parentNode.querySelector('label');
            if (this.value !== '') {
                label.style.display = 'none';
            } else {
                label.style.display = 'block';
            }
        });
    });

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formErrors = document.getElementById('form-errors');

        // Reset previous errors
        formErrors.textContent = '';
        inputFields.forEach(input => removeError(input.id));

        const formData = {
            fname: document.getElementById('fname').value,
            lname: document.getElementById('lname').value,
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            num: document.getElementById('num').value,
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirmPassword').value
        };

        // Perform client-side validation
        const isValid = validateForm(
            formData.fname,
            formData.lname,
            formData.username,
            formData.email,
            formData.num,
            formData.password,
            formData.confirmPassword
        );

        if (!isValid) return;

        // Send form data via AJAX
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                registrationForm.reset();
                window.location.href = "/";
            } else {
                // Display server-side validation errors
                if (data.errors) {
                    for (const [field, error] of Object.entries(data.errors)) {
                        showError(field, error);
                    }
                }
                if (data.message) {
                    formErrors.textContent = data.message;
                }
            }
        })
        .catch(error => {
            formErrors.textContent = 'An error occurred while submitting the form. Please try again later.';
        });
    });

    function validateForm(fname, lname, username, email, num, password, confirmPassword) {
        let isValid = true;

        if (fname.trim() === '') {
            showError('fname', 'First name is required');
            isValid = false;
        } else {
            const regex = /^[a-zA-Z\s]+$/;
            if (!regex.test(fname)) {
                showError('fname', 'Please enter a valid name');
                isValid = false;
            } else {
                removeError('fname');
            }
        }

        if (lname.trim() === '') {
            showError('lname', 'Last name is required');
            isValid = false;
        } else {
            const regex = /^[a-zA-Z\s]+$/;
            if (!regex.test(lname)) {
                showError('lname', 'Please enter a valid name');
                isValid = false;
            } else {
                removeError('lname');
            }
        }

        if (username.trim() === '') {
            showError('username', 'Username is required');
            isValid = false;
        } else {
            removeError('username');
        }

        if (email.trim() === '') {
            showError('email', 'Email is required');
            isValid = false;
        } else {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!regex.test(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            } else {
                removeError('email');
            }
        }

        if (num.trim() === '') {
            showError('num', 'A phone number is required');
            isValid = false;
        } else if (num.length !== 10) {
            showError('num', 'Your phone number must be 10 digits');
            isValid = false;
        } else if (!/^\d+$/.test(num)) {
            showError('num', 'Your phone number must contain digits only');
            isValid = false;
        } else {
            removeError('num');
        }

        if (password.trim() === '') {
            showError('password', 'Password is required');
            isValid = false;
        } else if (password.length < 5) {
            showError('password', 'Password must be at least 5 characters long');
            isValid = false;
        } else {
            removeError('password');
        }

        if (confirmPassword.trim() === '') {
            showError('confirmPassword', 'Please confirm your password');
            isValid = false;
        } else if (password !== confirmPassword) {
            showError('confirmPassword', 'Passwords do not match');
            isValid = false;
        } else {
            removeError('confirmPassword');
        }

        return isValid;
    }

    function showError(fieldId, errorMessage) {
        const errorSpan = document.getElementById(fieldId + '-error');
        errorSpan.textContent = errorMessage;
    }

    function removeError(fieldId) {
        const errorSpan = document.getElementById(fieldId + '-error');
        errorSpan.textContent = '';
    }
});
