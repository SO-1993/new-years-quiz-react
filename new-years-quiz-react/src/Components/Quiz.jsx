// Manages the quiz logic and displays the questions

import React from "react";
import questions from "../Data/questions";

const Quiz = () => {
  return (
    <>
      <div className="question-text">{questions[0].question}</div>
      <div className="answer-section">
        {questions[0].options.map((option, index) => {
          return <button key={index}>{option}</button>;
        })}
      </div>
    </>
  );
};

export default Quiz;
