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

//Validando Tamanho do Campo Telefone:
function telefoneValidate (){
    if(campos[3].value.length < 8){
        setError(3);
    }
    else {
        removerErro(3);
    }
}

// Valida e bloqueia outras entradas que não sejam números:
telefone.addEventListener('beforeinput', (event) => {
    if (event.data && '0123456789'.indexOf(event.data) < 0) {
        event.preventDefault();
    } else if (event.data && telefone.value.length > 14) {
        event.preventDefault();
    }
});

telefone.addEventListener('keypress', (event) => {
    telefone.value = formatarTelefone(telefone.value.replace(/\D/g, ''));
});

/**
 * Formata um número de telefone
 * @param {string} texto 
 * @returns string do telefone formatado. Ex.: 84999999999 -> (84) 99999-9999.
 */
function formatarTelefone(texto) {
    if (texto.length >= 2) {
        const ddd = texto.substring(0, 2);
        const parte1 = texto.substring(2, 6);
        const parte2 = texto.substring(6);

        if (parte2) {
            if (texto.length < 10) {
                return `(${ddd}) ${parte1}-${parte2}`;
            } else {
                const parte1 = texto.substring(2, 7);
                const parte2 = texto.substring(7);

                return `(${ddd}) ${parte1}-${parte2}`;
            }
        } else if (parte1) {
            return `(${ddd}) ${parte1}`;
        } else {
            return `(${ddd}`;
        }
    } else if (texto.length > 0) {
        return '(' + texto;
    } else {
        return '';
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

//Validando Marcação do Checkbox:
