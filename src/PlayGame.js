import React from "react";
import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Results from "./Results";
import { Player_1, Player_2, cardMap } from "./utils";

const PlayGame = ({ shuffledDeck }) => {
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

  return (
    <div className="play-game">
      {results.length < 5 ? (
        <div>
          <button
            className="btn btn-primary"
            onClick={calculateResultsAndUpdateRound}
          >
            Deal
          </button>
          <div className="mt-3 d-flex justify-content-around">
            <div className="cards d-flex justify-content-around">
              <div>
                <h4>{Player_1}</h4>
                <div className="card fs-5 shadow">
                  {shuffledDeck[round * 2]}
                </div>
              </div>
              <div>
                <h4>{Player_2}</h4>
                <div className="card fs-5 shadow">
                  {shuffledDeck[round * 2 + 1]}
                </div>
              </div>
            </div>
            <div className="scoreboard">
              <Scoreboard results={results} />
            </div>
          </div>
        </div>
      ) : (
        <Results results={results} />
      )}
    </div>
  );
};

export default PlayGame;
