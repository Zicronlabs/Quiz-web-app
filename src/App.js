import React, { useState } from "react";
import Question from "./components/Question";
import Result from "./components/Result";
import "./styles.css";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4"],
      correctAnswer: "4",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris"],
      correctAnswer: "Paris",
    },
  ];

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {showResult ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          data={questions[questionIndex]}
          handleNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  );
}

export default App;
