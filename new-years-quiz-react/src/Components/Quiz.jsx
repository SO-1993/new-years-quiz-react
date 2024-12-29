import React from "react";
import questions from "../Data/questions";

const Quiz = ({ currentQuestion, handleAnswerButtonClick }) => {
  const question = questions[currentQuestion];

  return (
    <div className="quiz-section">
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
