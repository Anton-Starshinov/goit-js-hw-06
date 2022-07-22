const inputEl = document.querySelector("#validation-input");

function colorBorderInput(event) {
  const lengthInput = Number(inputEl.dataset.length);

  if (event.currentTarget.value.length === lengthInput) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}

inputEl.addEventListener("blur", colorBorderInput);
