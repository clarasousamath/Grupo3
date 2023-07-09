const camposObrigatorios = document.querySelectorAll(".campo-obrigatorio");
const formularioLogin = document.querySelector('#formularioLogin');

formularioLogin.addEventListener('submit', (event) => {
    const valido = validarFormulario();

    if (valido) {
    } else {
        event.preventDefault();
        alert("Dados inválidos. Por favor, corrija-os e tente novamente!");
    }
})

function validarFormulario() {
    let formularioValido = true;

    for (const campo of camposObrigatorios) {
        const input = buscarInput(campo);
        const expEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (input.type === 'email' && input.value && !expEmail.test(input.value)) {
            campo.classList.add('campo-invalido');
            campo.classList.add('erro');
            formularioValido = false;
        } else {
            campo.classList.remove('campo-invalido');
            campo.classList.remove('erro');
        }

        if (!input.value || input.value.trim().length === 0) {
            campo.classList.add('campo-vazio');
            campo.classList.add('erro');
            formularioValido = false;
        } else {
            campo.classList.remove('campo-vazio');
            campo.classList.remove('erro');
        }
    }
    return formularioValido;
}

function buscarInput(campo) {
    return campo.childNodes[3].childNodes[3];
}