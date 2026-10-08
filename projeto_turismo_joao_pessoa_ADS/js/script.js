// JavaScript simples para interação do site
document.addEventListener("DOMContentLoaded", function () {
    console.log("Site de João Pessoa carregado com sucesso!");

    const links = document.querySelectorAll(".navbar a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Navegando para: " + link.textContent);
        });
    });
});
