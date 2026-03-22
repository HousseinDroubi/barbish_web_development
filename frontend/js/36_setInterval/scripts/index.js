const button_start = document.querySelector("#button_start");
const button_clear = document.querySelector("#button_clear");
const text = document.querySelector("#text");

let interval;
const start = () => {
  interval = setInterval(() => {
    text.classList.toggle("red");
  }, 1000);
};

const clear = () => {
  if (interval) {
    clearInterval(interval);
  }
};

button_start.addEventListener("click", start);
button_clear.addEventListener("click", clear);
