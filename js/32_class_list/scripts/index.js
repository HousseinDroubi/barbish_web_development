const button_add = document.querySelector("#button_add");
const button_remove = document.querySelector("#button_remove");
const button_toggle = document.querySelector("#button_toggle");
const text = document.querySelector("#text");

const add = () => {
  text.classList.add("red");
};

const remove = () => {
  text.classList.remove("red");
};

const toggle = () => {
  text.classList.toggle("red");
};

button_add.addEventListener("click", add);
button_remove.addEventListener("click", remove);
button_toggle.addEventListener("click", toggle);
