import React from "react";

const Scoreboard = ({ results }) => {
  return (
    <div className="scoreboard-component">
      <h4 className="score-heading">Scores</h4>
      <ul>
        {results.map((result, index) => {
          let returnVal = "Round " + (index + 1) + " : " + result;
          return <li key="index">{returnVal}</li>;
        })}
      </ul>
    </div>
  );
};

export default Scoreboard;
