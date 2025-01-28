import React from "react";
import { useNavigate } from "react-router-dom";
import "../Root.css";
import "./MemberSpaceMain.css";
import teamData from "../../data/TeamData";
import courses from "../../data/courses/index-courses";

// Fonction pour récupérer le rôle du cours parent en fonction de l'ID du cours
const getCourseRoleById = (courseId) => {
  const course = courses.find((c) => c.id === courseId && c.type === "course");
  return course ? course.role : "Non défini";
};

// Composant CourseItem pour afficher les cours dynamiquement
const CourseItem = ({ id, title, tools, completion }) => {
  const navigate = useNavigate();

  const handleCourseClick = () => {
    navigate(`/catalog/courses/${id}`);
  };

  // Récupération du rôle du cours parent
  const courseRole = getCourseRoleById(id);

  return (
    <div className="memberspace-content-column-item" onClick={handleCourseClick}>
      <div className="memberspace-content-column-item-row">
        <div className="memberspace-content-column-item-course-box">
          <p className="memberspace-content-column-item-course-tag">{courseRole}</p>
          <p className="memberspace-content-column-item-course-title">{title}</p>
          <div className="memberspace-content-column-item-course-tools-box">
            {tools.map((tool, index) => (
              <img
                key={index}
                className="memberspace-content-column-item-course-tools-item"
                src={tool}
                alt="Tool"
              />
            ))}
          </div>
        </div>
        <div className="memberspace-content-column-item-infos-box">
          <div className="memberspace-content-column-item-completion-box">
            <p className="memberspace-content-column-item-completion-rate">{completion}%</p>
            <p className="memberspace-content-column-item-completion-text">Complété</p>
          </div>
        </div>
      </div>
      <div className="memberspace-content-column-item-progressbar">
        <div
          className="memberspace-content-column-item-progressbar-fill"
          style={{ width: `${completion}%` }}
        ></div>
      </div>
    </div>
  );
};

function MemberSpaceMain() {
  // Trouver les informations de Naomie dans teamData
  const member = teamData.find((member) => member.name === "Naomie Halioua");

  if (!member) {
    return <h2>Utilisateur introuvable</h2>;
  }

  return (
    <div className="memberspace-wrapper">
      <div className="member-topbar-wrapper">
        <div className="member-topbar">
          <div className="member-topbar-banner"></div>
          <img className="member-topbar-pp" src={member.profileImage} alt="Profile" />
        </div>
        <h2 className="member-topbar-title">Bonjour {member.name} 👋</h2>
      </div>
      <div className="memberspace-content">
        <div className="memberspace-content-column">
          <h3 className="memberspace-content-column-title">Mes cours</h3>
          <div className="memberspace-content-column-list">
            {member.courses.map((course, index) => (
              <CourseItem
                key={index}
                id={course.id}
                title={course.name}
                tools={[course.tool]}
                completion={course.status === "Terminé" ? 100 : course.status === "En cours" ? 50 : 0}
              />
            ))}
          </div>
        </div>
        <div className="memberspace-content-column">
          <h3 className="memberspace-content-column-title">Mes compétences</h3>
          <div className="memberspace-content-column-item">
            <img
              className="memberspace-content-column-item-img"
              src="./images/skills-graph.png"
              alt="Skills"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberSpaceMain;