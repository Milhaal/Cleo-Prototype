import "../Root.css";
import courses from "../../data/courses/index-courses";
import CourseCard from "./CourseCard";
import "./CatalogMain.css";
import Footer from "../Footer";

function CatalogMain() {
  return (
    <div className="page_wrapper">
      <div className="page_topbar">
        <h2 className="page_topbar-title">Catalogue</h2>
      </div>

      <div className="catalog-wrapper">
        <div className="catalog-popular">
          {/* Section des cours populaires (peut être remplie plus tard) */}
        </div>
        <div className="catalog-content">
          <div className="catalog-content-filters">
            {/* Filtres pour les cours (peut être ajouté plus tard) */}
          </div>
          <div className="catalog-content-main">
            <div className="catalog-content-main-filters">
              {/* Options de filtrage supplémentaires si nécessaire */}
            </div>
            <div className="catalog-content-list">
              {courses.map((item) => (
                <CourseCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
      
    </div>
  );
}

export default CatalogMain;