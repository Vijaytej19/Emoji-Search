fetch("emoji.json")
  .then((response) => response.json())
  .then((data) => {
    // Process the data and display in UI
    const emojiContainer = document.getElementById("emojiContainer");

    data.forEach((emojiData) => {
      const emojiDiv = document.createElement("div");
      emojiDiv.classList.add("commonClass", "emoji-item");
      emojiDiv.innerHTML = `
        <div class = "sinleEmojiContainer">
            <p class="emoji"> ${emojiData.emoji}</p>
            <p class="emojiDescription"> ${emojiData.aliases}</p>
            <p class="emojiTags">${emojiData.tags}</p>
        
        </div>
        
        `;
      emojiContainer.appendChild(emojiDiv);
    });
  })
  .catch((error) => console.log("Error fetching data:", error));

function searchFunction() {
  const searchInput = document.getElementById("searchInput");
  const searchValue = searchInput.value.trim().toLowerCase();
  const emojiItems = document.querySelectorAll(".emoji-item");

  emojiItems.forEach((item) => {
    const emojiDescription = item
      .querySelector(".emojiDescription")
      .textContent.toLowerCase();
    const emojiTags = item
      .querySelector(".emojiTags")
      .textContent.toLowerCase();

    const shouldDisplay =
      emojiDescription.includes(searchValue) || emojiTags.includes(searchValue);
    item.style.display = shouldDisplay || searchValue === "" ? "block" : "none";
  });
}

const searchButton = document.getElementById("searchButton");
searchButton.onclick = searchFunction;
