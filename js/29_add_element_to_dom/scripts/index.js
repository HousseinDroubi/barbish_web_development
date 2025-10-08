const main_section = document.querySelector("#main_section");

const title = document.createElement("h1");
title.innerText = "Hi from JS";

main_section.appendChild(title);

const text = document.createElement("p");
text.innerHTML = `This is a paragraph with <strong>bold</strong> text`;

main_section.appendChild(text);
