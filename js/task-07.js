const slider = document.querySelector("#font-size-control");
console.log(slider);

const textEl = document.querySelector("#text");
console.log(textEl);

function fontControl(event) {
  console.log(slider.value);
  textEl.style.fontSize = `${slider.value}px`;
}
slider.addEventListener("input", fontControl);
