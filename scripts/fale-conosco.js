const form = document.getElementById("formulario");
const campos = document.querySelectorAll(".requerido");
const telefone = document.querySelector("#telefone");
const spans = document.querySelectorAll(".obrigatorio");
//Validador de e-mail:
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Validando todo o formulário:
form.addEventListener("submit", (event) => {
    event.preventDefault();
    nameValidate();
    nameValidate2();
    emailValidate();
    telefoneValidate();
    mensagemValidate();
});

//Chamando o erro na interação de validação:
function setError(index){
    campos[index].style.border = "2px solid red";
    spans[index].style.display = "block";
}

//Removendo erro de validação:
function removerErro(index){
    campos[index].style.border = "";
    spans[index].style.display = "none";
}

//Validando Tamanho do Campo Nome:
function nameValidate (){
    if(campos[0].value.length < 4){
        setError(0);
    }
    else {
        removerErro(0);
    }
}

//Validando Tamanho do Campo Sobrenome:
function nameValidate2 (){
    if(campos[1].value.length < 4){
        setError(1);
    }
    else {
        removerErro(1);
    }
}

//Validando E-mail:
function emailValidate (){
    if(emailRegex.test(campos[2].value)){
        removerErro(2);
    }
    else {
        setError(2);
    }
}

//Validando Telefone:
function telefoneValidate (){
    if(campos[3].value.length < 8){
        setError(3);
    }
    else {
        removerErro(3);
    }
}

//Validando Texto da Mensagem:
function mensagemValidate (){
    if(campos[4].value.length < 4){
        setError(4);
    }
    else {
        removerErro(4);
    }
}