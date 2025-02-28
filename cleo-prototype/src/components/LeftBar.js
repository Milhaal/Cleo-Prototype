import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./LeftBar.css";
import "./Root.css";

function LeftBar() {
  const location = useLocation(); // ➤ Récupère la route actuelle
  const [isCollapsed, setIsCollapsed] = useState(false);

  // ➤ Effet pour replier LeftBar seulement sur /new-course
  useEffect(() => {
    if (location.pathname === "/new-course") {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [location.pathname]); // ➤ Se déclenche à chaque changement de route

  return (
    <div className={`leftbar_wrapper ${isCollapsed ? "collapsed" : ""}`}>
      <div className="leftbar_toggle" onClick={() => setIsCollapsed(!isCollapsed)}>
        <div className={`toggle-icon ${isCollapsed ? "rotate" : ""}`}>
          <span className="material-symbols-outlined">
            arrow_back_ios
          </span>
        </div>
      </div>

      <img className="leftbar_logo" src="/images/logo-cleo.png" alt="Logo" />

      <a className="leftbar_profile_link">
        <div className="leftbar_profile_link-left">
          <img className="leftbar_profile_link-pp" src="/images/naomie-pp.png" alt="Profile" />
          {!isCollapsed && (
            <div className="leftbar_profile_link-infos">
              <p className="leftbar_profile_link-infos-name">Naomie Halioua</p>
              <p className="leftbar_profile_link-infos-role">Manager RH</p>
            </div>
          )}
        </div>
        <img className="leftbar_profile_link-icon" src="/images/disconect-icon.png" alt="Disconnect" />
      </a>

      <div className="leftbar_links_box">
        <p className={`leftbar_links_box-title ${isCollapsed ? "hidden" : ""}`}>Vue Admin</p>
        <div className="leftbar_links_box-wrap">
          <NavLink to="/" className={({ isActive }) => isActive ? "leftbar_links_box-item leftbar_links_box-item-active" : "leftbar_links_box-item"}>
            <img className="leftbar_links_box-item-icon" src="/images/dashboard-icon.png" alt="Dashboard Icon" />
            {!isCollapsed && "Dashboard"}
          </NavLink>
          <NavLink to="/team" className={({ isActive }) => isActive ? "leftbar_links_box-item leftbar_links_box-item-active" : "leftbar_links_box-item"}>
            <img className="leftbar_links_box-item-icon" src="/images/team-icon.png" alt="Team Icon" />
            {!isCollapsed && "Équipe"}
          </NavLink>
        </div>
      </div>

      <div className="leftbar_links_box">
        <p className={`leftbar_links_box-title ${isCollapsed ? "hidden" : ""}`}>Vue Générale</p>
        <div className="leftbar_links_box-wrap">
          <NavLink to="/catalog" className={({ isActive }) => isActive ? "leftbar_links_box-item leftbar_links_box-item-active" : "leftbar_links_box-item"}>
            <img className="leftbar_links_box-item-icon" src="/images/catalog-icon.png" alt="Catalog Icon" />
            {!isCollapsed && "Catalogue"}
          </NavLink>
          <NavLink to="/memberspace" className={({ isActive }) => isActive ? "leftbar_links_box-item leftbar_links_box-item-active" : "leftbar_links_box-item"}>
            <img className="leftbar_links_box-item-icon" src="/images/member-icon.png" alt="Member Icon" />
            {!isCollapsed && "Mon espace"}
          </NavLink>
          <NavLink to="/new-course" className={({ isActive }) => isActive ? "leftbar_links_box-item leftbar_links_box-item-active" : "leftbar_links_box-item"}>
            <img className="leftbar_links_box-item-icon" src="/images/new-course-icon.png" alt="New Course Icon" />
            {!isCollapsed && "New Course"}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;