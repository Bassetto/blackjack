let cardDeck;
let player;
let dealer;

const newGameBtn = document.getElementById('play');
const cardBtn = document.getElementById('buyCard');
const standBtn = document.getElementById('stand');
const messageEl = document.getElementById('msg');

cardBtn.style.display = 'none';
standBtn.style.display = 'none';

class Player {
    constructor(name, div) {
        this.name = name;
        this.div = div;
        this.deck = [];
        this.points = Number();
    }

    addCard(card) {
        this.deck.push(card);
        this.points += card.value;
    }
}

class Card {
    constructor(card, suit, value) {
        this.card = card,
        this.suit = suit,
        this.value = value;
        this.takenStatus = false;
    }

    updateTakenStatus() {
        this.takenStatus = true;
    }
};

class CardDeck {
    constructor() {
        this.cardDeck = [];
        this.hasCardsAvailable = true;
        this.createCardDeck();
    };

    createCardDeck() {
        const suits = [
            "Paus",
            "Copas",
            "Espadas",
            "Ouros"
        ];
        
        const cards = [
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
        function getCardValue (card) {
            switch (card) {
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
            };
        };
        for (let i = 0; i < suits.length; i++) {
            for (let c = 0; c < cards.length; c++) {
                this.cardDeck.push(new Card(cards[c], suits[i], getCardValue(cards[c])));
            };
        };
    };

    takeCard() {
        let card;
        let counter = 0;
        let status = true;
        let randomIndex;
        while (status) {
            randomIndex = Number(Math.floor(Math.random() * 52));
            if (!this.cardDeck[randomIndex].takenStatus) {
                this.cardDeck[randomIndex].updateTakenStatus();
                card = this.cardDeck[randomIndex];
                status = false;
            } else if (counter === 52) {
                status = false;
                this.hasCardsAvailable = false;
            }
            counter++;
        };

        return card;
    };
};

function ojogo() {
    alert("Perdi");
}

function newGame() {
    cardDeck = new CardDeck();
    player = new Player('Player', document.getElementById('cartasPlayer'));
    dealer = new Player('Delaer', document.getElementById('cartasDealer'));
    messageEl.innerText = '';
    for (let i = 0; i < 2; i++) {
        player.addCard(cardDeck.takeCard());
        dealer.addCard(cardDeck.takeCard());
    }
    renderCards();
    newGameBtn.style.display = 'none';
    cardBtn.style.display = 'initial';
    standBtn.style.display = 'initial';
    
}

function buyCard() {
    if (cardDeck.hasCardsAvailable) {
        player.addCard(cardDeck.takeCard());
        renderCards();
        if (player.points === 21) {
            theEnd('Parabéns, você ganhou!');
        } else if (player.points > 21) {
            theEnd('Perdeu!\nVocê estourou!');
        } else {
            dealer.addCard(cardDeck.takeCard())
            if (dealer.points === 21) {
                theEnd('O dealer ganhou!');
            } else if (dealer.points > 21) {
                theEnd('Parabéns, você ganhou!\n O dealer estourou');
            }
        }
    } else {
        console.log('acabaram as cartas');
    }
};

function stand() {
    if (cardDeck.hasCardsAvailable) {
        dealer.addCard(cardDeck.takeCard());
        renderCards();
        if (dealer.points === 21) {
            theEnd('O dealer ganhou')
        } else if (dealer.points > 21) {
            theEnd('Parabéns, você ganhou!\n O dealer estourou');
        }
    }
};

function theEnd(message) {
    newGameBtn.style.display = 'initial';
    cardBtn.style.display = 'none';
    standBtn.style.display = 'none';
    messageEl.innerText = message;
}

function renderCards() {
    let node;

    removeChilds(player.div)
    removeChilds(dealer.div)
    player.deck.forEach(card => {
        node = document.createElement("p");
        node.innerText = `${card.card} de ${card.suit}, vale: ${card.value}`;
        player.div.appendChild(node);
    });
    dealer.deck.forEach(card => {
        node = document.createElement("p");
        node.innerText = `${card.card} de ${card.suit}, vale: ${card.value}`;
        dealer.div.appendChild(node);
    });
};

function removeChilds(list) {
    while (list.childNodes.length != 0) {
        let i = 0;
        list.removeChild(list.childNodes[i]);
        i++
    }
}