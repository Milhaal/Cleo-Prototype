import React from "react";
import { Link } from "react-router-dom";
import "../Root.css";
import teamData from "../../data/TeamData";
import "./TeamMain.css";

function TeamMain() {
  return (
    <div className="page_wrapper">
      <div className="page_topbar">
        <h2 className="page_topbar-title">Équipe</h2>
      </div>
      <div className="team-table">
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Dernière connexion</th>
              <th>Complété</th>
            </tr>
          </thead>
          <tbody>
            {teamData.map((member) => (
              <tr key={member.id}>
                <td>
                  <img
                    src={member.profileImage}
                    alt={member.name}
                    className="profile-pic"
                  />
                </td>
                <td>
                  <Link to={`/profile/${member.id}`}>{member.name}</Link>
                </td>
                <td>{member.email}</td>
                <td>{member.lastLogin}</td>
                <td>
                  <progress value={member.progress} max="100"></progress> {member.progress}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeamMain;