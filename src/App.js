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
    <div
      class="card shadow"
      style={{
        width: "70vw",
        height: "70vh",
        marginTop: "15vh",
        marginLeft: "15vw",
      }}
    >
      {" "}
      <div className="container" style={{ height: "100%" }}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "20%" }}
        >
          <h3 style={{ padding: "10px" }}>{GAME_NAME}</h3>
        </div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "80%" }}
        >
          {play ? (
            <PlayGame shuffledDeck={shuffledDeck} redo={setPlay} />
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
