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

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase();
        const emojiItems = document.querySelectorAll('.emoji-item');

        emojiItems.forEach(item => {
            const emojiText = item.textContent.toLowerCase();
            if (emojiText.includes(searchValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });


})
.catch(error => console.error('Error fetching data:', error));


