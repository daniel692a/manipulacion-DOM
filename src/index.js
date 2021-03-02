const parent = document.querySelector(".welcome");
const h3 = document.createElement("h3");

/* Le digo al padre que agregue mi elemento */
parent.appendChild(h3);

const text = document.createTextNode("Soy hecho con JS");

/* Agrego mi text a h3 */
h3.appendChild(text);

const parentContainer = document.querySelector(".container");
parentContainer.append(
  document.createElement("h4"),
  document.createElement("div"),
  "Wenas"
);

const node = document.createElement("h2");
const parentElement = document.querySelector(".form");
const reference = document.querySelector(".name");
parentElement.insertBefore(node, reference);
