// Start Now Button
const startButton = document.querySelector('.start-button');

// Popup and close
const popupForm = document.getElementById('popup-form');
const closeButton = document.querySelector('.close');

// Show Popup
startButton.addEventListener('click', function() {
    popupForm.style.display = 'block';
});

// Hide Form
closeButton.addEventListener('click', function() {
    popupForm.style.display = 'none';
});

// Form Submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get the message from the textarea
    const message = document.getElementById('message').value;
    
    // Check if the message is not empty
    if (message.trim() !== '') {
        // Store the message in local storage
        localStorage.setItem('message', message);
        
        // Clear the textarea
        document.getElementById('message').value = '';
        
        // Hide the popup form
        popupForm.style.display = 'none';
        
        alert('Message sent.');
    } else {
        alert('Please write a message.');
    }
}

// Send Button
const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', handleSubmit);