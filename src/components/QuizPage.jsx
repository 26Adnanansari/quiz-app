import React, { useState } from "react";
import "../styles/QuizPage.css"; // Import specific styles

const QuizPage = ({ questions, onSubmit }) => {
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (questionIndex, optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = optionIndex;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    if (answers.length !== questions.length) {
      alert("Please answer all questions.");
      return;
    }
    onSubmit(answers);
  };

  return (
    <div className="quiz-page-container">
      {questions.map((q, index) => (
        <div key={index} className="question-card">
          <h3>{q.question}</h3>
          {q.options.map((option, optionIndex) => (
            <button
              key={optionIndex}
              onClick={() => handleAnswer(index, optionIndex)}
              className={`option-button ${
                answers[index] === optionIndex ? "selected" : ""
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>
      ))}
      <button className="submit-button" onClick={handleSubmit}>
        Submit Quiz
      </button>
    </div>
  );
};

export default QuizPage;
