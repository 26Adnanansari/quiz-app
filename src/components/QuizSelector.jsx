import React, { useState } from "react";
import "../styles/QuizSelector.css"; // Import specific styles

const QuizSelector = ({ onStartQuiz }) => {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleStart = () => {
    if (!name || !rollNumber || !selectedCourse) {
      alert("Please fill in all fields.");
      return;
    }
    onStartQuiz({ name, rollNumber, selectedCourse });
  };

  return (
    <div className="quiz-selector-container">
      <div className="quiz-selector-card">
        <h1>Welcome to the Quiz App</h1>
        <div className="input-group">
          <label>Enter Your Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Enter Your Roll Number:</label>
          <input
            type="text"
            placeholder="Enter your roll number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Select Quiz:</label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="" disabled>
              Select a course
            </option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
          </select>
        </div>
        <button className="start-button" onClick={handleStart}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizSelector;
