fetch('emoji.json')
.then(response => response.json())
.then(data => {
    // Process the data and display in UI
    const emojiContainer = document.getElementById('emojiContainer');

    data.forEach(emojiData => {
        const emojiDiv = document.createElement('div');
        emojiDiv.classList.add('commonClass', 'emoji-item');
        emojiDiv.innerHTML = `
        <div class = "sinleEmojiContainer">
            <p class="emoji"> ${emojiData.emoji}</p>
            <p class="emojiDescription"> ${emojiData.aliases}</p>
        </div>
        
        `;
        emojiContainer.appendChild(emojiDiv);
        
        
        
    });
})