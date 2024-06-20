document.addEventListener('DOMContentLoaded', function() {
    // Get all remove buttons
    const removeButtons = document.querySelectorAll('button[type="remove user"]');
    
    // Add click event listeners to each remove button
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the parent user element
            const user = this.parentElement;
            // Remove the user element from the DOM
            user.remove();
        });
    });
});