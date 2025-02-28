import React, { useState } from 'react';
import './NewCourseCollapsed.css';

const NewCourseCollapsedDuplicate = () => {
    const [openIndex, setOpenIndex] = useState(null);

    // Fonction pour gérer l'ouverture/fermeture d'un élément
    const toggleCollapse = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const collapsedItems = [
        {
            title: "Étape 1 : Créez une première version avec CoPilot",
            content: (
                <>
                    <p className='collapsed-item-subtitle'><strong>Prompt Simplifié :</strong></p>
                    <p className='collapsed-item-text'>Crée une offre d’emploi pour un poste de développeur Full Stack. Inclue : une introduction dynamique, 3 à 5 missions principales, des compétences techniques et comportementales, et un paragraphe sur les avantages.</p>

                    <p className='collapsed-item-subtitle'><strong>Prompt détaillé :</strong></p>
                    <ul className='collapsed-item-text'>
                        <li><strong>Rôle :</strong></li>
                        <ul>
                            <li>Mentionne le titre "Développeur Full Stack Junior".</li>
                            <li>Décris brièvement le poste : "Concevoir et maintenir des applications web performantes."</li>
                        </ul>

                        <li><strong>Contexte :</strong></li>
                        <ul>
                            <li>Explique le secteur d’activité de l’entreprise : "Startup SaaS en forte croissance."</li>
                            <li>Ajoute un élément différenciant : "Projets innovants dans le domaine de l’automatisation."</li>
                        </ul>

                        <li><strong>Résultat attendu :</strong></li>
                        <ul>
                            <li>Spécifie ce que le candidat devra accomplir : "Créer des fonctionnalités robustes et améliorer l’expérience utilisateur sur nos plateformes."</li>
                        </ul>

                        <li><strong>Objectif :</strong></li>
                        <ul>
                            <li>Précise pourquoi ce poste est crucial : "Contribuer à la scalabilité des produits pour soutenir notre croissance rapide."</li>
                        </ul>

                        <li><strong>Contraintes :</strong></li>
                        <ul>
                            <li>Mentionne les compétences requises : "React.js, Node.js, sens du détail, esprit d’équipe."</li>
                            <li>Ajoute une préférence d’expérience : "1 à 2 ans d’expérience ou projet personnel significatif."</li>
                        </ul>

                        <li><strong>Format :</strong></li>
                        <ul>
                            <li>Structure : Introduction, missions, compétences, avantages.</li>
                            <li>Nombre de points : Maximum 5 pour les missions et compétences.</li>
                        </ul>

                        <li><strong>Ton :</strong></li>
                        <ul>
                            <li>Adopte un ton dynamique et accessible, tout en restant professionnel et inclusif.</li>
                        </ul>
                    </ul>
                </>
            )
        },
        {
            title: "Étape 2 : Optimisez votre offre pour plus de visibilité",
            content: (
                <>
                    <p className='collapsed-item-subtitle'><strong>Prompt pour optimiser :</strong></p>
                    <ul className='collapsed-item-text'>
                        <li>Ajoutant des mots-clés pour maximiser la visibilité sur LinkedIn et Indeed.</li>
                        <li>Assurant que le langage est inclusif et accessible à tous.</li>
                    </ul>
                </>
            )
        },
        {
            title: "Étape 3 : Valider et tester",
            content: (
                <>
                    <ul className='collapsed-item-text'>
                        <li><strong>Relisez avec votre équipe :</strong> Assurez-vous que les missions et compétences sont réalistes.</li>
                        <li><strong>Publiez sur plusieurs plateformes :</strong> LinkedIn, Indeed, site carrière.</li>
                        <li><strong>Mesurez les résultats :</strong> Analysez les taux de clics et les candidatures reçues.</li>
                    </ul>

                    <p className='collapsed-item-text'><strong>Check-list :</strong></p>
                    <ul className='collapsed-item-text'>
                        <li>Les missions sont-elles claires et compréhensibles ?</li>
                        <li>Les compétences sont-elles réalistes pour le poste ?</li>
                        <li>Les avantages sont-ils bien mis en avant ?</li>
                    </ul>
                </>
            )
        }
    ];

    return (
        <div className='new-course-collapsed-container'>
            <h3 className="new-course-subtitle">Méthode étape par étape pour rédiger une offre d’emploi avec CoPilot</h3>
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
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewCourseCollapsedDuplicate;