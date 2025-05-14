document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (name && email && message) {
        alert('Thank you for your feedback! It has been submitted successfully.');
        document.querySelector('form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});