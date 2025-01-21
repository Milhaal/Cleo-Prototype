import React, { useState } from "react";
import { useParams } from "react-router-dom";
import courses from "../../data/courses/index-courses";
import { Link } from "react-router-dom";
import "./CoursePage.css";
import toolImages from "../../data/ToolsData";

function CoursePage() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  // État pour gérer chaque dropdown individuellement
  const [dropdownStates, setDropdownStates] = useState({
    about: false,
    skills: false,
  });

  // Fonction pour basculer l'état d'un dropdown spécifique
  const toggleDropdown = (key) => {
    setDropdownStates(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  if (!course) {
    return <h2>Cours introuvable</h2>;
  }

  return (
    <div className="course-page">
      <div className="page_topbar">
        <h2 className="page_topbar-title">
          <Link to="/catalog">Catalogue</Link>
          <span className="material-symbols-outlined">chevron_right</span>
          <Link to={`/catalog/courses/${courseId}`} className="current-course-link">
            {course.title}
          </Link>
        </h2>
      </div>

      <div className="course-page-wrapper">
        
        {/* =====Header==== */}

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
                    <span className="course-page-header-top-labels-content-name">
                      {toolImages[tool]?.name || tool}
                    </span>
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
            <a className="course-page-header-top-button">Voir le cours 
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a className="course-page-header-top-button">
              <span className="material-symbols-outlined">add</span> Ajouter le cours pour mon équipe
            </a>
          </div>

          <div className="course-page-header-bottom">
            <div 
              className="course-page-header-dropdown" 
              onClick={() => toggleDropdown('about')}
            >
              <div className="course-page-header-dropdown-main">
                <p className="course-page-header-dropdown-title">À propos de ce cours</p>
                <span 
                  className={`material-symbols-outlined dropdown-icon ${dropdownStates.about ? 'open' : ''}`}
                >
                  keyboard_arrow_down
                </span>
              </div>
              <p className={`course-page-header-dropdown-text ${dropdownStates.about ? 'show' : ''}`}>
                {course.about}
              </p>
            </div>

            <div 
              className="course-page-header-dropdown" 
              onClick={() => toggleDropdown('skills')}
            >
              <div className="course-page-header-dropdown-main">
                <p className="course-page-header-dropdown-title">Compétences acquises</p>
                <span 
                  className={`material-symbols-outlined dropdown-icon ${dropdownStates.skills ? 'open' : ''}`}
                >
                  keyboard_arrow_down
                </span>
              </div>
              <p className={`course-page-header-dropdown-text ${dropdownStates.skills ? 'show' : ''}`}>
                {course.skills}
              </p>
            </div>
          </div>
        </div>

        {/* =====Syllabus==== */}
        <div className="course-syllabus">
          <div className="course-syllabus-title-box">
            <h3 className="course-syllabus-title">Syllabus</h3>
            <p className="course-syllabus-subtitle">Les chapitres ci-dessous sont présentés dans l'ordre, le premier étant en haut de la page.</p>
          </div>
          <ul className="course-syllabus-list">
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
    </div>
  );
}

export default CoursePage;