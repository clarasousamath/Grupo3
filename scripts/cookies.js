// Resgatando elementos da DOM
const alertaCookies = document.querySelector('.cookies');
const cookiesFechar = document.querySelector('.cookies-fechar>a');

cookiesFechar.addEventListener('click', () => {
    esconderAlertaCookies();
});

if (detectarAceiteCookies()) {
    // Não deve-se exibir o aviso de cookies, já que o usuário já os aceitou.
} else {
    exibirAlertaCookies();
}

function exibirAlertaCookies() {
    alertaCookies.style.display = 'flex';
}

function esconderAlertaCookies() {
    alertaCookies.classList.add('esconder');
    localStorage.setItem('raizesCura.cookies', 'true');
}

function detectarAceiteCookies() {
    return localStorage.getItem('raizesCura.cookies') == 'true';
}

