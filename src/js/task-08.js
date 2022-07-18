const form = document.querySelector(".login-form");
console.log(form);
form.addEventListener("sumbit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new formData(event.currentTarget);
  console.log(formData);
}
