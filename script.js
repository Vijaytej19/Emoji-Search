fetch('emoji.json')
    .then(response => response.json())
    .then(data => {
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

function searchFunction() {
    const searchInput = document.getElementById('searchInput');
    const searchValue = searchInput.value.toLowerCase();
    const emojiItems = document.querySelectorAll('.emoji-item');

    emojiItems.forEach(item => {
        const emojiDescription = item.querySelector('.emojiDescription').textContent.toLowerCase();
        if (emojiDescription.includes(searchValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
const searchButton = document.getElementById('searchButton');
searchButton.onclick = searchFunction




