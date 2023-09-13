import React, { useState } from "react";

function Question({ data, handleNextQuestion }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = () => {
    const isCorrect = selectedOption === data.correctAnswer;
    handleNextQuestion(isCorrect);
  };

  return (
    <div className="question-section">
      <h2>{data.question}</h2>
      <div className="options-section">
        {data.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            {option}
          </label>
        ))}
      </div>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}

export default Question;
