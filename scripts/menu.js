const iconeMenu = document.querySelector('.icone-menu');
const opcoesMenu = document.querySelector('.opcoes-menu');
const opcoesSubmenu = document.querySelector('.opcoes-submenu');
const submenuArtigos = document.querySelector('.submenu-artigos');

iconeMenu.addEventListener('click', () => {
    const visivel = menuVisivel(opcoesMenu);

    if (visivel == true) {
        esconderMenu(opcoesMenu);
    } else {
        mostrarMenu(opcoesMenu);
    }
});

function esconderMenu(menu) {
    menu.classList.add('mostrar-menu');
}

function mostrarMenu(menu) {
    menu.classList.remove('mostrar-menu');
}

function menuVisivel(menu) {
    return !menu.classList.contains('mostrar-menu');
}

// submenu

submenuArtigos.addEventListener('click', () => {
    const visivel = menuVisivel(opcoesSubmenu);

    if (visivel == true) {
        esconderMenu(opcoesSubmenu);
    } else {
        mostrarMenu(opcoesSubmenu);
    }
})
