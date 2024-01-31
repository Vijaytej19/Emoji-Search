fetch("emoji.json")
  .then((response) => response.json())
  .then((data) => {
    const emojiContainer = document.getElementById("emojiContainer");

    data.forEach((emojiData) => {
      const emojiDiv = document.createElement("div");
      emojiDiv.classList.add("commonClass", "emoji-item");
      emojiDiv.innerHTML = `
        <div class = "sinleEmojiContainer">

            <p class="emoji"> ${emojiData.emoji}</p>
            <p class="emojiDescription"> ${emojiData.aliases}</p>
        </div>
        
        `;
      emojiContainer.appendChild(emojiDiv);
    });
  })
  .catch((error) => console.log("Error fetching data:", error));

function searchFunction() {
  const searchInput = document.getElementById("searchInput");
  const searchValue = searchInput.value.toLowerCase();
  const emojiItems = document.querySelectorAll(".emoji-item");

  emojiItems.forEach((item) => {
    const emojiDescription = item
      .querySelector(".emojiDescription")
      .textContent.toLowerCase();
    if (emojiDescription.includes(searchValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
const searchButton = document.getElementById("searchButton");
searchButton.onclick = searchFunction;

document.addEventListener("DOMContentLoaded", function () {
  function startVoiceRecognition() {
    const recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.lang = "en-US";

    recognition.onstart = function () {
      console.log("Listening...");
    };

    recognition.onend = function () {
      console.log("Speech recognition ended.");
    };

    recognition.onresult = function (event) {
      const transcript = event.results[0][0].transcript.toLowerCase();
      searchEmoji(transcript);
    };

    recognition.onerror = function (event) {
      console.error("Error occurred:", event.error);
    };

    recognition.start();
  }

  const voiceButton = document.getElementById("voiceButton");
  voiceButton.onclick = startVoiceRecognition;

  function searchEmoji(query) {
    const emojiItems = document.querySelectorAll(".emoji-item");

    emojiItems.forEach((item) => {
      const emojiDescription = item
        .querySelector(".emojiDescription")
        .textContent.toLowerCase();
      if (emojiDescription.includes(query)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    const notFoundMessage = document.getElementById("notFound");

    if (
      document.querySelectorAll('.emoji-item[style="display: block;"]')
        .length === 0
    ) {
      notFoundMessage.textContent = "No matching emojis found.";
    } else {
      notFoundMessage.textContent = "";
    }

    setTimeout(() => {
      if (
        document.querySelectorAll('.emoji-item[style="display: none;"]')
          .length === 0
      ) {
        notFoundMessage.textContent = "No matching emojis found.";
      } else {
        notFoundMessage.textContent = "";
      }
    }, 2000);
  }
});

const searchButton = document.getElementById("searchButton");
searchButton.onclick = searchFunction;

function copyEmojiAndShowToast(clickedElement) {
  const emojiText = clickedElement.textContent;
  navigator.clipboard
    .writeText(emojiText)
    .then(() => {
      showToast(`Emoji "${emojiText}" is copied`);
    })
    .catch((err) => {
      console.error("Unable to copy to clipboard:", err);
    });
}

const emojiContainer = document.getElementById("emojiContainer");
emojiContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.contains("emoji")) {
    copyEmojiAndShowToast(clickedElement);
  }
});

function showToast(message) {
  const toastContainer = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 5000);
}
