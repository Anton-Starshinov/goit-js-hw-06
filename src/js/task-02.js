const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newItemEl = ingredients.map((ingredient) => {
  const navItemEl = document.createElement("li");
  navItemEl.classList.add("item");
  navItemEl.textContent = `${ingredient}`;

  return navItemEl;
});

const elementList = document.querySelector("ul");
elementList.append(...newItemEl);
