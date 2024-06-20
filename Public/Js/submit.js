// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the submit button element
    const submitBtn = document.getElementById('submit-btn');
    
    // Add event listener to the submit button for click event
    submitBtn.addEventListener('click', function() {
        // Get the message div element
        const messageDiv = document.getElementById('message');
        
        // Display the message div
        messageDiv.style.display = 'block';
    });
});
  