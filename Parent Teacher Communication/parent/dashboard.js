document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const type = e.target.classList.contains('exam') ? 'Exam Reports' : 'Attendance Report';
        alert(`Downloading ${type}...`);
        console.log(`${type} download initiated`);
    });
});