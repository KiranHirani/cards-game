const createDeck = () => {
  const result = [];
  suits.forEach((suit) => {
    cards.forEach((card) => {
      result.push(`${suit} ${card}`);
    });
  });
  // console.log(result);
  return result;
};
const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
};
const suits = ["♠", "♥", "♦", "♣"];
const cards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const NUM_ROUNDS = 5;

let cardMap = new Map();
cards.forEach((card, index) => cardMap.set(card, index));

const cardTypeRank = {
  "♣": 1,
  "♦": 2,
  "♥": 3,
  "♠": 4,
};

const GAME_NAME = "5toWin";
const Player_1 = "Player 1";

const Player_2 = "Player 2";

export {
  createDeck,
  shuffleDeck,
  GAME_NAME,
  Player_1,
  Player_2,
  suits,
  cardMap,
  cards,
  NUM_ROUNDS,
  cardTypeRank,
};
