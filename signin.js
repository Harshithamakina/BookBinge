document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically validate the credentials or send them to a server
    // For demonstration, we'll just check if fields are not empty
    if (email && password) {
        // Successful sign-in - redirect to index.html
        window.location.href = 'index.html';
        
        // Alternatively, you could store a token or user session first
        // localStorage.setItem('authToken', 'yourAuthTokenHere');
        // Then redirect:
        // window.location.href = 'index.html';
    } else {
        alert('Please enter both email and password');
    }
});