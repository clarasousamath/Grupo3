const form = document.querySelector("#form");
const nomeInput = document.querySelector("#name");
const sobrenomeInput = document.querySelector("#sname");
const emailInput = document.querySelector("#email");
const telefoneInput = document.querySelector("#telefone");
const mensagemInput = document.querySelector("#msg");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio:
    if(nomeInput.value === ""){
        alert("Por favor, preencha seu nome")
        return;
    }
});