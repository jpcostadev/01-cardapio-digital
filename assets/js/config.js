// Função que abre o menu de idiomas quando for clicado
const gridIdiomas = document.querySelector(".js-grid-idioma");

function listarIdiomas(event) {
  const clicado = event.pointerType;

  // Verifica se o evento foi disparado por um toque (touch)
  if (clicado === "touch") {
    return; // Retorna sem fazer nada
  }

  // Alterna a classe "active" do menu de idiomas
  gridIdiomas.classList.toggle("active");
}

gridIdiomas.addEventListener("click", listarIdiomas);
gridIdiomas.addEventListener("touchstart", listarIdiomas);

// Fecha o menu de idiomas quando o usuário clica fora dele
document.addEventListener("click", function (event) {
  const target = event.target;
  const isInsideMenu = target.closest(".js-grid-idioma");
  const isInsideButton = target.closest(".js-grid-idioma button");

  // Verifica se o clique foi dentro do menu ou no botão de idiomas
  if (!isInsideMenu && !isInsideButton) {
    // Remove a classe "active" do menu de idiomas
    gridIdiomas.classList.remove("active");
  }
});

// Aplica o idioma clicado
const idiomas = document.querySelectorAll(".js-grid-idioma section");

function aplicarIdioma(idioma) {
  const idiomaClicado = idioma.currentTarget;

  // Remove a classe "active" de todos os idiomas
  idiomas.forEach((idioma) => {
    idioma.classList.remove("active");
  });

  // Adiciona a classe "active" ao idioma clicado
  idiomaClicado.classList.add("active");

  // Move o idioma clicado para o topo da lista
  const listaIdiomas = idiomaClicado.parentNode;
  listaIdiomas.insertBefore(idiomaClicado, listaIdiomas.firstChild);
}

function handleTouchStart(event) {
  event.preventDefault();
  aplicarIdioma(event);
}

idiomas.forEach((element) => {
  element.addEventListener("click", aplicarIdioma);
  element.addEventListener("touchstart", handleTouchStart);
});

// ______________ TRADUÇÃO DO SITE  ____________//
