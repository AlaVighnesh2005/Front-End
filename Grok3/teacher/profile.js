document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const mobile = document.querySelector('#mobile').value;

    if (name && email && mobile) {
        alert('Profile updated successfully!');
        document.querySelector('.profile-display').innerHTML = `
            <h2>Your Profile</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile:</strong> ${mobile}</p>
        `;
    } else {
        alert('Please fill in all fields.');
    }
});