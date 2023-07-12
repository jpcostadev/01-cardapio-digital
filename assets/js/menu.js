const btnMobile = document.getElementById("btn-mobile");
const nav = document.getElementById("nav");

// Função para alternar a visibilidade do menu
function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }

  nav.classList.toggle("active"); // Adiciona ou remove a classe "active" do elemento nav

  const isActive = nav.classList.contains("active"); // Verifica se o menu está ativo
  btnMobile.setAttribute("aria-expanded", isActive); // Atualiza o atributo aria-expanded do botão

  if (isActive) {
    btnMobile.setAttribute("aria-label", "Fechar Menu"); // Define o atributo aria-label como "Fechar Menu" quando o menu está ativo
  } else {
    btnMobile.setAttribute("aria-label", "Abrir Menu"); // Define o atributo aria-label como "Abrir Menu" quando o menu não está ativo
  }
}

// Função para fechar o menu
function closeMenu() {
  if (nav.classList.contains("active")) {
    // Verifica se o menu está ativo
    nav.classList.remove("active"); // Remove a classe "active" do elemento nav
    btnMobile.setAttribute("aria-expanded", "false"); // Define o atributo aria-expanded como "false"
    btnMobile.setAttribute("aria-label", "Abrir Menu"); // Define o atributo aria-label como "Abrir Menu"
  }
}

btnMobile.addEventListener("click", toggleMenu); // Adiciona o evento de clique ao botão para alternar o menu
btnMobile.addEventListener("touchstart", toggleMenu); // Adiciona o evento de touchstart ao botão para alternar o menu

const linksMenu = document.querySelectorAll("#nav a");
linksMenu.forEach((link) => {
  link.addEventListener("click", closeMenu); // Adiciona o evento de clique aos links do menu para fechar o menu
});

// Sub-menu -------------------------------------

const subMenu = document.querySelectorAll(".sub-menu");
const ativarSubMenu = document.querySelectorAll(".btn-sub");

function subActive(event) {
  const clicado = event.currentTarget; // Obtém o elemento clicado

  // Percorre todos os elementos ativarSubMenu
  ativarSubMenu.forEach((element) => {
    // Verifica se o elemento atual é diferente do elemento clicado e tem a classe "sub-active"
    if (element !== clicado && element.classList.contains("sub-active")) {
      element.classList.remove("sub-active"); // Remove a classe "sub-active" dos elementos que não foram clicados
    }
  });

  clicado.classList.toggle("sub-active"); // Adiciona ou remove a classe "sub-active" do elemento clicado
  nav.classList.toggle("active"); // adiciona a classe active no nav para segurar o menu ativo durante a escolha do sub-menu
}

// Verifica se o menu foi fechado e desativa o submenu

function verificaSub() {
  if (a.classList.contains("active")) {
  }
}

// Adiciona o evento de clique a cada elemento ativarSubMenu
ativarSubMenu.forEach((element) => {
  element.addEventListener("click", subActive);
});
