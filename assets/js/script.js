window.addEventListener("load", function () {
  // Verifica se o navegador suporta o recurso de limpar o cache
  if ("caches" in window) {
    // Limpa o cache atualizado
    caches.keys().then(function (cacheNames) {
      cacheNames.forEach(function (cacheName) {
        caches.delete(cacheName);
      });
    });
  }
});

// Gera um número de versão exclusivo para ser usado como parâmetro de consulta
// Gere um número de versão exclusivo com base na data e hora atual
const versao = new Date().getTime();

// Atualize os URLs dos arquivos estáticos com o parâmetro de versão
const cssUrl = `./assets/css/style.css?v=${versao}`;
const jsUrl = `./assets/js/script.js?v=${versao}`;

// Use os URLs atualizados nos elementos HTML correspondentes
document.querySelector("link[href='./assets/css/style.css']").href = cssUrl;
document.querySelector("script[src='./assets/js/script.js']").src = jsUrl;
