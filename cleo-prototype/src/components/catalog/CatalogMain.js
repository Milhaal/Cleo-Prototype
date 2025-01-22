import React, { useState } from "react";
import "../Root.css";
import courses from "../../data/courses/index-courses";
import CourseCard from "./CourseCard";
import toolImages from "../../data/ToolsData";
import "./CatalogMain.css";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

// Mapping des rôles pour l'affichage utilisateur
const roleMappings = {
  RH: "Ressources Humaines (RH)",
  Communication: "Communication",
  Marketing: "Marketing",
  Commercial: "Commercial / Ventes",
  Finance: "Finance",
  IT: "Informatique (IT)",
  Production: "Production",
  Achats: "Achats",
  Stratégie: "Stratégie / Direction Générale",
  "R&D": "R&D",
  ServiceClient: "Service Client",
  RSE: "RSE",
};

function CatalogMain() {
  const navigate = useNavigate();

  // États pour gérer les filtres sélectionnés
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [openDropdowns, setOpenDropdowns] = useState({
    difficulty: false,
    tool: false,
    role: false,
  });

  // Gestion des filtres (ajout / suppression)
  const handleFilterChange = (value, filterType) => {
    setSelectedFilters((prev) => {
      const existing = prev.find((filter) => filter.value === value);
      if (existing) {
        return prev.filter((filter) => filter.value !== value);
      } else {
        return [...prev, { type: filterType, value }];
      }
    });
  };

  
  // Liste des outils populaires avec les cours associés
  const popularTools = [
    { key: "ChatGPT", courseId: "course2" },
    { key: "Copilot", courseId: "" },
    { key: "Gemini", courseId: "" },
    { key: "MistralAI", courseId: "" },
  ];

  // Fonction pour supprimer un filtre spécifique
  const removeFilter = (value) => {
    setSelectedFilters((prev) => prev.filter((filter) => filter.value !== value));
  };

  // Fonction pour effacer un type spécifique de filtre (difficulté, outils, rôle)
  const clearCategoryFilter = (filterType) => {
    setSelectedFilters((prev) => prev.filter((filter) => filter.type !== filterType));
  };

  // Fonction pour effacer tous les filtres
  const clearFilters = () => {
    setSelectedFilters([]);
  };

  // Fonction pour ouvrir/fermer les dropdowns
  const toggleDropdown = (type) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  // Extraire les rôles uniques des cours
  const roleOptions = [...new Set(courses.map((course) => course.courseRole).filter(Boolean))].map((role) => ({
    value: role,
    label: roleMappings[role] || role,
  }));

  // Extraire les outils uniques des cours
  const toolOptions = [...new Set(courses.flatMap((course) => course.courseTools).filter(Boolean))].map((tool) => ({
    value: tool,
    label: toolImages[tool]?.name || tool,
    image: toolImages[tool]?.image || "/images/default-tool.png",
  }));
  const trialMatch =
  selectedFilters.some((filter) => filter.type === "trial")
    ? courses.filter((course) => course.trial === true)
    : courses;

const filteredItems = trialMatch.filter((item) => {
  const difficultyMatch =
    selectedFilters.filter((filter) => filter.type === "difficulty").length === 0 ||
    selectedFilters.some(
      (filter) =>
        (filter.type === "difficulty" && filter.value === item.difficulty) ||
        (filter.type === "difficulty" && filter.value === item.courseDifficulty)
    );

  const roleMatch =
    selectedFilters.filter((filter) => filter.type === "role").length === 0 ||
    selectedFilters.some(
      (filter) =>
        (filter.type === "role" && filter.value === item.role) ||
        (filter.type === "role" && filter.value === item.courseRole)
    );

  const toolMatch =
    selectedFilters.filter((filter) => filter.type === "tool").length === 0 ||
    selectedFilters.some(
      (filter) =>
        (filter.type === "tool" && item.tools?.includes(filter.value)) ||
        (filter.type === "tool" && item.courseTools?.includes(filter.value))
    );

  return difficultyMatch && roleMatch && toolMatch;
});
  return (
    <div className="page_wrapper">
      <div className="page_topbar">
        <h2 className="page_topbar-title">Catalogue</h2>
      </div>

      <div className="catalog-wrapper">
              {/* Section Cours Populaires */}
              <div className="catalog-popular">
          <h2 className="catalog-title">Cours populaires</h2>
          <div className="catalog-popular-box">
            {popularTools.map((tool, index) => {
              const toolData = toolImages[tool.key];

              return (
                <div
                  key={index}
                  className={`catalog-popular-item ${tool.courseId ? "clickable" : ""}`}
                  onClick={() => tool.courseId && navigate(`/catalog/courses/${tool.courseId}`)}
                  style={{ cursor: tool.courseId ? "pointer" : "default" }}
                >
                  <img
                    src={toolData?.image || "/images/default-tool.png"}
                    alt={toolData?.name || "Unknown tool"}
                    className="catalog-popular-item-img"
                  />
                  <p className="catalog-popular-item-title">{toolData?.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="catalog-content">
          <h2 className="catalog-title">Découvrir tous nos cours</h2>
          <div className="catalog-content-box">
            <div className="catalog-content-filters">
              <div className="catalog-content-filters-top">
                <h3 className="catalog-content-filters-top-title">Filtres</h3>
                <a className="catalog-content-filters-top-button" onClick={clearFilters}>
                  Tout effacer
                </a>
              </div>

              <p className="catalog-content-filters-numbers">
                Affichage de {courses.length} cours
              </p>
              <div className="catalog-content-filters-switch-box">
  <label className="catalog-switch">
    <input
      type="checkbox"
      checked={selectedFilters.some((filter) => filter.type === "trial")}
      onChange={() => handleFilterChange("Essai", "trial")}
    />
    <span className="catalog-switch-slider"></span>
  </label>
  <p className="catalog-content-filters-switch-box-text">Essai</p>
</div>
              <div className="catalog-content-filters-content">
                {/* Filtres de difficulté */}
                <div className="catalog-content-filters-dropdown-box">
                  <div
                    className="catalog-content-filters-dropdown-label"
                    onClick={() => toggleDropdown("difficulty")}
                  >
                    <p className="catalog-content-filters-dropdown-title">Difficulté</p>
                    <span
                      className={`material-symbols-outlined ${openDropdowns.difficulty ? "open" : ""
                        }`}
                    >
                      keyboard_arrow_down
                    </span>
                  </div>
                  <div
                    className="catalog-content-filters-dropdown-content"
                    style={{ display: openDropdowns.difficulty ? "flex" : "none" }}
                  >
                    {["Débutant", "Intermédiaire", "Avancé"].map((level) => (
                      <div key={level} className="catalog-content-filters-dropdown-item">
                        <input
                          type="checkbox"
                          checked={selectedFilters.some((filter) => filter.value === level)}
                          onChange={() => handleFilterChange(level, "difficulty")}
                        />
                        <label className="catalog-content-filters-dropdown-content-text">{level}</label>
                      </div>
                    ))}
                    <button className="catalog-filter-clear" onClick={() => clearCategoryFilter("difficulty")}>
                      Effacer
                    </button>
                  </div>
                </div>

                {/* Filtres d'outils */}
                <div className="catalog-content-filters-dropdown-box">
                  <div
                    className="catalog-content-filters-dropdown-label"
                    onClick={() => toggleDropdown("tool")}
                  >
                    <p className="catalog-content-filters-dropdown-title">Outils</p>
                    <span
                      className={`material-symbols-outlined ${openDropdowns.tool ? "open" : ""
                        }`}
                    >
                      keyboard_arrow_down
                    </span>
                  </div>
                  <div
                    className="catalog-content-filters-dropdown-content"
                    style={{ display: openDropdowns.tool ? "flex" : "none" }}
                  >
                    {toolOptions.map((tool) => (
                      <div
                        key={tool.value}
                        className={`catalog-tool-item ${selectedFilters.some((filter) => filter.value === tool.value) ? "selected" : ""}`}
                        onClick={() => handleFilterChange(tool.value, "tool")}
                      >
                        <img src={tool.image} alt={tool.label} className="filter-tool-logo" />
                        <span className="catalog-content-filters-dropdown-content-text">{tool.label}</span>
                      </div>
                    ))}
                    <button className="catalog-filter-clear" onClick={() => clearCategoryFilter("tool")}>
                      Effacer
                    </button>
                  </div>
                </div>

                {/* Filtres de rôles */}
                <div className="catalog-content-filters-dropdown-box">
                  <div
                    className="catalog-content-filters-dropdown-label"
                    onClick={() => toggleDropdown("role")}
                  >
                    <p className="catalog-content-filters-dropdown-title">Rôle</p>
                    <span
                      className={`material-symbols-outlined ${openDropdowns.role ? "open" : ""
                        }`}
                    >
                      keyboard_arrow_down
                    </span>
                  </div>
                  <div
                    className="catalog-content-filters-dropdown-content"
                    style={{ display: openDropdowns.role ? "flex" : "none" }}
                  >
                    {roleOptions.map((role) => (
                      <div key={role.value} className="catalog-content-filters-dropdown-item">
                        <input
                          type="checkbox"
                          checked={selectedFilters.some((filter) => filter.value === role.value)}
                          onChange={() => handleFilterChange(role.value, "role")}
                        />
                        <label className="catalog-content-filters-dropdown-content-text">{role.label}</label>
                      </div>
                    ))}
                    <button className="catalog-filter-clear" onClick={() => clearCategoryFilter("role")}>
                      Effacer
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="catalog-content-main">
            <div className="catalog-content-main-filters-selected">
  {selectedFilters.map((filter, index) => (
    <span key={index} className="catalog-content-main-filter-tag">
      {filter.value}
      <span
        className="material-symbols-outlined catalog-content-main-remove-filter"
        onClick={() => removeFilter(filter.value)}
      >
        close
      </span>
    </span>
  ))}
</div>
              <div className="catalog-content-list">
                {filteredItems.map((item) => (
                  <CourseCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CatalogMain;