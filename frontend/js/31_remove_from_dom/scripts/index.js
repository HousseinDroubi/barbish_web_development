const main_section = document.querySelector("#main_section");
const button_add = document.querySelector("#btn_add");
const button_remove = document.querySelector("#btn_remove");

let title = undefined;
let text = undefined;

const addToDOM = () => {
  if (!title && !text) {
    title = document.createElement("h1");
    title.innerText = "Hi from JS";

    main_section.appendChild(title);

    text = document.createElement("p");
    text.innerHTML = `This is a paragraph with <strong>bold</strong> text`;

    main_section.appendChild(text);
  }
};

const removeFromDOM = () => {
  if (text && title) {
    main_section.removeChild(title);
    main_section.removeChild(text);
    console.log(title);
    console.log(text);
    text = undefined;
    title = undefined;
  }
};

button_add.addEventListener("click", addToDOM);
button_remove.addEventListener("click", removeFromDOM);
