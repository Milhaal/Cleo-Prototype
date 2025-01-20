import React from "react";
import { useParams } from "react-router-dom";
import courses from "../../data/courses/index-courses";
import { Link } from "react-router-dom";

function CoursePage() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <h2>Cours introuvable</h2>;
  }

  return (
    <div className="course-page">
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      <div className="course-details">
        <strong>Outils :</strong> {course.tools.join(", ")}<br />
        <strong>Niveau :</strong> {course.difficulty}
      </div>

      <div className="course-about">
        <h3>À propos de ce cours</h3>
        <p>{course.about}</p>
      </div>

      <div className="course-syllabus">
        <h3>Syllabus</h3>
        <ul>
          {course.syllabus.map((lesson) => (
            <li key={lesson.id}>
              <Link to={`/catalog/courses/${courseId}/lesson/${lesson.id}`}>
                {lesson.title} - {lesson.status}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CoursePage;