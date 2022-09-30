const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {}
const listaEL = document.querySelector(".lista");
const listasEls = document.querySelectorAll(".lista li");
for (let el of listasEls) {
  el.remove();
}

for (let iten of cosasQueAprendimos) {
  const nuevoEL = document.createElement("li");
  nuevoEL.textContent = iten.tema;
  const classinten = iten.class || "iten";

  nuevoEL.classList.add(classinten);
  listaEL.appendChild(nuevoEL);
  console.log(nuevoEL);
}

main();
