const numberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", numberOfCategories.length);

const categoryAnimals = numberOfCategories[0].firstElementChild.textContent;
console.log("Category:", categoryAnimals);

const elementsAnimals = numberOfCategories[0].lastElementChild.children.length;
console.log("Elements:", elementsAnimals);

const categoryProducts = numberOfCategories[1].firstElementChild.textContent;
console.log("Category:", categoryProducts);

const elementsAProducts =
  numberOfCategories[1].lastElementChild.children.length;
console.log("Elements:", elementsAProducts);

const categoryTechnologies =
  numberOfCategories[2].firstElementChild.textContent;
console.log("Category:", categoryTechnologies);

const elementsTechnologies =
  numberOfCategories[2].lastElementChild.children.length;
console.log("Elements:", elementsTechnologies);
