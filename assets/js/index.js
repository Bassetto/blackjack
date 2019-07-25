var jafoi = [];
var deck = [];
let valorCarta;
let somaPlayer = 0;
let somaDealer = 0;
window.onload = () => {
    document.getElementById('replay').style = "display: none";
    document.getElementById('carta').style = "display: none";
    document.getElementById('parei').style = "display: none";
    fazerDeck();
};

function ojogo() {
    alert("Perdi");
}

const naipes = [
    "Paus",
    "Copas",
    "Espadas",
    "Ouros"
];

const cartas = [
    "Ás",
    "Dois",
    "Três",
    "Quatro",
    "Cinco",
    "Seis",
    "Sete",
    "Oito",
    "Nove",
    "Dez",
    "Valete",
    "Dama",
    "Rei"
];

function fazerDeck() {
    for (let i = 0; i < naipes.length; i++) {
        for (let c = 0; c < cartas.length; c++) {
            let carta = [
                cartas[c],
                naipes[i]
            ]
            deck.push(carta);
        }
    }
}

function pegarCarta() {
    let pegouCarta = true;

    while (pegouCarta) {
        let numeroCarta = Number(Math.floor(Math.random() * 52));

        if (jafoi.includes(numeroCarta)) {

        } else {
            pegouCarta = false;
            jafoi.push(numeroCarta);
            cartaEscolhida = deck[numeroCarta];
            return cartaEscolhida;
        }
    }
};

let acabouDeck = false;

function play() {
    let cartaEscolhida;
    if (somaPlayer >= 21) {
        alert("estourou!")
        acabouDeck = true;
        document.getElementById('replay').style = "display: initial";
        document.getElementById('play').style = "display: none";
    } else if (!acabouDeck) {

        if (jafoi.length == 52) {
            acabouDeck = true;
        } else {
            cartaEscolhida = pegarCarta();
    
            switch (cartaEscolhida[0]) {
                case "Ás":
                    valorCarta = 1;
                    break;
                case "Dois":
                    valorCarta = 2;
                    break;
                case "Três":
                    valorCarta = 3;
                    break;
                case "Quatro":
                    valorCarta = 4;
                    break;
                case "Cinco":
                    valorCarta = 5;
                    break;
                case "Seis":
                    valorCarta = 6;
                    break;
                case "Sete":
                    valorCarta = 7;
                    break;
                case "Oito":
                    valorCarta = 8;
                    break;
                case "Nove":
                    valorCarta = 9;
                    break;
                case "Dez":
                    valorCarta = 10;
                    break;
                case "Valete":
                    valorCarta = 10;
                    break;
                case "Dama":
                    valorCarta = 10;
                    break;
                case "Rei":
                    valorCarta = 10;
                    break;
            }
            somaPlayer += Number(valorCarta);
            adicionarNodes("Player");
            adicionarNodes("Dealer");
        }
    } else {
        alert("Acabou o deck cara!");
        document.getElementById('replay').style = "display: initial";
        document.getElementById('play').style = "display: none";
    }
};

async function replay() {
    document.getElementById('play').style = "display: initial";
    document.getElementById('replay').style = "display: none";
    await removerNodes("Player");
    await removerNodes("Dealer");
    acabouDeck = false;
    jafoi = [];
    somaPlayer = 0;
    somaDealer = 0;
}

function adicionarNodes(quem) {
    let node = document.createElement("p");
    let textnode = document.createTextNode(`${cartaEscolhida[0]} de ${cartaEscolhida[1]}, vale: ${valorCarta}`);
    node.appendChild(textnode);
    document.getElementById('.cartas'+quem).appendChild(node);
}

function removerNodes(quem) {
    let list = document.getElementById('.cartas' + quem);
    while (list.childNodes.length != 0) {
        let i = 0;
        list.removeChild(list.childNodes[i]);
        i++
    }
}