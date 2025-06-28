// Contact page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Validate email format
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // In a real implementation, you would send this data to a server
        // For this example, we'll just display a success message
        const formContainer = document.querySelector('.contact-form');
        formContainer.innerHTML = `
            <div class="success-message">
                <h3>Thank You, ${name}!</h3>
                <p>Your message has been received. We will get back to you soon.</p>
                <button class="btn" onclick="location.reload()">Send Another Message</button>
            </div>
        `;
        
        // In a real implementation, you might want to:
        // 1. Send the form data to a server using fetch()
        // 2. Store the message in localStorage as a fallback
        // 3. Add a loading indicator during submission
    });
});