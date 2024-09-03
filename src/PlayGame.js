import React from "react";
import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Results from "./Results";
import { Player_1, Player_2, cardMap, NUM_ROUNDS, cardTypeRank } from "./utils";

const PlayGame = ({ shuffledDeck, redo }) => {
  const [round, setRound] = useState(0);
  const [results, setResults] = useState([]);

  const calculateResultsAndUpdateRound = () => {
    if (results.length >= NUM_ROUNDS) {
      setRound((prevValue) => prevValue + 1);
      return;
    }
    let [playerOneSuit, playerOneNumber] = shuffledDeck[round * 2].split(" ");
    let [playerTwoSuit, playerTwoNumber] =
      shuffledDeck[round * 2 + 1].split(" ");

    let result;

    if (cardMap.get(playerOneNumber) > cardMap.get(playerTwoNumber)) {
      result = Player_1;
    } else if (cardMap.get(playerOneNumber) < cardMap.get(playerTwoNumber)) {
      result = Player_2;
    } else {
      result =
        cardTypeRank[playerOneSuit] > cardTypeRank[playerTwoSuit]
          ? Player_1
          : Player_2;
    }
    setResults((prevValue) => [...prevValue, result]);
    setRound((prevValue) => prevValue + 1);
  };

  if (round >= NUM_ROUNDS + 1) {
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
      <div className="container game-heading">
        <button
          className={
            "btn btn-" + (results.length < NUM_ROUNDS ? "primary" : "success")
          }
          onClick={calculateResultsAndUpdateRound}
        >
          {results.length < NUM_ROUNDS ? "Deal" : "See results"}
        </button>
      </div>
      <div className="container game-body">
        <div className="row full-height">
          {[Player_1, Player_2].map((player, index) => {
            return (
              <div className="col">
                <h4>{player}</h4>
                <div className="card shadow player-card">
                  <div className="m-2 inside-player-card">
                    {round > 0 && (
                      <div className="m-1">
                        {shuffledDeck[(round - 1) * 2 + index]}
                      </div>
                    )}
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
