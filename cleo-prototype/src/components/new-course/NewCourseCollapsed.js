import React, { useState } from 'react';
import './NewCourseCollapsed.css';

const NewCourseCollapsed = () => {
    const [openIndex, setOpenIndex] = useState(null);

    // Fonction pour gérer l'ouverture/fermeture d'un élément
    const toggleCollapse = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const collapsedItems = [
        {
            title: "Titre accrocheur",
            content: "Mentionnez le poste, le niveau d’expérience et un élément distinctif.",
            example: "Chargé(e) de Communication Junior – Expertise Réseaux Sociaux"
        },
        {
            title: "Introduction engageante",
            content: "Présentez l’entreprise et donnez envie de rejoindre vos équipes.",
            example: "Envie de relever des défis dans une entreprise innovante et dynamique ?"
        },
        {
            title: "Missions principales",
            content: "Listez 3 à 5 responsabilités clés, en utilisant des verbes d’action (ex. : gérer, développer, analyser)."
        },
        {
            title: "Compétences requises",
            content: "Spécifiez les compétences techniques et comportementales (ex. : 'Maîtrise d’Excel et aptitude à travailler en équipe')."
        },
        {
            title: "Avantages offerts",
            content: "Télétravail, horaires flexibles, formations, bonus."
        }
    ];

    return (
        <div className='new-course-collapsed-container'>
            <h3 className="new-course-subtitle">Les éléments clés d’une offre d’emploi efficace :</h3>
            <div className='new-course-collapsed-box'>
                {collapsedItems.map((item, index) => (
                    <div key={index} className="new-course-collapsed" onClick={() => toggleCollapse(index)}>
                        {/* Topbar cliquable */}
                        <div className="new-course-collapsed-topbar">
                            <h3 className="new-course-collapsed-title">{item.title}</h3>
                            <span className={`material-symbols-outlined collapsed-icon`}>
                                {openIndex === index ? "remove" : "add"}
                            </span>
                        </div>

                        {/* Contenu qui s'affiche dynamiquement */}
                        {openIndex === index && (
                            <div className="new-course-collapsed-content">
                                <p className="new-course-collapsed-content-light">{item.content}</p>

                                {/* Affiche la ligne "Exemple :" uniquement si un exemple est présent */}
                                {item.example && (
                                    <>
                                        <div className="separator"></div>
                                        <p className="new-course-collapsed-example">
                                            <strong>Exemple :</strong> {item.example}
                                        </p>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewCourseCollapsed;