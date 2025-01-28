import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import courses from "../../data/courses/index-courses";
import toolImages from "../../data/ToolsData";
import "./LessonPage.css";
import "../Root.css";
import Footer from "../Footer";
import LessonQuiz from "./LessonQuiz";
import { useNavigate } from "react-router-dom";

function LessonPage() {
  const { courseId, lessonId } = useParams();

  // Trouver la leçon correcte
  const lesson = courses.find(
    (c) => c.type === "lesson" && c.courseId === courseId && c.id === lessonId
  );
  const lessonIndex = courses.findIndex(
    (c) => c.type === "lesson" && c.courseId === courseId && c.id === lessonId
  );

  const nextLesson =
    lessonIndex !== -1 && lessonIndex + 1 < courses.length && courses[lessonIndex + 1].courseId === courseId
      ? courses[lessonIndex + 1]
      : null;

  // Fonction de navigation
  const handleNextLesson = () => {
    if (nextLesson) {
      navigate(`/catalog/courses/${nextLesson.courseId}/lesson/${nextLesson.id}`);
    } else {
      navigate(`/catalog/courses/${courseId}`);
    }
  };
  const [quizCompleted, setQuizCompleted] = useState(false);

  const [currentLesson, setCurrentLesson] = useState(null);

  useEffect(() => {
    const lesson = courses.find(
      (c) => c.type === "lesson" && c.courseId === courseId && c.id === lessonId
    );
    setCurrentLesson(lesson);
  }, [courseId, lessonId]);

  const navigate = useNavigate();

  if (!currentLesson) {
    return <h2>Leçon introuvable</h2>;
  }

  return (
    <div className="lesson-page">
      <div className="page_topbar">
        <h2 className="page_topbar-title">
          <Link to="/catalog" className="breadcrumb-link">Catalogue</Link>
          <span className="material-symbols-outlined">chevron_right</span>
          <Link to={`/catalog/courses/${lesson.courseId}`} className="breadcrumb-link">
            {lesson.courseTitle || "Cours inconnu"}
          </Link>
          <span className="material-symbols-outlined">chevron_right</span>
          <span className="current-lesson-title">{lesson.title}</span>
        </h2>
      </div>

      <div className="lesson-page-wrapper">
        <div className="lesson-header">
          <div className="lesson-header-top">
            <h1 className="lesson-title">{lesson.title}</h1>
            <p className="lesson-description">{lesson.description}</p>
          </div>

          <div className="course-page-header-top-labels">
            <div className="course-page-header-top-labels-item">
              <p className="course-page-header-top-labels-name">Outils</p>
              {lesson.courseTools.map((tool, index) => (
                <div key={index} className="course-page-header-top-labels-content">
                  <img
                    src={toolImages[tool]?.image || "/images/default-tool.png"}
                    alt={toolImages[tool]?.name || "Unknown tool"}
                    className="course-page-header-top-labels-content-img"
                  />
                  <span className="course-page-header-top-labels-content-name">
                    {toolImages[tool]?.name || tool}
                  </span>
                </div>
              ))}
            </div>

            <div className="course-page-header-top-labels-item">
              <p className="course-page-header-top-labels-name">Niveau</p>
              <div className="course-page-header-top-labels-content">
                {lesson.courseDifficulty}
              </div>
            </div>
          </div>
        </div>

        <div className="lesson-content-wrapper">
          <div className="lesson-content">
            {lesson.content.map((item) => {
              switch (item.type) {
                case "link":
                  return (
                    <p key={item.id}>
                      {item.value}
                      <Link to={`/catalog/courses/${lesson.courseId}`} className="lesson-link">
                        {item.linkText}
                      </Link>
                    </p>
                  );
                case "link-lesson":
                  const nextLessonIndex = courses.findIndex(
                    (c) => c.type === "lesson" && c.courseId === courseId && c.id === lessonId
                  ) + 1; // Trouve l'index de la leçon actuelle et ajoute 1

                  const nextLesson = courses[nextLessonIndex];

                  return (
                    nextLesson && nextLesson.type === "lesson" ? (
                      <p key={item.id} className="lesson-next">
                        {item.value}
                        <Link
                          to={`/catalog/courses/${lesson.courseId}/lesson/${nextLesson.id}`}
                          className="lesson-link"
                        >
                          {item.linkText}
                        </Link>
                      </p>
                    ) : (
                      <p key={item.id} className="lesson-next">Fin du cours, pas de leçon suivante.</p>
                    )
                  );
                case "subtitle":
                  return <h2 key={item.id} className="lesson-subtitle">{item.value}</h2>;
                case "prompt":
                  return <blockquote key={item.id} className="lesson-prompt">{formatText(item.value)}</blockquote>;
                case "text":
                  return <p key={item.id}>{formatText(item.value)}</p>;
                case "bullet-point":
                  return (
                    <ul key={item.id} className="lesson-bullets">
                      {item.value.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  );
                case "image":
                  return <img key={item.id} src={item.url} alt={item.alt} className="lesson-image" />;
                case "video":
                  return (
                    <video key={currentLesson.id} controls className="lesson-video">
                      <source src={currentLesson.content.find(item => item.type === "video").url} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  );
                default:
                  return null;
              }
            })}
            {lesson.quiz && lesson.quiz.length > 0 && (
              <LessonQuiz
                questions={lesson.quiz}
                onQuizComplete={setQuizCompleted}
                nextLessonId={nextLesson?.id || null}
                courseId={courseId}
              />
            )}

            <div className="lesson-content-bottom">
              <div className="lesson-navigation">
                <button onClick={handleNextLesson} className="lesson-next-btn">
                  {nextLesson ? "Leçon suivante" : "Terminer le cours"}
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lesson-content-recap-box">
            <h3 className="recap-title">{lesson.courseTitle}</h3>
            <hr className="recap-divider" />
            <p className="recap-lessons-title">Leçons</p>
            <ul className="recap-lessons-list">
              {courses
                .filter((c) => c.courseId === courseId && c.type === "lesson")
                .map((courseLesson) => (
                  <li
                    key={courseLesson.id}
                    className={`recap-lesson-item ${courseLesson.id === lessonId ? 'active' : ''}`}
                  >
                    <Link to={`/catalog/courses/${courseId}/lesson/${courseLesson.id}`}>
                      {courseLesson.title}
                    </Link>
                  </li>
                ))}
            </ul>

            {/* Progress Bar */}
            <p className="recap-progress-title">Progression</p>
            <div className="recap-progress-bar">
              <div
                className="recap-progress-bar-fill"
                style={{
                  width: `${((courses.filter((c) => c.courseId === courseId && c.type === "lesson")
                    .findIndex((c) => c.id === lessonId) + 1) /
                    courses.filter((c) => c.courseId === courseId && c.type === "lesson").length) * 100}%`
                }}
              ></div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

    </div>
  );
}

// Fonction pour formater le texte (gras et italique)
const formatText = (text) => {
  return text
    .split(/\*(.*?)\*/g)
    .map((chunk, index) =>
      index % 2 === 1 ? <strong key={index}>{chunk}</strong> : chunk
    )
    .flatMap((part, i) =>
      typeof part === "string"
        ? part.split(/\*\*-(.*?)\-\*\*/g).map((subChunk, subIndex) =>
          subIndex % 2 === 1 ? <em key={`${i}-${subIndex}`}>{subChunk}</em> : subChunk
        )
        : part
    );
};

export default LessonPage;