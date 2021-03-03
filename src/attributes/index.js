const input = document.createElement("input");
/* Atributos */
input.type = "text";
input.placeholder = "Inserta tu nombre";
input.autocomplete = "name";
const main = document.querySelector("main");
main.insertAdjacentElement("afterbegin", input);
