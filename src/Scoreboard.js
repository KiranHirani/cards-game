import React from "react";

const Scoreboard = ({ results }) => {
  return (
    <div className="scoreboard-component">
      <h4 className="score-heading">Scores</h4>
      <ul className="score-list">
        {results.map((result, index) => {
          let returnVal = "Round " + (index + 1) + " : Goes to " + result;
          return <li key="index">{returnVal}</li>;
        })}
      </ul>
    </div>
  );
};

export default Scoreboard;
