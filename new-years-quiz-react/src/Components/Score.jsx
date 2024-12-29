// Displays the user’s score after the quiz

import React from "react";

const Score = ({ score, totalQuestions }) => {
  return (
    <div>
      You have scored {score} out of {totalQuestions}!
    </div>
  );
};

export default Score;
