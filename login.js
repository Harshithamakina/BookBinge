// Login Handling
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple login check (replace this with your real authentication method)
    if (username === 'libro' && password === 'hhms') {
        // Redirect to the book reading app page
        window.location.href = 'index.html';
    } else {
        loginError.style.display = 'block';
    }
});