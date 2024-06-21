document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const num = document.getElementById('num').value;
        const password = document.getElementById('password').value;

        const isValid = validateForm(fname, lname, username, email, num, password);

        if (isValid) {
            const formData = new FormData();
            formData.append('fname', fname);
            formData.append('lname', lname);
            formData.append('username', username);
            formData.append('email', email);
            formData.append('num', num);
            formData.append('password', password);

            // Send AJAX request
            fetch('/signup', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text(); // Assuming server returns some response
            })
            .then(data => {
                console.log('Success:', data);
                registrationForm.reset();
                window.location.href = "thrifting.html";
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error scenario, show user a message or retry
            });
        }
    });

    // Validation functions and other event listeners remain the same as in your original code
});
