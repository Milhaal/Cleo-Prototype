import { useState } from "react";
import LeftBar from "./LeftBar";
import PagesWrapper from "./PagesWrapper";
import "./Root.css";
import "./Canva.css";

function Canva() {
  const [activePage, setActivePage] = useState("Dashboard"); // État pour suivre la page active

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="canva_wrapper">
      <LeftBar onChangePage={handlePageChange} activePage={activePage} />
      <PagesWrapper activePage={activePage} />
    </div>
  );
}

export default Canva;