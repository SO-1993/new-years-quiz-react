import React from "react";
import { useState } from "react";

import questions from "../Data/questions";
import Timer from "./Timer";

const Quiz = ({ currentQuestion, handleAnswerButtonClick }) => {
  const question = questions[currentQuestion];

  const [timerExpired, setTimerExpired] = useState(false);

  const handleTimerExpired = () => {
    setTimerExpired(true);
    handleAnswerButtonClick(null);
    setTimerExpired(false);
  };

  return (
    <div className="quiz-section">
      <Timer
        key={currentQuestion}
        initialTime={3}
        onTimeUp={handleTimerExpired}
      />

      <div className="question-text">{question.question}</div>
      <div className="answer-section">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswerButtonClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
