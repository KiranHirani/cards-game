import React from "react";
import { Player_1, Player_2, NUM_ROUNDS } from "./utils";

const Results = ({ results }) => {
  let firstPlayerScore = results.filter((result) => result == Player_1).length;
  let winner, score;

  if (firstPlayerScore > NUM_ROUNDS / 2) {
    winner = Player_1;
    score = firstPlayerScore;
  } else {
    winner = Player_2;
    score = NUM_ROUNDS - firstPlayerScore;
  }

  return (
    <div className="results">
      <h3>Results</h3>
      <h5>Game Over!!!</h5>
      <div>{winner} won!!</div>
      <div>Total {score} rounds won!!</div>
    </div>
  );
};

export default Results;
