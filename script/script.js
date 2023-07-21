const rates = document.querySelectorAll(".rate");
const submit = document.querySelector("button");

const ratingState = document.querySelector(".ratingState");
const thankYouState = document.querySelector(".thankYouState");

const dynamiqueRate = document.querySelector(".dynamiqueRate");

let value = "";

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rate.style.background = "hsl(216, 12%, 54%)";
    rate.style.color = "hsl(0, 0%, 100%)";
    value = rate.textContent;
    console.log(value);
  });
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  ratingState.style.display = "none";
  thankYouState.style.display = "block";
  dynamiqueRate.textContent = value;
});
