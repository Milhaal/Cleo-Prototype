import React, { useState } from "react";
import "./LessonQuiz.css";

function LessonQuiz({ questions, onQuizComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const updatedAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(updatedAnswers);

    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
      onQuizComplete();
    }
  };

  const calculateScore = () => {
    const correctAnswers = userAnswers.filter(
      (ans, index) => ans === questions[index].correct
    );
    return (correctAnswers.length / questions.length) * 100;
  };

  return (
    <div className="quiz-container">
      <div className="quiz-progress-bar">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`quiz-progress-step ${
              index <= currentQuestion ? "active" : ""
            }`}
          ></div>
        ))}
      </div>

      {quizCompleted ? (
        <div className="quiz-results">
          <h3>Fin du questionnaire</h3>
          <p>Score {calculateScore()}%</p>
          {calculateScore() >= 75 ? (
            <p className="quiz-success">Vous avez validé ce chapitre !</p>
          ) : (
            <button onClick={() => window.location.reload()} className="quiz-retry-btn">
              Recommencer
            </button>
          )}
          <button className="quiz-finish-btn">Finir Leçon</button>
        </div>
      ) : (
        <div className="quiz-content">
          {!showFeedback ? (
            <div className="quiz-question">
              <h3>Question {currentQuestion + 1}/{questions.length}</h3>
              <p>{questions[currentQuestion].question}</p>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className={`quiz-option ${
                    selectedAnswer === option ? "selected" : ""
                  }`}
                >
                    
                  {option}
                </button>
              ))}
              <button
                onClick={handleSubmit}
                className={`quiz-validate-btn ${selectedAnswer ? "active" : "disabled"}`}
              >

                Valider
              </button>
            </div>
          ) : (
            <div className="quiz-feedback">
              <h3>{selectedAnswer === questions[currentQuestion].correct ? "Bonne réponse !" : "Mauvaise réponse !"}</h3>
              <p className="quiz-explanation">{questions[currentQuestion].explanation}</p>
              <button onClick={handleNextQuestion} className="quiz-continue-btn">
                Continuer
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LessonQuiz;