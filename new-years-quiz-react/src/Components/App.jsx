import React, { useState } from "react";
import questions from "../Data/questions";
import Quiz from "../Components/Quiz";
import Score from "../Components/Score";
import Timer from "../Components/Timer";
import "../../src/App.css";
import Button from "@mui/material/Button";

const App = () => {
  const [quizState, setQuizState] = useState("notStarted");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (selectedOption) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setQuizState("completed");
    }
  };

  const resetQuiz = () => {
    setQuizState("notStarted");
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  if (quizState === "notStarted") {
    return (
      <div>
        <h1>Welcome to the Quiz!</h1>
        <button
          className="start-quiz-button"
          onClick={() => setQuizState("inProgress")}
        >
          Start Quiz
        </button>
      </div>
    );
  } else if (quizState === "inProgress") {
    return (
      <Quiz
        currentQuestion={currentQuestion}
        handleAnswerButtonClick={handleAnswerButtonClick}
      />
    );
  } else if (quizState === "completed") {
    return (
      <>
        <Score score={score} totalQuestions={questions.length} />
        <button
          className="restart-quiz-button"
          onClick={() => setQuizState("inProgress")}
        >
          Restart Quiz
        </button>
      </>
    );
  }

  return null;
};

export default App;
