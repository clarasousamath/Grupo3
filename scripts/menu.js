const iconeMenu = document.querySelector('.icone-menu');
const opcoesMenu = document.querySelector('.opcoes-menu');

iconeMenu.addEventListener('click', () => {
    const visivel = menuVisivel();

    if (visivel == true) {
        esconderMenu();
    } else {
        mostrarMenu();
    }
});

function esconderMenu() {
    opcoesMenu.classList.add('mostrar-menu');
}

function mostrarMenu() {
    opcoesMenu.classList.remove('mostrar-menu');
}

function menuVisivel() {
    return !opcoesMenu.classList.contains('mostrar-menu');
}
