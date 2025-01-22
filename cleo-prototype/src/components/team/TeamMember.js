import React from "react";
import { useParams } from "react-router-dom";
import "../Root.css";
import teamData from "../../data/TeamData";
import toolImages from "../../data/ToolsData";
import "./TeamMember.css";

function TeamMember() {
  const { id } = useParams();
  const member = teamData.find((m) => m.id.toString() === id);

  if (!member) {
    return <h2>Membre introuvable</h2>;
  }

  return (
    <div className="profile_wrapper">
      <div className="member-topbar-wrapper">
        <div className="member-topbar">
          <div className="member-topbar-banner"></div>
          <img
            className="member-topbar-pp"
            src={member.profileImage}
            alt={member.name}
          />
        </div>
        <h2 className="member-topbar-title">{member.name}</h2>
      </div>

      <div className="profile-page-wrapper">
        <div className="profile_header-infos">
          <div className="profile-header-infos-box">
            <p className="profile_header-infos-span">Adresse email</p>
            <p className="profile_header-infos-text">{member.email}</p>
          </div>
          <div className="profile-header-infos-box">
            <p className="profile_header-infos-span">Dernière connexion</p>
            <p className="profile_header-infos-text">{member.lastLogin}</p>
          </div>
        </div>

        <div className="profile-tabs-box">
          <div className="profile-tab">
            <h3 className="profile-tab-name">Cours</h3>
          </div>
        </div>

        <div className="team-courses-container">
        <div className="team-courses-header">
          <div className="team-course-cell team-course-name">Nom</div>
          <div className="team-course-cell team-course-role">Rôle</div>
          <div className="team-course-cell team-course-tool">Outils</div>
          <div className="team-course-cell team-course-status">Statut</div>
          <div className="team-course-cell team-course-date">Date</div>
        </div>

        {member.courses.length > 0 ? (
          member.courses.map((course, index) => (
            <div key={index} className="team-courses-row">
              <div className="team-course-cell">{course.name}</div>
              <div className="team-course-cell">{course.role}</div>
              <div className="team-course-cell">
                <img
                  src={toolImages[course.tool]}
                  alt={course.tool}
                  className="tool-icon"
                />
              </div>
              <div className="team-course-cell">{course.status}</div>
              <div className="team-course-cell">{course.date || "--"}</div>
            </div>
          ))
        ) : (
          <div className="team-courses-empty">
            <p>Aucun cours suivi</p>
          </div>
        )}
      </div>
      </div>

      
    </div>
  );
}

export default TeamMember;