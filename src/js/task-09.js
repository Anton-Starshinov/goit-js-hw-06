const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

btnEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;

  spanEl.textContent = document.body.style.backgroundColor;
}
