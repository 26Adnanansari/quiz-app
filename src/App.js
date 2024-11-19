import React, { useState } from "react";
import QuizSelector from "./components/QuizSelector";
import QuizPage from "./components/QuizPage";
import QuizResult from "./components/QuizResult";
import HTMLQuestions from "./data/HTMLQuestions.json";
import CSSQuestions from "./data/CSSQuestions.json";
import JSQuestions from "./data/JSQuestions.json";

const App = () => {
  const [state, setState] = useState("start");
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState({ correct: 0, total: 0 });

  const startQuiz = ({ selectedCourse }) => {
    const questionBank = {
      HTML: HTMLQuestions,
      CSS: CSSQuestions,
      JavaScript: JSQuestions
    };
    setQuestions(questionBank[selectedCourse]);
    setState("quiz");
  };

  const calculateResult = (answers) => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (answers[index] !== undefined && q.options[answers[index]].isCorrect) {
        correct++;
      }
    });
    setResult({ correct, total: questions.length });
    setState("result");
  };

  return (
    <div className="app-container">
      {state === "start" && <QuizSelector onStartQuiz={startQuiz} />}
      {state === "quiz" && <QuizPage questions={questions} onSubmit={calculateResult} />}
      {state === "result" && <QuizResult correct={result.correct} total={result.total} />}
    </div>
  );
};

export default App;
