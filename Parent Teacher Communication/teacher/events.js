document.querySelector('#event-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const eventName = document.querySelector('#event-name').value;
    const eventDate = document.querySelector('#event-date').value;

    if (eventName && eventDate) {
        alert(`Event "${eventName}" added for ${eventDate} successfully!`);
        document.querySelector('#event-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

document.querySelector('#notification-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const message = document.querySelector('#notification-message').value;

    if (message) {
        alert('Notification sent successfully!');
        document.querySelector('#notification-form').reset();
    } else {
        alert('Please enter a message.');
    }
});