const button_start = document.querySelector("#button_start");
const button_clear = document.querySelector("#button_clear");
const text = document.querySelector("#text");

let timeout;
const start = () => {
  timeout = setTimeout(() => {
    text.classList.add("red");
  }, 1000);
};

const clear = () => {
  if (timeout) {
    clearTimeout(timeout);
  }
};

button_start.addEventListener("click", start);
button_clear.addEventListener("click", clear);
