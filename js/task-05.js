const inputEl = document.querySelector("#name-input");
const resultNameEl = document.querySelector("#name-output");

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    resultNameEl.textContent = "Anonymous";
  } else {
    resultNameEl.textContent = event.currentTarget.value;
  }
}

inputEl.addEventListener("input", onInputChange);
