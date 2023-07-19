// const formulario = document.getElementById("form");
// const botao = document.querySelectorAll(".btn-pedir");

// function formularioEnviado(resposta) {
//   console.log(resposta);
//   if (resposta.ok) {
//     formulario.innerHTML =
//       "<p class='msg-enviada'>Pedido Realizado com <span>sucesso1</span>, só aguardar!</p>";
//   } else {
//     formulario.innerHTML =
//       " <p class='msg-nao-enviada'> <span>Erro</span> ao realizar o pedido, chame um atendente </p>";
//   }
// }

// function enviarFormulario(event) {
//   event.preventDefault();
//   const botaoClicado = event.submitter;
//   const form = new FormData(formulario);

//   const dados = {
//     nome: form.get("nome"),
//     mesa: form.get("mesa"),
//     whatsapp: form.get("whatsapp"),
//   };

//   if (botaoClicado) {
//     if (dados.nome === "" || dados.whatsapp === "" || dados.mesa === "") {
//       alert("Preencha os campos Nome, Mesa, Whatsapp");
//       return;
//     } else if (dados.whatsapp.length < 7 || isNaN(dados.whatsapp)) {
//       alert("Digite um número válido");
//       return;
//     }

//   }
// }

// formulario.addEventListener("submit", enviarFormulario);
