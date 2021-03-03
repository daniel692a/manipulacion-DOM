const node = document.querySelector("#name");
/* const parent = node.parentElement;
parent.removeChild(node); */
node.remove();

const node2 = document.querySelector(".text-content");
const parent = node2.parentElement;
const newNode = document.createElement("h1");
newNode.textContent = "El bicho siu";
parent.replaceChild(newNode, node2);
