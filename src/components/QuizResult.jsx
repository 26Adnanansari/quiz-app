import React from "react";
import "../styles/QuizResult.css"; // Import specific styles

const QuizResult = ({ correct, total }) => {
  const percentage = ((correct / total) * 100).toFixed(2);

  return (
    <div className="quiz-result-container">
      <div className="quiz-result-card">
        <h2>Quiz Results</h2>
        <p>
          You got <strong>{correct}</strong> out of <strong>{total}</strong>{" "}
          correct!
        </p>
        <p>Your score: <strong>{percentage}%</strong></p>
        {percentage >= 70 ? (
          <p className="feedback success">Great Job!</p>
        ) : (
          <p className="feedback error">Keep Practicing!</p>
        )}
      </div>
    </div>
  );
};

export default QuizResult;
