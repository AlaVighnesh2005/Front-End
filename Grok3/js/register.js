document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;
    const userType = document.querySelector('#user-type').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (name && email && password && confirmPassword) {
        alert(`Registration successful for ${name} as ${userType}! Please log in.`);
        window.location.href = 'login.html';
    } else {
        alert('Please fill in all fields.');
    }
});