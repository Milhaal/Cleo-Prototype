import React from "react";
import { useNavigate } from "react-router-dom";
import "./CourseCard.css";
import toolImages from "../../data/ToolsData";
import expertData from "../../data/ExpertData";
import "../Root.css";

function CourseCard({ item }) {
  const navigate = useNavigate();
  const isCourse = item.type === "course";

  const handleClick = () => {
    if (isCourse) {
      navigate(`/catalog/courses/${item.id}`);
    } else {
      navigate(`/catalog/courses/${item.courseId}/lesson/${item.id}`);
    }
  };

  // Trouver l'expert correspondant à l'ID de l'auteur du cours
  const expert = expertData.find((exp) => exp.id === item.authorId);

  const displayTrialLabel = isCourse ? item.trial : item.courseTrial;

  return (
    <div className="course-card" onClick={handleClick}>
      <div className="course-card-content">
        <div className="course-card-top-row">
          <div className="course-card-top-row-box">
            <div className="course-difficulty">
              {isCourse ? item.difficulty : item.courseDifficulty}
            </div>
            <div className={`course-trial ${displayTrialLabel ? '' : 'catalog-trial'}`}>  
              {displayTrialLabel ? "Essai" : ""}
            </div>
          </div>
          
          <div className="course-tools">
            {(isCourse ? item.tools : item.courseTools).map((tool, index) => (
              <img
                key={index}
                src={toolImages[tool]?.image || "/images/default-tool.png"}
                alt={tool}
                className="course-tool-logo"
              />
            ))}
          </div>
        </div>

        <div className="course-card-content-course">
          <h3 className="course-title">{item.title}</h3>
          <p className="course-description">{item.description}</p>
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