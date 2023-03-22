const sentenceContainer = document.getElementById("sentence-container");
const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "pineapple", "quince", "raspberry", "strawberry", "tangerine", "ugli fruit", "watermelon"];

function generateSentence() {
  let sentence = "I like ";
  const numWords = Math.floor(Math.random() * 3) + 1; // choose 1-3 words to include in the sentence
  for (let i = 0; i < numWords; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex];
    sentence += word;
    if (i < numWords - 1) {
      sentence += " and ";
    }
  }
  sentence += ".";
  const sentenceElement = document.createElement("div");
  sentenceElement.classList.add("sentence");
  sentenceElement.textContent = sentence;
  sentenceContainer.appendChild(sentenceElement);
}

setInterval(generateSentence, 3000);
