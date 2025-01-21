import React from "react";
import { useParams, Link } from "react-router-dom";
import courses from "../../data/courses/index-courses";

function LessonPage() {
  const { courseId, lessonId } = useParams();

  // Trouver la leçon correcte
  const lesson = courses.find(
    (c) => c.type === "lesson" && c.courseId === courseId && c.id === lessonId
  );

  if (!lesson) {
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

      <h1>{lesson.title}</h1>
      <p>{lesson.description}</p>

      <div className="lesson-details">
        <strong>Niveau :</strong> {lesson.courseDifficulty}
      </div>

      <div className="lesson-content">
        {lesson.content.map((item) => {
          switch (item.type) {
            case "text":
              return <p key={item.id}>{item.value}</p>;
            case "image":
              return <img key={item.id} src={item.url} alt={item.alt} />;
            case "video":
              return <video key={item.id} controls src={item.url} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export default LessonPage;