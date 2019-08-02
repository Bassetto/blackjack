let comecou = false,
    acabouDeck = false,
    deck = [],
    cartasPlayer = [],
    cartasDealer = [],
    pontosPlayer = 0,
    pontosDealer = 0,
    cartaEscolhida = [];

let valoresCartas = carta => {
    switch (carta) {
        case "Ás":
            return 1;
        case "Dois":
            return 2;
        case "Três":
            return 3;
        case "Quatro":
            return 4;
        case "Cinco":
            return 5;
        case "Seis":
            return 6;
        case "Sete":
            return 7;
        case "Oito":
            return 8;
        case "Nove":
            return 9;
        case "Dez":
            return 10;
        case "Valete":
            return 10;
        case "Dama":
            return 10;
        case "Rei":
            return 10;
    }
}

window.onload = () => {
    document.getElementById('carta').style = "display: none";
    document.getElementById('parei').style = "display: none";
    fazerDeck();
};

let update = () => {
    if (!comecou) {
        return
    }
}

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
            let carta = {
                carta: cartas[c],
                naipe: naipes[i]
            }
            deck.push(carta);
        }
    }
}

let pegarCarta = () => {
    let tmp,
        numeroCarta = Number(Math.floor(Math.random() * 52));
    tmp = deck[numeroCarta];
    deck[numeroCarta] = deck[deck.length-1];
    deck[deck.length-1] = tmp;
    return deck.pop();
};

function play() {
    
    if (pontosPlayer > 21) {
        alert("estourou!")
        acabouDeck = true;
    } else if (!acabouDeck) {

        if (deck.length < 0) {
            acabouDeck = true;
        } else {
            cartaEscolhida = pegarCarta()
            valorCarta = valoresCartas(cartaEscolhida.carta);
            pontosPlayer += Number(valorCarta);
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
    await removerNodes("Player");
    await removerNodes("Dealer");
    acabouDeck = false;
    pontosPlayer = 0;
    pontosDealer = 0;
}

function adicionarNodes(quem) {
    let node = document.createElement("p");
    node.innerHTML = `${cartaEscolhida.carta} de ${cartaEscolhida.naipe}, vale: ${valorCarta}`;
    document.getElementById(`cartas${quem}`).appendChild(node);
}

function removerNodes(quem) {
    let list = document.getElementById(`cartas${quem}`);
    while (list.childNodes.length != 0) {
        let i = 0;
        list.removeChild(list.childNodes[i]);
        i++
    }
}