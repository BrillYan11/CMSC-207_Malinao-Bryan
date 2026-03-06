const funFactBtn = document.getElementById("funFactBtn");
const funFactText = document.getElementById("funFactText");

const funFacts = [
    "Fun Fact: I used to be a streamer and enjoyed connecting with people online.",
    "Fun Fact: I do not give up easily and keep going until I find a solution.",
    "Fun Fact: I always try to stay optimistic, even during difficult situations.",
    "Fun Fact: I am easygoing, which helps me work well with others."
];

let lastIndex = -1;

funFactBtn.addEventListener("click", function () {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * funFacts.length);
  } while (randomIndex === lastIndex && funFacts.length > 1);

  lastIndex = randomIndex;
  funFactText.textContent = funFacts[randomIndex];
});