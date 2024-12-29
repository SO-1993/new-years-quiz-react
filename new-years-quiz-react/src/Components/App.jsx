import React, { useState } from "react";
import questions from "../Data/questions";
import Question from "../Components/Question";
import Quiz from "../Components/Quiz";
import Result from "../Components/Result";
import Score from "../Components/Score";
import Timer from "../Components/Timer";
import "../../src/App.css";

const App = () => {
  const [quizState, setQuizState] = useState("notStarted");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const totalQuestions = questions.length;

  const handleAnswerButtonClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < totalQuestions) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
        setQuizState("completed");
      }
    }
  };

  if (quizState === "notStarted") {
    return (
      <div>
        <h1>Welcome to the Quiz!</h1>
        <button onClick={() => setQuizState("inProgress")}>Start Quiz</button>
      </div>
    );
  }
  if (quizState === "inProgress") {
    return (
      <Quiz
        currentQuestion={currentQuestion}
        handleAnswerButtonClick={handleAnswerButtonClick}
      />
    );
  }
  if (quizState === "completed") {
    return <Score score={score} totalQuestions={totalQuestions} />;
  }
};

export default App;
