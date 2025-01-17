import DashboardMain from "./dashboard/DashboardMain";
import TeamMain from "./team/TeamMain";
import CatalogMain from "./catalog/CatalogMain";
import MemberSpaceMain from "./member-space/MemberSpaceMain";
import "./PagesWrapper.css";
import "./Root.css";

function PagesWrapper({ activePage }) {
  let CurrentPage;

  switch (activePage) {
    case "Dashboard":
      CurrentPage = <DashboardMain />;
      break;
    case "Team":
      CurrentPage = <TeamMain />;
      break;
    case "Catalog":
      CurrentPage = <CatalogMain />;
      break;
    case "MemberSpace":
      CurrentPage = <MemberSpaceMain />;
      break;
    default:
      CurrentPage = <DashboardMain />;
      break;
  }

  return (
    <div className="pageswrapper_wrapper">
      {CurrentPage}
    </div>
  );
}

export default PagesWrapper;