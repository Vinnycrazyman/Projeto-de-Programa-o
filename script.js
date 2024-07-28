const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está saindo da escola, e se depara com uma enchente iminente, VOCÊ É O ÚNICO QUE PODE SALVAR O RIO GRANDE DO SUL.",
        alternativas: [
            {
                texto: "Será que eu consigo?",
                afirmacao: "No início se sentiu amedrontrado."
            },
            {
                texto: "Vamos salvá-los!",
                afirmacao: "Se colocou a disposição não importando oque acontecesse."
            }
        ]
    },
    {
        enunciado: "Você se recorda que tem vários lugares que são para as pessoas adotarem animais de estimação, você iria ajudar os animais ?",
        alternativas: [
            {
                texto: "Tenho mais coisas para me preocupar, esses animais em sua maioria sabem nadar, vão conseguir sozinhos !",
                afirmacao: "Não ligou para os animais, colocou a sua pessoa no primeiro plano, e nem cogitou salvá-los depois."
            },
            {
                texto: "Irei de van para salvá-los, assim poderei o máximo de animais de uma só vez !",
                afirmacao: "Mesmo estando sozinho, resolveu ajudar o máximo que pudesse."
            }
        ]
    },
    {
        enunciado: "Após salvar os cachorros, você acha uma fámilia desabrigada andando na rua sem rumo, te pedem uma carona, oque você faz ?",
        alternativas: [
            {
                texto: "Apenas continua seu caminho e ignora a fámilia.",
                afirmacao: "Continua pensando apenas em você mesmo."
            },
            {
                texto: "Vou tentar ajudar todas as pessoas que precisarem de minha ajuda.",
                afirmacao: "Ajuda a fámilia, e os leva para um lugar seguro."
            }
        ]
    },
    {
        enunciado: "Ainda na rua, você está passando em frente de uma escola, vê várias crianças andando pela água, oque você faz ?",
        alternativas: [
            {
                texto: "Resolve ajudar sem hesitar, igual às outras pessoas que você já ajudou.",
                afirmacao: "Está sendo completamente prestativo, acredito essa história terá um final feliz."
            },
            {
                texto: "Segue em frente, pois está pensando em voltar para casa salvar seus pertences",
                afirmacao: "Você devia ser mais piedoso né ? Nesse caso, você continua saindo como uma pessoa ruim nessa história."
            }
        ]
    },
    {
        enunciado: "Passou se um tempo, e agora tudo está normal e pedem para que você faça um pronunciamento.",
        alternativas: [
            {
                texto: "Foi muito bom ajudar essas pessoas, acredito que isso tenha prevenido mortes, doenças e quaisquer outras coisas ruins.",
                afirmacao: "Ótimo pronunciamento, todos te aplaudem, Parabéns senhor"
            },
            {
                texto: "Ah eu queria receber um prêmio em dinheiro por ter salvo essas pessoas.",
                afirmacao: "Mentiroso, você não salvou ninguém, apenas pensou em você."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
