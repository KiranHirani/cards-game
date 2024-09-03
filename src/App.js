import "./App.css";
import PlayGame from "./PlayGame";
import { useState } from "react";
import { createDeck, shuffleDeck, GAME_NAME } from "./utils";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [play, setPlay] = useState(false);
  const [shuffledDeck, setShuffledDeck] = useState([]);

  const startGame = () => {
    let deck = createDeck();
    let shuffledDeck = shuffleDeck(deck);
    setShuffledDeck(shuffledDeck);
    setPlay(true);
  };

  return (
    <div className="card shadow deck-game">
      <div className="container full-height">
        <div className="d-flex justify-content-center align-items-center game-heading">
          <h3 className="p-1">{GAME_NAME}</h3>
        </div>
        <div className="d-flex align-items-center justify-content-center game-body">
          {play ? (
            <PlayGame shuffledDeck={shuffledDeck} redo={() => setPlay(false)} />
          ) : (
            <button className="btn btn-primary" onClick={startGame}>
              Play
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
