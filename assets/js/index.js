window.onload = () => {
    document.getElementById('replay').style = "display: none";
    document.getElementById('carta').style = "display: none";
    document.getElementById('parei').style = "display: none";
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
var jafoi = []
function pegarCarta() {
    let pegouCarta = true;

    while (pegouCarta) {
        let numeroCarta = Number(Math.floor(Math.random() * 52));
        
        if (jafoi.includes(numeroCarta)) {
            console.log(numeroCarta)
        } else {
            pegouCarta = false;
            jafoi.push(numeroCarta);
            return numeroCarta;
        }
    }
}

function play() {
    var deck = []
    for (let i = 0; i < naipes.length; i++) {
        for (let c = 0; c < cartas.length; c++) {
            let carta = `${cartas[c]} de ${naipes[i]}`
            deck.push(carta);
        }
    }

    let nCartaEscolhida;
    let cartaEscolhida;

    if (jafoi.length == 52) {
        alert("Acabou o deck!");
    } else {
        nCartaEscolhida = pegarCarta();
    }

    cartaEscolhida = deck[nCartaEscolhida];
    console.log(cartaEscolhida);
}
