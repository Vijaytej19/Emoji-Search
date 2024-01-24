fetch('emoji.json')
.then(response => response.json())
.then(data => {
    // Process the data and display in UI
    const emojiContainer = document.getElementById('emojiContainer');

    data.forEach(emojiData => {
        const emojiDiv = document.createElement('div');
        emojiDiv.classList.add('commonClass', 'emoji-item');
        emojiDiv.innerHTML = `
        <div class = "singleEmojiContainer">
            <p class="emoji"> ${emojiData.emoji}</p>
            <p class="emojiDescription"> ${emojiData.aliases}</p>
        </div>
        
        `;
        emojiContainer.appendChild(emojiDiv);   
    });
})
.catch(error => console.log('Error fetching data:', error));

// function copyEmojiAndShowToast() {
//     const emojiText = emojiContainer.querySelector('.emoji').textContent;
    
//     // Use the Clipboard API to copy the emoji
//     navigator.clipboard.writeText(emojiText)
//         .then(() => {
//             showToast(`Emoji "${emojiText}" is copied`);
//         })
//         .catch(err => {
//             console.error('Unable to copy to clipboard:', err);
//         });
// }

// const emojiContainer = document.getElementById('emojiContainer');
// emojiContainer.addEventListener('click', (event) => {
//     const clickedElement = event.target;
    
//     // Check if the clicked element is an emoji item
//     if (clickedElement.classList.contains('emoji')) {
//         // Call the copyEmojiAndShowToast function with the clicked emoji container
//         copyEmojiAndShowToast(clickedElement);
//     }
// });

// function showToast(message) {
//     const toastContainer = document.getElementById('toastContainer');

//     // Create and append a toast notification
//     const toast = document.createElement('div');
//     toast.classList.add('toast');
//     toast.textContent = message;
//     toastContainer.appendChild(toast);

//     // Set a timeout to remove the toast after 5 seconds
//     setTimeout(() => {
//         toast.remove();
//     }, 5000);
// }  

function copyEmojiAndShowToast(clickedElement) {
    const emojiText = clickedElement.textContent; // Get the text content directly

    // Use the Clipboard API to copy the emoji
    navigator.clipboard.writeText(emojiText)
        .then(() => {
            showToast(`Emoji "${emojiText}" is copied`);
        })
        .catch(err => {
            console.error('Unable to copy to clipboard:', err);
        });
}

const emojiContainer = document.getElementById('emojiContainer');
emojiContainer.addEventListener('click', (event) => {
    const clickedElement = event.target;

    // Check if the clicked element is an emoji item
    if (clickedElement.classList.contains('emoji')) {
        // Call the copyEmojiAndShowToast function with the clicked emoji container
        copyEmojiAndShowToast(clickedElement);
    }
});

function showToast(message) {
    const toastContainer = document.getElementById('toastContainer');

    // Create and append a toast notification
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    toastContainer.appendChild(toast);

    // Set a timeout to remove the toast after 5 seconds
    setTimeout(() => {
        toast.remove();
    }, 5000);
}


