document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const student = document.querySelector('#student').value;
    const subject = document.querySelector('#subject').value;
    const grade = document.querySelector('#grade').value;
    const remarks = document.querySelector('#remarks').value;

    if (student && subject && grade && remarks) {
        alert(`Performance updated for ${student} in ${subject} successfully!`);
        document.querySelector('form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});