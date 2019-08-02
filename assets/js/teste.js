let comecou = false,
    acabou = false,
    PlayerGanhou = false,
    jafoi = [],
    deck = [],
    valorCarta = 0,
    cartasPlayer = [],
    cartasDealer = [],
    somaPlayer = 0,
    somaDealer = 0;

function ojogo() {
    alert("Perdi");
}

let = valorCarta = carta => {
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

let ngbtn = document.getElementById('replay'),
    cardBtn = document.getElementById('carta'),
    stayBtn = document.getElementById('parei'),
    cartasPlayer = document.getElementById('cartasPlayer'),
    cartasDealer = document.getElementById('cartasDealer');

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

let update = () => {
    if (!comecou) {
        let node = document.createElement("p");
        node.innerHTML = "Cartas do Player:";
        document.getElementById(cartasPlayer).appendChild(node);
        let node = document.createElement("p");
        node.innerHTML = "Cartas do Dealer:";
        document.getElementById(cartasDealer).appendChild(node);
        return
    } else {
        adicionarNodes();
        adicionarNodes();
    }
}

ngbtn.addEventListener("click", () => {
    comecou = true;
    acabou = false;
    PlayerGanhou = false;

    fazerDeck();
    cartasPlayer = [pegarCarta(), pegarCarta()];
    cartasPlayer = [pegarCarta(), pegarCarta()];

    ngbtn.style.display = "none";
    cardBtn.style.display = "inline";
    stayBtn.style.display = "inline";
    status();
});

cardBtn.addEventListener("click", () => {
    cartasPlayer.push(pegarCarta());
})

stayBtn.addEventListener("click", () => {
    acabou = true;
});

let score = () => {}

let pegarCarta = () => {
    let tmp,
        numeroCarta = Number(Math.floor(Math.random() * 52));

    tmp = deck[numeroCarta];
    deck[numeroCarta] = deck[deck.length-1];
    deck[deck.length-1] = tmp;
    return deck.pop();
};

let updateGame = () => {

    atualizarScore();

    if(jogoFinalizado){
        while (dealerPontos < jogadorPontos && jogadorPontos <= 21 && dealerPontos <= 21) {
                cartasDealer.push(pegarCarta());
                atualizarScore();
            }
    }

    if(pontosPlayer > 21) {
        PlayerGanhou = false;
        acabou = true;
    } else if(pontosDealer > 21) {
        PlayerGanhou = true;
        acabou = true;
    } else if (acabou) {
        if (pontosPlayer > pontosDealer && pontosPlayer <= 21 ) {
            PlayerGanhou = true;
        } else {
            PlayerGanhou = false
        }
    }
}

function adicionarNodes() {
    while (cartasPlayer > 0) {
        let tmp = cartasPlayer.pop();
        let tmpvalor = valoresCartas(tmp.carta);
        let node = document.createElement("p");
        node.innerHTML = `${tmp.carta} de ${tmp.naipe}, vale: ${tmpvalor}`;
        document.getElementById('cartasPlayer').appendChild(node);
    }
    while (cartasDealer > 0) {
        let tmp = cartasDealer.pop();
        let tmpvalor = valoresCartas(tmp.carta);
        let node = document.createElement("p");
        node.innerHTML = `${tmp.carta} de ${tmp.naipe}, vale: ${tmpvalor}`;
        document.getElementById('cartasDealer').appendChild(node);
    }
}
function removerNodes(quem) {
    let list = document.getElementById(`cartas${quem}`);
    while (list.childNodes.length != 0) {
        let i = 0;
        list.removeChild(list.childNodes[i]);
        i++
    }
}