import React from "react";
import { useParams } from "react-router-dom";
import courses from "../../data/courses/index-courses";
import { Link } from "react-router-dom";
import "./CoursePage.css";
import toolImages from "../../data/ToolsData";

function CoursePage() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <h2>Cours introuvable</h2>;
  }

  return (
    <div className="course-page">
      <div className="page_topbar">
        <h2 className="page_topbar-title">
          <Link to="/catalog">Catalogue</Link> {' > '}
          <Link to={`/catalog/courses/${courseId}`} className="current-course-link">
            {course.title}
          </Link>
        </h2>
      </div>

      <div className="course-page-wrapper">
        <div className="course-page-header">
          <div className="course-page-header-top">
            <div className="course-page-header-top-infos">
              <h1 className="course-page-header-title">{course.title}</h1>
              <p className="course-page-header-subtitle">{course.description}</p>
            </div>
            <div className="course-page-header-top-labels">
              <div className="course-page-header-top-labels-item">
                <p className="course-page-header-top-labels-name">Outils</p>

                {course.tools.map((tool, index) => (
                  <div key={index} className="course-page-header-top-labels-content">
                    <img
                      src={toolImages[tool]?.image || "/images/default-tool.png"}
                      alt={toolImages[tool]?.name || "Unknown tool"}
                      className="course-page-header-top-labels-content-img"
                    />
                    <span className="course-page-header-top-labels-content-name">{toolImages[tool]?.name || tool}</span>
                  </div>
                ))}

              </div>
              <div className="course-page-header-top-labels-item">
                <p className="course-page-header-top-labels-name">Niveau</p>
                <div className="course-page-header-top-labels-content">
                  {course.difficulty}
                </div>
              </div>

            </div>
            
          </div>
          <div className="course-page-header-top-button-box">
              <a className="course-page-header-top-button">Voir le cours <span class="material-symbols-outlined">
                arrow_forward
              </span></a>
              <a className="course-page-header-top-button">+ Ajouter le cours pour mon équipe</a>

            </div>
            <div className="course-page-header-bottom">
            <div className="course-page-header-dropdown">
            <div className="course-page-header-dropdown-main">

</div>

</div>

            </div>

        </div>

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