document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll("#fundobotao button");

    // Associa cada botão ao seu respectivo link
    botoes[0].addEventListener("click", () => {
        window.location.href = "CadastroTurmas.html";
    });

    botoes[1].addEventListener("click", () => {
        window.location.href = "CadastroDeProfessor.html";
    });

    botoes[2].addEventListener("click", () => {
        window.location.href = "CadastroMaterias.html";
    });
});
