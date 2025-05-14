document.querySelector('.send-btn').addEventListener('click', () => {
    const input = document.querySelector('.message-input');
    const messageText = input.value.trim();
    if (messageText) {
        const messagesDiv = document.querySelector('.messages');
        messagesDiv.innerHTML += `<div class="message sent">${messageText}</div>`;
        input.value = '';
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        // Simulate a reply after 1 second
        setTimeout(() => {
            messagesDiv.innerHTML += `<div class="message received">Thank you for your message. I'll get back to you soon.</div>`;
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }, 1000);
    }
});

document.querySelector('.video-chat-btn').addEventListener('click', () => {
    const confirmation = confirm('Request a video chat with the teacher?');
    if (confirmation) {
        alert('Video chat request sent successfully.');
    }
});