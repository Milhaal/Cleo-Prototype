import React from "react";
import { useNavigate } from "react-router-dom";
import "./CourseCard.css";
import toolImages from "../../data/ToolsData";
import expertData from "../../data/ExpertData";
import "../Root.css";

function CourseCard({ course }) {
  const navigate = useNavigate();

  // Trouver l'expert correspondant à l'ID de l'auteur du cours
  const expert = expertData.find((exp) => exp.id === course.authorId);

  return (
    <div
      className="course-card"
      onClick={() => navigate(`/catalog/courses/${course.id}`)}
    >
      <div className="course-card-content">
        <div className="course-card-top-row">
          <div className="course-difficulty">{course.difficulty}</div>
          <div className="course-tools">
            {course.tools.map((tool, index) => (
              <img
                key={index}
                src={toolImages[tool] || "/images/default-tool.png"}
                alt={tool}
                className="course-tool-logo"
              />
            ))}
          </div>
        </div>

        <div className="course-card-content-course">
          <h3 className="course-title">{course.title}</h3>
          <p className="course-description">{course.description}</p>
        </div>
      </div>

      {expert && (
        <div className="course-author">
          <img
            src={expert.photo}
            alt={expert.name}
            className="author-photo"
          />
          <div className="course-author-infos">
            <div className="course-author-infos-top">
              <p className="author-name">{expert.name}</p>
              <div className="author-company">
                <img
                  src={expert.companyLogo}
                  alt="Company Logo"
                  className="company-logo"
                />
              </div>
            </div>


            <p className="author-position">{expert.position}</p>

          </div>
        </div>
      )}
    </div>
  );
}

export default CourseCard;