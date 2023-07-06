let carregando = false;
let dados = {};
const referencias = document.querySelector(".referencias");

function carregarDados() {
    // O carregamento só irá funcionar se a página for carregada através de um servidor web
    fetch("../json/ache-ajuda.json")
        .then((resposta) => {
            return resposta.json();
        })
        .then((resposta) => {
            dados = resposta;

            // exibirInformacoes(dados[0]);
        })
        .catch((erro) => {
            console.log(erro);
            alert("Erro ao carregar a página. Por favor, tente novamente!");
        })
}

carregarDados();

function criarLocal(local) {
    const telefones = [];
    for (const telefone of local.telefones) {
        telefones.push(`<a href="tel:${telefone}">${telefone}</a>`);
    }

    return `
        <address>
            <h3>${local.nome}</h3>
            <ul>
                <li>${local.endereco.logradouro}, ${local.endereco.numero} - ${local.endereco.complemento}.</li>
                <li>${local.endereco.bairro}, ${local.endereco.cidade} - ${local.endereco.uf}.</li>
                <li>Telefones: ${telefones.join(' / ')}</li>
                <li>Acesse <a href="${local.link}" target="_blank">aqui</a> a página do local</li>
            </ul>
        </address>
    `;
}

function criarProfissional(profissional) {

}

function exibirInformacoes(estado) {
    const locais = [];
    for (const local of estado.locais) {
        locais.push(criarLocal(local));
    }

    referencias.innerHTML = `
        <section class="lista-enderecos">${locais.join('')}</section>
    `;
}