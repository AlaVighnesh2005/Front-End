document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const freeTime = document.querySelector('#free-time').value;
    if (freeTime) {
        alert(`Free time slot "${freeTime}" updated successfully!`);
        document.querySelector('form').reset();
    } else {
        alert('Please enter a free time slot.');
    }
});