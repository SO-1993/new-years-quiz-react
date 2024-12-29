// Manages the quiz logic and displays the questions

import React from "react";
import questions from "../Data/questions";

const Quiz = ({ currentQuestion, handleAnswerButtonClick }) => {
  return (
    <>
      <div className="question-text">{questions[currentQuestion].question}</div>
      <div className="answer-section">
        {questions[currentQuestion].options.map((option, index) => {
          return (
            <button key={index} onClick={() => handleAnswerButtonClick(option)}>
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Quiz;
