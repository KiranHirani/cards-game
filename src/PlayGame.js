import React from "react";
import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Results from "./Results";
import { Player_1, Player_2, cardMap, NUM_ROUNDS } from "./utils";

const PlayGame = ({ shuffledDeck, redo }) => {
  const [round, setRound] = useState(0);
  const [results, setResults] = useState([]);
  const cardTypeRank = {
    "♣": 1,
    "♦": 2,
    "♥": 3,
    "♠": 4,
  };

  const calculateResultsAndUpdateRound = () => {
    const card1 = shuffledDeck[round * 2].split(" ");
    const card2 = shuffledDeck[round * 2 + 1].split(" ");

    const value1 = card1[1];
    const value2 = card2[1];
    const type1 = card1[0];
    const type2 = card2[0];

    if (cardMap.get(value1) > cardMap.get(value2)) {
      setResults((prevValue) => [...prevValue, Player_1]);
    } else if (cardMap.get(value2) > cardMap.get(value1)) {
      setResults((prevValue) => [...prevValue, Player_2]);
    } else {
      if (cardTypeRank[type1] > cardTypeRank[type2]) {
        setResults((prevValue) => [...prevValue, Player_1]);
      } else {
        setResults((prevValue) => [...prevValue, Player_2]);
      }
    }

    setRound((prevValue) => prevValue + 1);
  };

  if (results.length == NUM_ROUNDS) {
    return (
      <div className="play-game text-center">
        <Results results={results} redo={redo} />
      </div>
    );
  }

  return (
    <div
      className="play-game container"
      style={{ height: "100%", padding: "10px" }}
    >
      <div style={{ height: "20%" }} className="container">
        <button
          className="btn btn-primary"
          onClick={calculateResultsAndUpdateRound}
        >
          Deal
        </button>
      </div>
      <div style={{ height: "80%" }} className="container">
        <div className="row" style={{ height: "100%" }}>
          {[Player_1, Player_2].map((player, index) => {
            return (
              <div className="col">
                <h4>{player}</h4>
                <div
                  className="card shadow"
                  style={{ height: "9em", width: "7em", fontSize: "1.5rem" }}
                >
                  <div
                    className="m-2"
                    style={{
                      height: "100%",
                      border: "2px solid red",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="m-1">{shuffledDeck[round * 2 + index]}</div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="scoreboard col">
            <Scoreboard results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
