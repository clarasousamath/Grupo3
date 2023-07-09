const camposObrigatorios = document.getElementsByClassName('input-box');
const form = document.querySelector('#formularioCadastro');

form.addEventListener('submit', (event) => {
    const valido = validarFormulario();

    if (valido) {
        alert("Cadastro realizado com sucesso!")
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

        if (input.type) {
            // O usuário preencheu o campo
            if (input.value) {
                campo.classList.remove('campo-vazio');
                campo.classList.remove('erro');

                // O e-mail preenchido é válido
                if (input.type === 'email') {
                    if (expEmail.test(input.value)) {
                        campo.classList.remove('campo-invalido');
                        campo.classList.remove('erro');
                    } else {
                        campo.classList.add('campo-invalido');
                        campo.classList.add('erro');
                        formularioValido = false;
                    }
                }

            } else if (input.type === 'checkbox') {
                if (input.checked) {
                    campo.classList.remove('campo-vazio');
                    campo.classList.remove('erro');
                } else {
                    campo.classList.add('campo-vazio');
                    campo.classList.add('erro');
                    formularioValido = false;
                }
            } else {
                campo.classList.add('campo-vazio');
                campo.classList.add('erro');
                formularioValido = false;
            }
        }

        // if (input.type === 'email' && input.value && !expEmail.test(input.value)) {
        //     campo.classList.add('campo-invalido');
        //     campo.classList.add('erro');
        //     formularioValido = false;
        // } else {
        //     campo.classList.remove('campo-invalido');
        //     campo.classList.remove('erro');
        // }

        // if (!input.value || input.value.trim().length === 0) {
        //     campo.classList.add('campo-vazio');
        //     campo.classList.add('erro');
        //     formularioValido = false;
        // } else {
        //     campo.classList.remove('campo-vazio');
        //     campo.classList.remove('erro');
        // }
        // if (input.type === 'checkbox' && !input.checked) {
        //     campo.classList.add('campo-vazio');
        //     campo.classList.add('erro');
        //     formularioValido = false;
        // } else {
        //     campo.classList.remove('campo-vazio');
        //     campo.classList.remove('erro');
        // }
    }
    return formularioValido;
}

function buscarInput(campo) {
    return campo.querySelector('input') ||
        campo.querySelector('textarea') ||
        campo.querySelector('select');
}