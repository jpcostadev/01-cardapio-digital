// // Gera uma string com a data e hora atual
// const timestamp = new Date().getTime();

// // Limpa o cache adicionando um parâmetro de consulta com a data e hora atual aos arquivos CSS e JavaScript
// const links = document.getElementsByTagName("link");
// for (let i = 0; i < links.length; i++) {
//   if (links[i].getAttribute("rel") === "stylesheet") {
//     const href = links[i].getAttribute("href");
//     links[i].setAttribute("href", `${href}?v=${timestamp}`);
//   }
// }

// const scripts = document.getElementsByTagName("script");
// for (let i = 0; i < scripts.length; i++) {
//   const src = scripts[i].getAttribute("src");
//   scripts[i].setAttribute("src", `${src}?v=${timestamp}`);
// }
