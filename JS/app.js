const idFilha = document.getElementById("id-filha");
const idAnterior = document.getElementById("anterior");
const idProximo = document.getElementById("proximo");

const imagens = [
  "url('../public/img/menino.jpg')",
  "url('../public/img/flor.jpg')",
  "url('../public/img/relogio.jpg')"
];

let indiceAtual = 0;

function atualizar() {
  idFilha.style.backgroundImage = imagens[indiceAtual];
}

idProximo.addEventListener("click", () => {
  indiceAtual++;
  if (indiceAtual >= imagens.length) {
    indiceAtual = 0;
  }
  atualizar();
});

idAnterior.addEventListener("click", () => {
  indiceAtual--;
  if (indiceAtual < 0) {
    indiceAtual = imagens.length - 1;
  }
  atualizar();
});

atualizar();
