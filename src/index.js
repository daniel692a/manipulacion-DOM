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

/* insertAdjacentElement */
const nodo = document.createElement("span");
nodo.append("OWO");
const ref = document.querySelector(".title");
console.log(ref, nodo);
ref.insertAdjacentElement("beforebegin", nodo); //->Lo inserta antes de la referencia
ref.insertAdjacentElement("afterbegin", nodo); //->Lo coloca justo después de donde inica mi referencia
ref.insertAdjacentElement("beforeend", nodo); //->Lo coloca justo antes de donde cierra mi referencia
ref.insertAdjacentElement("afterend", nodo); //->Lo coloca después del cierre del nodo de referencia

const content = document.querySelector("#textarea");
const btn = document.querySelector(".btn");
const trad = document.querySelector(".trad");
btn.addEventListener("click", () => {
  trad.innerHTML = content.value;
});
