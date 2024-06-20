function enableEdit() {
    document.getElementById('phone').readOnly = false;
    document.getElementById('address').readOnly = false;
    document.getElementById('email').readOnly = false;
    document.querySelector('button[type="submit"]').style.display = 'block';
}

document.getElementById('details-form').addEventListener('submit', function(event) {
    event.preventDefault(); n
    
    alert('Details updated successfully!');
    // disable editing after submission
    document.getElementById('phone').readOnly = true;
    document.getElementById('address').readOnly = true;
    document.getElementById('email').readOnly = true;
    document.querySelector('button[type="submit"]').style.display = 'none';
});




