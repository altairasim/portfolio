const heading = document.getElementById("heading");
const blinker = document.getElementById("blinkerspan");
const text = [
  "As-Salaam-Alaikum...!",
  "I am Asim.",
  "I am passionate about my work.",
  "I am a people person.",
  "I am always learning and growing.",
  "I have the eagerness to learn.",
  "Small steps each day.",
  "Don not overdo, just do.",
  "You have the power.",
  "Be your own version.",
  "Too clever is dumb.",
  "Aim for the highest.",
  "Be curious, not judgmental.",
  "Leave no stone unturned.",
  "Beginnings are always messy.",
  "No pressure, no diamonds.",
];
let currentIndex = 0;
let isTyping = true;

function typeEffect() {
  if (currentIndex >= text.length) {
    return;
  }

  const currentText = text[currentIndex];
  currentIndex++;

  let i = 0;
  const intervalId = setInterval(() => {
    heading.innerHTML += currentText[i];
    i++;
    if (i >= currentText.length) {
      clearInterval(intervalId);
      isTyping = false;
      blinkerFun();
    }
  }, 100);
}

function eraseText() {
  const currentText = heading.innerHTML;
  if (currentText.length > 0) {
    heading.innerHTML = currentText.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    typeEffect();
  }
}

function blinkerFun() {
  if (!isTyping) {
    blinker.classList.add("animate-blinker");
    setTimeout(eraseText, 1000);
  } else {
    blinker.classList.remove("animate-blinker");
  }
}

typeEffect();
