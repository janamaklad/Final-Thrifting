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



    inputFields.forEach(function(input) {
        input.addEventListener('input', function() {
            const label = this.parentElement.querySelector('label');
            const requiredSpan = label.querySelector('.required');
            if (requiredSpan) {
                label.removeChild(requiredSpan);
            }
        });
    });

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const num= document.getElementById('num').value;
        const password = document.getElementById('password').value;

        const isValid = validateForm(fname, lname, username, email, num, password);

        if (isValid) {
          
            registrationForm.reset(); 
            window.location.href="thrifting.html";
        }
    });

    function validateForm(fname, lname, username, email, num, password) {
        let isValid = true;

        if (fname.trim() === '') {
            showError('fname', 'First name is required');
            isValid = false;
        }else{
            var regex=/^[a-zA-Z\s]+$/;
            if(regex.test(fname)===false){
               showError('fname',"Please enter a valid name");
               isValid=false;
            }
        
        else {
            removeError('fname');
        }
    }

        if (lname.trim() === '') {
            showError('lname', 'Last name is required');
            isValid = false;
        }else{
            var regex=/^[a-zA-Z\s]+$/;
            if(regex.test(lname)===false){
               showError('lname',"Please enter a valid name");
               isValid=false;
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

        }else{
            var regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(regex.test(email)===false){
                showError('email',"Please enter a valid email address");
                isValid=false;
            }
        
         else {
            removeError('email');
        }
        }

        if(num.trim()===''){
            showError('phone','A phone number is required');
            isValid=false;
        }else if(num.length!==10){
            showError('num','Your phone number must be 10 digits');
            isValid=false;
        }else if(!/^\d+$/.test(num)){
         showError('num', 'Your phone number must contain digits only');
         isValid=false;
        }else{
            removeError('num');
        }
    

        if (password.trim() === '') {
            showError('password', 'Password is required');
            isValid = false;
        } else {
            removeError('password');
        }

        if(password.length<5){
            showError('password',"Password must be atleast 5 characters long");
            isValid=false;
        }else{
            removeError('password');
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