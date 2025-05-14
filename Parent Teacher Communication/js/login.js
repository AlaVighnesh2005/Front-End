document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const userType = document.querySelector('#user-type').value;

    if (username && password) {
        if (userType === 'Parent') {
            window.location.href = 'parent/dashboard.html';
        } else if (userType === 'Teacher') {
            window.location.href = 'teacher/dashboard.html';
        }
        alert(`Welcome, ${username}! Logging in as ${userType}.`);
    } else {
        alert('Please fill in all fields.');
    }
});