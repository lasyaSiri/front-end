document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Add your login validation logic here
    if (username && password) {
        window.location.href = 'home.html';
    }
});