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
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div class="card shadow" style={{ width: "70%", height: "70%" }}>
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
          <h3>{GAME_NAME}</h3>
          {play ? (
            <PlayGame shuffledDeck={shuffledDeck} />
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
