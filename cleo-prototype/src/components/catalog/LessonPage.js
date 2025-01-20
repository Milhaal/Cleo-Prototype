import React from "react";
import { useParams } from "react-router-dom";
import courses from "../../data/courses/index-courses";

function LessonPage() {
  const { courseId, lessonId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <h2>Cours introuvable</h2>;
  }

  const lesson = course.syllabus.find(l => l.id === lessonId);

  if (!lesson || !lesson.content) {
    return <h2>Leçon introuvable</h2>;
  }

  return (
    <div className="lesson-page">
      <h1>{lesson.title}</h1>
      <p>{lesson.description}</p>

      <div className="lesson-details">
        <strong>Outil :</strong> {course.tools.join(", ")}<br />
        <strong>Niveau :</strong> {course.difficulty}
      </div>

      <div className="lesson-content">
        {lesson.content.map((item) => {
          switch (item.type) {
            case "subtitle":
              return <h2 key={item.id}>{item.value}</h2>;
            case "text":
              return <p key={item.id}>{item.value}</p>;
            case "image":
              return <img key={item.id} src={item.url} alt={item.alt} style={{ maxWidth: "100%", height: "auto" }} />;
            case "video":
              return (
                <video key={item.id} controls style={{ maxWidth: "100%" }}>
                  <source src={item.url} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export default LessonPage;