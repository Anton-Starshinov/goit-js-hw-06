const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert(`Заполни все поля!`);
  }

  let formResult = {};
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    formResult = {
      email: email.value,
      password: password.value,
    };
  });

  console.log(formResult);
  form.reset();
}
