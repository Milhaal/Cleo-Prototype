import React from "react";
import { useParams } from "react-router-dom";
import "../Root.css";
import teamData from "../../data/TeamData";
import toolImages from "../../data/ToolsData";
import "./TeamMember.css"; // Nouveau fichier CSS pour styliser

function TeamMember() {
  const { id } = useParams();
  const member = teamData.find((m) => m.id.toString() === id);

  if (!member) {
    return <h2>Membre introuvable</h2>;
  }

  return (
    <div className="profile_wrapper">
      <div className="profile_header">
        <img src={member.profileImage} alt={member.name} className="profile-pic-large" />
        <div>
          <h2>{member.name}</h2>
          <p>Email: {member.email}</p>
          <p>Dernière connexion: {member.lastLogin}</p>
        </div>
      </div>

      <h3>Cours</h3>
      <div className="team-table">
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Rôle</th>
              <th>Outils</th>
              <th>Statut</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {member.courses.length > 0 ? (
              member.courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.name}</td>
                  <td>{course.role}</td>
                  <td>
                    <img
                      src={toolImages[course.tool]}
                      alt={course.tool}
                      className="tool-icon"
                    />
                  </td>
                  <td>{course.status}</td>
                  <td>{course.date || "--"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Aucun cours suivi</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeamMember;