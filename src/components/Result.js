import React from "react";

function Result({ score, totalQuestions }) {
  return (
    <div className="result">
      <h2>Your Score: {score} / {totalQuestions}</h2>
    </div>
  );
}

export default Result;
