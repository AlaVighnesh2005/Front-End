document.querySelector('.download-btn').addEventListener('click', () => {
    const confirmation = confirm('Would you like to download all reports as a PDF?');
    if (confirmation) {
        alert('Initiating download of reports...');
        // Placeholder for actual download functionality
        console.log('Download triggered');
    }
});