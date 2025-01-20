import { Link } from "react-router-dom";
import "./LeftBar.css";
import "./Root.css";

function LeftBar() {
  return (
    <div className="leftbar_wrapper">
      <img className="leftbar_logo" src="/images/logo-cleo.png" alt="Logo" />
      <a className="leftbar_profile_link">
        <div className="leftbar_profile_link-left">
          <img className="leftbar_profile_link-pp" src="/images/naomie-pp.png" alt="Profile" />
          <div className="leftbar_profile_link-infos">
            <p className="leftbar_profile_link-infos-name">Naomie Halioua</p>
            <p className="leftbar_profile_link-infos-role">Manager RH</p>
          </div>
        </div>
        <img className="leftbar_profile_link-icon" src="/images/disconect-icon.png" alt="Disconnect" />
      </a>

      <div className="leftbar_links_box">
        <p className="leftbar_links_box-title">Vue Admin</p>
        <div className="leftbar_links_box-wrap">
          <Link to="/" className="leftbar_links_box-item">
            <img className="leftbar_links_box-item-icon" src="/images/dashboard-icon.png" alt="Dashboard Icon" />
            Dashboard
          </Link>
          <Link to="/team" className="leftbar_links_box-item">
            <img className="leftbar_links_box-item-icon" src="/images/team-icon.png" alt="Team Icon" />
            Équipe
          </Link>
        </div>
      </div>

      <div className="leftbar_links_box">
        <p className="leftbar_links_box-title">Vue Générale</p>
        <div className="leftbar_links_box-wrap">
          <Link to="/catalog" className="leftbar_links_box-item">
            <img className="leftbar_links_box-item-icon" src="/images/catalog-icon.png" alt="Catalog Icon" />
            Catalogue
          </Link>
          <Link to="/memberspace" className="leftbar_links_box-item">
            <img className="leftbar_links_box-item-icon" src="/images/member-icon.png" alt="Member Icon" />
            Mon espace
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;