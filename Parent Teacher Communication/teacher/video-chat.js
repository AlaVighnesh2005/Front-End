document.addEventListener('DOMContentLoaded', () => {
    const localVideo = document.getElementById('localVideo');

    // Request access to camera and microphone
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            localVideo.srcObject = stream; // Set the local video stream
        })
        .catch(error => {
            console.error('Error accessing media devices:', error);
            alert('Unable to access camera and microphone. Please check permissions.');
        });
});