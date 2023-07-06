// Informações relacionadas às imagens do carrossel
const imagens = [
    {
        endereco: './imagens/index/tela-inicial-1.jpg',
        texto: 'Técnicas de meditação',
        descricao: 'Imagem 1 da tela inicial do carrossel. Imagem com uma mulher meditando em cima de um tapete rosa, em posição de ioga, vestindo uma calça jeans azul e uma blusa branca, e com cabelos amarrados, com gato dormindo ao lado esquerdo da mulher. Ao fundo, várias plantas e flores em jarros. Uma caneca vermelha com desenho de coração branco ao lado direito da mulher. Ao fundo da imagem, uma parede de cor verde.'
    },
    {
        endereco: './imagens/index/tela-inicial-2.jpg',
        texto: 'Hábitos saudáveis',
        descricao: 'Imagem 2 da tela inicial do carrossel. Imagem de homem meditando em cima de uma mesa, em posição de ioga, vestindo uma calça azul, camisa social branca e gravata vermelha. Ao lado direito do homem, um jarro azul com planta, e ao lado esquerdo, uma caneca vermelha com uma bebida quente. Por trás do homem tem um céu em camadas azúis, cheio de nuvens. Em volta do homem, objetos flutuando (bola colorida, pasta de arquivos amarela, lâmpada amarela e ficha de papel)'
    },
    {
        endereco: './imagens/index/tela-inicial-3.jpg',
        texto: 'Receba ajuda',
        descricao: 'Imagem 3 da tela inicial do carrossel. Imagem de família em um jardim, com uma casa azul e uma cerca ao fundo da imagem e núvens e pássaros no céu. Mulher vestindo blusa vermelha, calça azul e descalça, fazendo o número quatro com as pernas e gesto de agradecimento com as mãos. Menina ao lado direito da mulher, em cima do tapete, vestindo uma blusa rosa clara e azul clara, também descalça, e espelhando a posição da mulher. Ao lado esquerdo da mulher, tem um menino vestindo camisa azul e calça vermelha, usando sapato azul, sentado na grama, brincando com cachorro branco com manchas caramelo. E nos dois lados da imagem, temos duas plantas e uma libélula.'
    }
];

// Recuperando na DOM o conteiner do carrossel
const conteinerCarrossel = document.querySelector('.conteiner-carrossel');
const carrossel = document.querySelector(".carrossel");

// Renderizando o carrossel
conteinerCarrossel.innerHTML = criarCarrossel(imagens);

/**
 * Renderiza individualmente uma imagem do carrossel
 * @param {{endereco: string, texto: string, descricao: string}} imagem 
 * @returns retorna uma string do html necessário para uma imagem do carrossel
 */
function criarImagem(imagem) {
    return `
        <figure>
            <img src="${imagem.endereco}" alt="${imagem.descricao}">
            <figcaption>${imagem.texto}</figcaption>
        </figure> 
    `;
}

/**
 * Renderiza completamente o carrossel com as suas imagens
 * @param {[{endereco: string, texto: string, descricao: string}]} imagens 
 * @returns retorna uma string do html necessário para o carrossel
 */
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

    let navegacao = "";
    for (var i = 1; i <= imagens.length; i++) {
        navegacao += `<a href="#imagem${i}">&#9679;</a>`
    }

    return `
        <div class="carrossel">
            ${listaImagens}
        </div>
        <div class="navegacao-carrossel">
           ${navegacao}
        </div>
    `
}

/* Inserindo animação do carrossel com função nativa do js */
let numero = 1;
let pausado = false;

/* Código responsável pela animação do carrossel */
setInterval(() => {
    if (!pausado) {
        const imagem = document.getElementById(`imagem${numero}`);
        carrossel.scroll({
            left: imagem.getBoundingClientRect().width * (numero - 1),
            behavior: 'smooth'
        });

        numero = (numero >= imagens.length ? 1 : numero + 1);
    }

}, 2500);

/* Código responsável por pausar a animação quando o mouse fica em cima do carrossel */
carrossel.addEventListener("mouseenter", () => {
    pausado = true;
});

/* Código responsável por retomar a animação quando o mouse sai de cima do carrossel */
carrossel.addEventListener("mouseleave", () => {
    pausado = false;
});


