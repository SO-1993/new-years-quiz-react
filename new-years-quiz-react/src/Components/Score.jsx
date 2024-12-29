// Displays the user’s score after the quiz

import React from "react";

const Score = ({ score, totalQuestions }) => {
  return (
    <div className="score-section">
      <h1>
        You scored {score} out of {totalQuestions}
      </h1>
    </div>
  );
};

export default Score;
