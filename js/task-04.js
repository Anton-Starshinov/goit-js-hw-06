const difference = document.querySelector("button[data-action='decrement']");
const sum = document.querySelector("button[data-action='increment']");
const result = document.querySelector("#value");
let total = 0;

const decrement = () => {
  total -= 1;
  result.textContent = total;
};

const increment = () => {
  total += 1;
  result.textContent = total;
};

difference.addEventListener("click", decrement);
sum.addEventListener("click", increment);
