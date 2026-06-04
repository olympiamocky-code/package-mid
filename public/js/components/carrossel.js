const elemImagem = document.querySelectorAll(".slides img");
const tamanhoLista = elemImagem.length - 1;

let index = 0;

elemBtnleft.addEventListener("click", () => {
  index--;

  if (index < 0) index = tamanhoLista;
  atualizarCaarrossel();
});

elemBtnright.addEventListener("click", () => {
  incrementarIndex();
  atualizarCaarrossel();
});

const incrementarIndex = () => {
  index++;
  if (index > tamanhoLista) index = 0;
};

const atualizarCaarrossel = () => {
  elemSlides.style.transform = `translateX(-${index * 100}%)`;
};

setInterval(() => {
  incrementarIndex();
  atualizarCaarrossel();
}, 3000);
