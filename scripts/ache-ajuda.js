let carregando = false;
let dados = [];
const referencias = document.querySelector(".referencias");
const seletorEstado = document.querySelector("#selecao");

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
    const telefones = [];
    for (const telefone of profissional.telefones) {
        telefones.push(`<a href="tel:${telefone}">${telefone}</a>`);
    }

    return `
        <section class="cartao-profissional">
            <h4>${profissional.nome}</h4>
            <p class="especialidade">${profissional.especialidade}</p>
            <p>Telefones: ${telefones.join(' / ')}</p>
            <p>E-mail: <a href="mailto:${profissional.email}">${profissional.email}</a></p>
        </section>
    `;
}

function exibirInformacoes(estado) {
    if (estado.nome) {
        const locais = [];
        for (const local of estado.locais) {
            locais.push(criarLocal(local));
        }

        const profissionais = [];
        for (const profissional of estado.profissionais) {
            profissionais.push(criarProfissional(profissional));
        }

        referencias.innerHTML = `
            <section class="lista-enderecos">${locais.join('')}</section>
            <section class="profissionais">${profissionais.join('')}</section>
        `;
    } else {
        referencias.innerHTML = `
            <p class="aviso"><i class="fa-solid fa-circle-info fa-xl"></i> Nenhum dado encontrado para o estado selecionado.</p>
        `;
    }
}

/* Adiciona evento de mudança no seletor de estado */
seletorEstado.addEventListener('change', (event) => {
    for (const estado of dados) {
        if (estado.nome === seletorEstado.value) {
            exibirInformacoes(estado);
            return;
        };
    };
    exibirInformacoes({});
});

