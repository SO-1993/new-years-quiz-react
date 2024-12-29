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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  if (quizState === "notStarted") {
    return (
      <div>
        <h1>Welcome to the Quiz!</h1>
        <button onClick={() => setQuizState("inProgress")}>Start Quiz</button>
      </div>
    );
  }
  if (quizState === "inProgress") {
    return <Quiz />;
  }
  if (quizState === "completed") {
    return <Result />;
  }
};

export default App;
