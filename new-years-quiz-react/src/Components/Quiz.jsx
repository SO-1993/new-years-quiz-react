// Manages the quiz logic and displays the questions

import React from "react";
import questions from "../Data/questions";

const Quiz = ({
  currentQuestion,
  handleAnswerButtonClick,
  showScore,
  score,
}) => {
  if (showScore) {
    return (
      <div className="app">
        <div className="score-section">
          <h1>
            You scored {score} out of {questions.length}
          </h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="app">
        <div className="quiz-section">
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerButtonClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Quiz;
