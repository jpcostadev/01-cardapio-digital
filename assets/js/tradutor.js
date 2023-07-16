const ptBR = document.querySelectorAll(".pt");
const enUS = document.querySelectorAll(".en");
const esES = document.querySelectorAll(".es");
const menuIdioma = document.querySelectorAll(".js-grid-idioma section");

function ativarIdiomaPt(event) {
  const idiomaClicado = event.currentTarget;
  if (!idiomaClicado.classList.contains("idioma-pt")) {
    ptBR.forEach((pt) => {
      pt.classList.remove("active");
    });
  } else {
    ptBR.forEach((pt) => {
      pt.classList.add("active");
    });
  }
}
function ativarIdiomaEn(event) {
  const idiomaClicado = event.currentTarget;
  if (!idiomaClicado.classList.contains("idioma-en")) {
    enUS.forEach((pt) => {
      pt.classList.remove("active");
    });
  } else {
    enUS.forEach((pt) => {
      pt.classList.add("active");
    });
  }
}
function ativarIdiomaEs(event) {
  const idiomaClicado = event.currentTarget;
  if (!idiomaClicado.classList.contains("idioma-es")) {
    esES.forEach((pt) => {
      pt.classList.remove("active");
    });
  } else {
    esES.forEach((pt) => {
      pt.classList.add("active");
    });
  }
}

menuIdioma.forEach((idioma) => {
  idioma.addEventListener("click", ativarIdiomaPt);
  idioma.addEventListener("click", ativarIdiomaEn);
  idioma.addEventListener("click", ativarIdiomaEs);
  idioma.addEventListener("touchstart", ativarIdiomaPt);
  idioma.addEventListener("touchstart", ativarIdiomaEn);
  idioma.addEventListener("touchstart", ativarIdiomaEs);
});

ptBR.forEach((item) => {
  item.classList.add("active");
});
