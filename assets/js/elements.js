// ______________ sumir elemento quando config for clicado____________//

const botoesRodape = document.querySelectorAll(".grid-menu li");
const header = document.querySelector("header");
const main = document.querySelector("main");
const elementoPedidos = document.querySelector(".section-pedidos");

const configGeral = document.querySelector(".configuracoes");

//botões individuais
const home = document.querySelector(".home");
const pedidos = document.querySelector(".pedidos-btn");
const chat = document.querySelector(".chat");
const config = document.querySelector(".config");
configGeral.classList.add("off");

function sumirElemento(event) {
  const clicado = event.currentTarget;
  if (
    clicado.classList.contains("active") &&
    clicado.classList.contains("config")
  ) {
    header.classList.add("off");
    main.classList.add("off");
    configGeral.classList.remove("off");
  } else {
    header.classList.remove("off");
    main.classList.remove("off");
    configGeral.classList.add("off");
    elementoPedidos.classList.add("off");
  }
}

botoesRodape.forEach((botao) => {
  botao.addEventListener("click", sumirElemento);
});

//__________Ativa os itens do menu_______//

const itensMenu = document.querySelectorAll(".btn-sub a");
const itensSubMenu = document.querySelectorAll(".sub-menu a");

function ativarItensMenu(event) {
  const selecionado = event.currentTarget;
  if (!selecionado.classList.contains("active")) {
    itensMenu.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  }
}

itensMenu.forEach((item) => {
  item.addEventListener("click", ativarItensMenu);
});

//____Ativa a página Pedidos quando for selecionada____//

function ativarPedidos(event) {
  const botaoClicado = event.currentTarget;
  if (
    botaoClicado.classList.contains("pedidos-btn") &&
    botaoClicado.classList.contains("active")
  ) {
    elementoPedidos.classList.remove("off");
    header.classList.add("off");
    main.classList.add("off");
    configGeral.classList.add("off");
  } else {
    elementoPedidos.classList.add("off");
  }
}

botoesRodape.forEach((botao) => {
  botao.addEventListener("click", ativarPedidos);
});
