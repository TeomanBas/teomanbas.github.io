const texts = [
  "Merhaba",
  "Ben Teoman",
  "Backend & Sistem Odaklı Geliştirici"
];

let i = 0;
let j = 0;
let isDeleting = false;

const terminalElement = document.getElementById("terminal-text");
const cursor = document.querySelector(".cursor");

const pauseAfterTyping = 1200;
const pauseAfterDeleting = 400;

function type() {
  const current = texts[i];

  // insansı hızlar
  const speed = isDeleting
    ? 40 + Math.random() * 30   // silme
    : 70 + Math.random() * 50;  // yazma

  if (!isDeleting) {
    terminalElement.textContent = current.slice(0, j + 1);
    j++;
    cursor.classList.add("typing");

    if (j === current.length) {
      cursor.classList.remove("typing");
      setTimeout(() => {
        isDeleting = true;
        type();
      }, pauseAfterTyping);
      return;
    }
  } else {
    terminalElement.textContent = current.slice(0, j - 1);
    j--;

    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;

      setTimeout(() => {
        type();
      }, pauseAfterDeleting);
      return;
    }
  }

  setTimeout(type, speed);
}

type();
