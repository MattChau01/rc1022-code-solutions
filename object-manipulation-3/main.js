console.log('Lodash is loaded:', typeof _ !== 'undefined');

const suits = ['hearts', 'spades', 'clubs', 'diamonds'];
const ranks = ['a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k'];

const deck = [];

for (let i = 0; i < ranks.length; i++) {
  for (let k = 0; k < suits.length; k++) {
    var newCard = {};
    newCard.rank = ranks[i];
    newCard.suits = suits[k];
    deck.push(newCard);
  }
}

const shuffledDeck = _.shuffle(deck);

// players:

const players = {
  _1: {
    name: 'Player One',
    hand: []
  },

  _2: {
    name: 'Player Two',
    hand: []
  },

  _3: {
    name: 'Player Three',
    hand: []
  },

  _4: {
    name: 'Player Four',
    hand: []
  }
};

// start with 2 cards
startWithTwo();

function startWithTwo() {

  for (const key in players) {
    const cardOne = shuffledDeck.shift();
    const cardTwo = shuffledDeck.shift();
    players[key].hand.push(cardOne);
    players[key].hand.push(cardTwo);
  }

  handValues();
}

// POINT SYSTEM:

function handValues() {
  for (const key in players) {
    if (players[key].hand[0].rank !== Number) {
      if (players[key].hand[0].rank === 'a') {
        players[key].hand[0].rank = 11;
      } else if ((players[key].hand[0].rank === 'j') || (players[key].hand[0].rank === 'q') || (players[key].hand[0].rank === 'k')) {
        players[key].hand[0].rank = 10;
      }
    }
    if (players[key].hand[1].rank !== Number) {
      if (players[key].hand[1].rank === 'a') {
        players[key].hand[1].rank = 11;
      } else if ((players[key].hand[1].rank === 'j') || (players[key].hand[1].rank === 'q') || (players[key].hand[1].rank === 'k')) {
        players[key].hand[1].rank = 10;
      }
    }
    // console.log(players[key].hand[1].rank);
  }
  countHand();
}

function countHand() {
  const totals = [];
  for (const key in players) {
    const playersTotalHand = players[key].hand[0].rank + players[key].hand[1].rank;
    // console.log(playersTotalHand);
    players[key].total = playersTotalHand;
    totals.push(playersTotalHand);

    if (players[key].total === Math.max(...totals)) {
      console.log('The winner is: ', players[key]);
    }
  }

  console.log('Total for each player\' hand: ', totals);

}

// each hand
console.log('objectOne\'s hand: ', players._1.hand);
console.log('objectTwo\'s hand: ', players._2.hand);
console.log('objectThree\'s hand: ', players._3.hand);
console.log('objectFour\'s hand: ', players._4.hand);
