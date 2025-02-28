import React, { useState } from 'react';
import './NewCourseDropdown.css';

const NewCourseDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="new-course-dropdown" onClick={() => setIsOpen(!isOpen)}>
            {/* Topbar cliquable */}
            <div className="new-course-dropdown-topbar">
                <h3 className="new-course-subtitle">Pourquoi ce chapitre est essentiel ?</h3>
                <span className={`material-symbols-outlined dropdown-arrow ${isOpen ? "open" : ""}`}>
                    keyboard_arrow_down
                </span>
            </div>

            {/* Contenu qui s'affiche dynamiquement */}
            {isOpen && (
                <div className="new-course-dropdown-content">
                    <p className="new-course-dropdown-content-light">
                        Les offres d’emploi sont souvent le premier contact entre une entreprise et un candidat.
                        Une offre claire, engageante et optimisée joue un rôle crucial pour :
                    </p>
                    <ul className="new-course-dropdown-list">
                        <li><b>Attirer des talents qualifiés</b> : Une bonne offre se démarque dans la masse.</li>
                        <li><b>Optimiser les candidatures</b> : Plus une offre est ciblée, plus elle attire des profils correspondant aux attentes.</li>
                        <li><b>Renforcer l’image de l’entreprise</b> : Une offre bien rédigée reflète une marque employeur forte et inclusive.</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NewCourseDropdown;