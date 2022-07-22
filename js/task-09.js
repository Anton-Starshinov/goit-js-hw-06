const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

btnEl.addEventListener("click", randomColorEl);

function randomColorEl() {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  spanEl.textContent = `${getRandomHexColor()}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
