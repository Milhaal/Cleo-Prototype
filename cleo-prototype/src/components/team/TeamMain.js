import React from "react";
import { Link } from "react-router-dom";
import "../Root.css";
import teamData from "../../data/TeamData";
import "./TeamMain.css";

function TeamMain() {
  return (
    <div className="page_wrapper">
      <div className="page_topbar page_topbar-space-between">
        <h2 className="page_topbar-title">Équipe</h2>
        <a className="page_topbar-button"><span class="material-symbols-outlined">
          add
        </span> Ajouter un employé</a>
      </div>
      <div className="team-page-wrapper">
        <div className="team-page-wrapper-top">
          <div className="team-page-wrapper-top-searchbox">
            <span class="material-symbols-outlined">
              search
            </span>
            <input className="team-page-wrapper-top-input" placeholder="Rechercher un employé"></input>
          </div>
          <div className="team-page-wrapper-top-filter-box">
            <div className="team-page-wrapper-top-filter-box-content">
              <span class="material-symbols-outlined">
                filter_list
              </span>
              <p className="team-page-wrapper-top-filter-box-text">Filtres</p>
            </div>

          </div>

        </div>
        <div className="team-container">
          <div className="team-header">
            <div className="team-cell team-checkbox-all">
              <input type="checkbox" />
            </div>
            <div className="team-cell team-photo team-table-header-text">Photo</div>
            <div className="team-cell team-name team-table-header-text">Nom</div>
            <div className="team-cell team-email team-table-header-text">Email</div>
            <div className="team-cell team-last-login team-table-header-text">Dernière connexion</div>
            <div className="team-cell team-progress team-table-header-text">Complété</div>
          </div>

          {teamData.map((member) => (
            <div key={member.id} className="team-row">
              <div className="team-cell team-checkbox">
                <input type="checkbox" />
              </div>
              <div className="team-cell team-photo">
                <img
                  src={member.profileImage}
                  alt={member.name}
                  className="team-profile-pic"
                />
              </div>
              <div className="team-cell team-name">
                <Link to={`/profile/${member.id}`} className="team-name-text">{member.name}</Link>
              </div>
              <div className="team-cell team-email">{member.email}</div>
              <div className="team-cell team-last-login">{member.lastLogin}</div>
              <div className="team-cell team-progress">
                <span className="team-progress-text">{member.progress}%</span>
                <progress
                  value={member.progress}
                  max="100"
                  className="team-progress-bar"
                ></progress>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

export default TeamMain;