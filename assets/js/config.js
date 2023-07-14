// Função que abre o menu de idiomas quando for clicado

const gridIdiomas = document.querySelector(".js-grid-idioma");

function listarIdiomas(event) {
  const clicado = event.currentTarget;
  if (clicado) {
    gridIdiomas.classList.toggle("active");
  }
}

gridIdiomas.addEventListener("click", listarIdiomas);

// _________________APLICAR O IDIOMA CLICADO__________//

const idiomas = document.querySelectorAll(".js-grid-idioma section");

function aplicarIdioma(idioma) {
  const idiomaClicado = idioma.currentTarget;

  if (!idiomaClicado.classList.contains("active")) {
    idiomas.forEach((idioma) => {
      idioma.classList.remove("active");
    });
    idiomaClicado.classList.add("active");
  }
}

idiomas.forEach((element) => {
  element.addEventListener("click", aplicarIdioma);
});
