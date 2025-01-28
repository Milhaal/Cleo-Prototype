import React, { useState } from "react";
import "./LessonQuiz.css";
import { useNavigate } from "react-router-dom";

function LessonQuiz({ questions, onQuizComplete, courseId, nextLessonId }) {
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

  const navigate = useNavigate();

  const handleFinishLesson = () => {
    if (nextLessonId) {
      navigate(`/catalog/courses/${courseId}/lesson/${nextLessonId}`);
    } else {
      navigate(`/catalog/courses/${courseId}`); // Retour au catalogue si pas de leçon suivante
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-progress-bar">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`quiz-progress-step ${index <= currentQuestion ? "active" : ""}`}
          ></div>
        ))}
      </div>

      {quizCompleted ? (
        <div className="quiz-results">
          <div className="quiz-content-top-box">
            <h3 className="quiz-question-num">Fin du questionnaire</h3>
            <p className={calculateScore() >= 75 ? "quiz-success-text" : "quiz-fail-text"}>
              {calculateScore() >= 75 ? (
                <span className="material-symbols-outlined success-icon">check_circle</span>
              ) : (
                <span className="material-symbols-outlined fail-icon">cancel</span>
              )}
              Score {calculateScore()}%
            </p>
          </div>

          {calculateScore() >= 75 ? (
            <p className="quiz-success">🎉 Vous avez validé ce chapitre !</p>
          ) : (
            <p className="quiz-fail">❌ Vous devez recommencer le quiz pour valider ce chapitre.</p>
          )}

          <div className="quiz-btn-box">
            {calculateScore() < 75 && (
              <button
                onClick={() => window.location.reload()}
                className="quiz-retry-btn"
              >
                Recommencer
              </button>
            )}
            {calculateScore() >= 75 && (
              <button onClick={handleFinishLesson} className="quiz-finish-btn">
                Finir Leçon
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="quiz-content">
          {!showFeedback ? (
            <div className="quiz-question">
              <div className="quiz-content-top-box">
                <h3 className="quiz-question-num">Question {currentQuestion + 1}/{questions.length}</h3>
                <p>{questions[currentQuestion].question}</p>
              </div>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className={`quiz-option ${selectedAnswer === option ? "selected" : ""}`}
                >
                  {option}
                </button>
              ))}
              <button
                onClick={handleSubmit}
                className={`quiz-validate-btn ${selectedAnswer ? "active" : "disabled"}`}
              >
                Valider
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </button>
            </div>
          ) : (
            <div className="quiz-feedback">
              <div className="quiz-content-top-box">
                <h3 className="quiz-question-num">Question {currentQuestion + 1}/{questions.length}</h3>
                <h4 className={selectedAnswer === questions[currentQuestion].correct ? "quiz-correct" : "quiz-incorrect"}>
                  {selectedAnswer === questions[currentQuestion].correct ? (
                    <>
                      <span className="material-symbols-outlined success-icon">check_circle</span>
                      Bonne réponse !
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined fail-icon">cancel</span>
                      Mauvaise réponse !
                    </>
                  )}
                </h4>
              </div>

              {selectedAnswer !== questions[currentQuestion].correct && (
                <p className="quiz-correct-answer">
                  La bonne réponse était : <strong>{questions[currentQuestion].correct}</strong>
                </p>
              )}

              <p className="quiz-explanation">💡 {questions[currentQuestion].explanation}</p>
              <button onClick={handleNextQuestion} className="quiz-continue-btn">
                Continuer
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LessonQuiz;