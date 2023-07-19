const botaoSanduich = document.querySelector(".js-sanduiche input");
const botaoHotdog = document.querySelector(".js-hotdog input");
const botaoDoces = document.querySelector(".js-doces input");
const botaoBebidas = document.querySelector(".js-bebidas input");
const botaoAdicionais = document.querySelectorAll(".btn-adicionais");
const botaoPedir = document.querySelector(".btn-pedir");

// Páginas
const paginaSanduich = document.querySelector(".sanduiche-conteudo");
const paginaAdicionais = document.querySelectorAll(".adicionais");

// Grid ingredientes

const gridIngredientes = document.querySelector(".ingredientes");

// Abre o menu de sanduíches quando clicado no botão //

function abrirSanduich() {
  const check = botaoSanduich.checked;
  if (check === true) {
    paginaSanduich.classList.toggle("off");
  } else {
    paginaSanduich.classList.add("off");
  }
}

botaoSanduich.addEventListener("change", abrirSanduich);

//_____________________________________________________//

//____________Ativar Adicionais_____________//

function abrirAdicionais(event) {
  const botaoClicado = event.currentTarget;
  const target = botaoClicado.dataset.target;
  const paginas = document.querySelectorAll(".adicionais");

  paginas.forEach((pagina) => {
    const dataTargetValue = pagina.dataset.target;
    if (dataTargetValue && dataTargetValue.startsWith(target)) {
      console.log(dataTargetValue);
      // Aqui você pode fazer o que quiser com o elemento que possui o atributo "data-target" começando com o valor de "target"
      // Por exemplo, você pode remover a classe "off" do elemento ou adicionar alguma outra classe ou manipular de outra forma.
      pagina.classList.toggle("off");
    } else {
      pagina.classList.add("off");
    }
  });
}

botaoAdicionais.forEach((botao) => {
  botao.addEventListener("click", abrirAdicionais);
});

//_____________________________________________________//

//____________Ativar Sabores_____________//

const sabor = document.querySelectorAll(".selecionar-sabor");

function ativarSabor(event) {
  const sabor = event.currentTarget;
  const target = sabor.dataset.target;

  const clicado = document.querySelector(`.${target}`);
  if (clicado) {
    clicado.classList.toggle("off");
  } else {
    sabor.forEach((item) => {
      item.classList.remove("off");
    });
  }
}

sabor.forEach((item) => {
  item.addEventListener("change", ativarSabor);
});
