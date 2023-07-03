const imagens = [
    {
        endereco: './imagens/index/tela-inicial-1.jpg',
        texto: 'Técnicas de meditação',
        descricaoImagem: 'Imagem 1 da tela inicial do carrossel. Imagem com uma mulher meditando em cima de um tapete rosa, em posição de ioga, vestindo uma calça jeans azul e uma blusa branca, e com cabelos amarrados, com gato dormindo ao lado esquerdo da mulher. Ao fundo, várias plantas e flores em jarros. Uma caneca vermelha com desenho de coração branco ao lado direito da mulher. Ao fundo da imagem, uma parede de cor verde.'
    },
    {
        endereco: './imagens/index/tela-inicial-2.jpg',
        texto: 'Hábitos saudáveis',
        descricaoImagem: 'Imagem 2 da tela inicial do carrossel. Imagem de homem meditando em cima de uma mesa, em posição de ioga, vestindo uma calça azul, camisa social branca e gravata vermelha. Ao lado direito do homem, um jarro azul com planta, e ao lado esquerdo, uma caneca vermelha com uma bebida quente. Por trás do homem tem um céu em camadas azúis, cheio de nuvens. Em volta do homem, objetos flutuando (bola colorida, pasta de arquivos amarela, lâmpada amarela e ficha de papel)'
    },
    {
        endereco: './imagens/index/tela-inicial-3.jpg',
        texto: 'Receba ajuda',
        descricaoImagem: 'Imagem 3 da tela inicial do carrossel. Imagem de família em um jardim, com uma casa azul e uma cerca ao fundo da imagem e núvens e pássaros no céu. Mulher vestindo blusa vermelha, calça azul e descalça, fazendo o número quatro com as pernas e gesto de agradecimento com as mãos. Menina ao lado direito da mulher, em cima do tapete, vestindo uma blusa rosa clara e azul clara, também descalça, e espelhando a posição da mulher. Ao lado esquerdo da mulher, tem um menino vestindo camisa azul e calça vermelha, usando sapato azul, sentado na grama, brincando com cachorro branco com manchas caramelo. E nos dois lados da imagem, temos duas plantas e uma libélula.'
    }
];

const conteinerCarrossel = document.querySelector('.conteiner-carrossel');

conteinerCarrossel.innerHTML = criarCarrossel(imagens);

function criarImagem(imagem) {
    return `
        <figure>
            <img src="${imagem.endereco}" alt="${imagem.descricaoImagem}">
            <figcaption>${imagem.texto}</figcaption>
        </figure> 
    `;
}

function criarCarrossel(imagens) {
    let listaImagens = "";
    let numero = 1;

    for (const imagem of imagens) {
        const imagemHtml = criarImagem(imagem);

        listaImagens += ` 
            <div id="imagem${numero}">
                ${imagemHtml}
            </div>
        `
        numero += 1;
    }

    return `
        <div class="carrossel">
            ${listaImagens}
        </div>
        <div class="navegacao-carrossel">
            <a href="#imagem1">&#9679;</a>
            <a href="#imagem2">&#9679;</a>
            <a href="#imagem3">&#9679;</a>
        </div>
    `
}

/* Inserindo animação do carrossel com função nativa do js*/
let operacao = "";
let numero = 1;

setInterval(() => {
    const imagem = document.getElementById(`imagem${numero}`);

    if (operacao === "sumir") {
        imagem.className = "";
        operacao = "";
        numero = (numero >= imagens.length ? 1 : numero + 1);
    } else {
        if (operacao === "aparecer") {
            operacao = "ficar"
        } else if (operacao === "ficar") {
            operacao = "sumir"
        } else {
            operacao = "aparecer";
        }

        imagem.classList.add(operacao);
    }

    // console.log(operacao);
}, 1000);


