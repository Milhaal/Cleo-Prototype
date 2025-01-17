import "./LeftBar.css";
import "./Root.css";

function LeftBar({ onChangePage, activePage }) {
  return (
    <div className="leftbar_wrapper">
      <img className="leftbar_logo" src="./images/logo-cleo.png" alt="Logo"></img>
      <a className="leftbar_profile_link">
        <div className="leftbar_profile_link-left">
          <img className="leftbar_profile_link-pp" src="./images/naomie-pp.png" alt="Profile"></img>
          <div className="leftbar_profile_link-infos">
            <p className="leftbar_profile_link-infos-name">Naomie Halioua</p>
            <p className="leftbar_profile_link-infos-role">Manager RH</p>
          </div>
        </div>
        <img className="leftbar_profile_link-icon" src="./images/disconect-icon.png" alt="Disconnect"></img>
      </a>

      <div className="leftbar_links_box">
        <p className="leftbar_links_box-title">Vue Admin</p>
        <div className="leftbar_links_box-wrap">
          <a
            className={`leftbar_links_box-item ${
              activePage === "Dashboard" ? "leftbar_links_box-item-active" : ""
            }`}
            onClick={() => onChangePage("Dashboard")}
          >
            <img
              className="leftbar_links_box-item-icon"
              src="./images/dashboard-icon.png"
              alt="Dashboard Icon"
            ></img>
            Dashboard
          </a>
          <a
            className={`leftbar_links_box-item ${
              activePage === "Team" ? "leftbar_links_box-item-active" : ""
            }`}
            onClick={() => onChangePage("Team")}
          >
            <img
              className="leftbar_links_box-item-icon"
              src="./images/team-icon.png"
              alt="Team Icon"
            ></img>
            Équipe
          </a>
        </div>
      </div>
      <div className="leftbar_links_box">
        <p className="leftbar_links_box-title">Vue Générale</p>
        <div className="leftbar_links_box-wrap">
          <a
            className={`leftbar_links_box-item ${
              activePage === "Catalog" ? "leftbar_links_box-item-active" : ""
            }`}
            onClick={() => onChangePage("Catalog")}
          >
            <img
              className="leftbar_links_box-item-icon"
              src="./images/catalog-icon.png"
              alt="Catalog Icon"
            ></img>
            Catalogue
          </a>
          <a
            className={`leftbar_links_box-item ${
              activePage === "MemberSpace" ? "leftbar_links_box-item-active" : ""
            }`}
            onClick={() => onChangePage("MemberSpace")}
          >
            <img
              className="leftbar_links_box-item-icon"
              src="./images/member-icon.png"
              alt="Member Icon"
            ></img>
            Mon espace
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;