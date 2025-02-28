import React, { useEffect, useState } from "react";
import "./RightBar.css";
import experts from "../data/ExpertData.js";
import toolImages from "../data/ToolsData.js";

const RightBar = () => {
    const [expert, setExpert] = useState(null);

    // Simule les données du cours en cours
    const course = {
        title: "Introduction à l'IA pour les RH",
        tools: ["Copilot"], // Doit correspondre à une clé de toolImages
        level: "Débutant",
        progress: 1.75, // 35% de 5 chapitres
        totalChapters: 5,
        chapters: [
            { id: 1, title: "Questions métier ciblées en entretien grâce à l’IA", completed: true },
            { id: 2, title: "Rédiger des emails efficaces pour transmettre une étude de cas à un candidat", completed: true },
            { id: 3, title: "Rédiger des Offres d’Emploi qui Attirent et Convertissent", completed: false, progress: 35 },
            { id: 4, title: "Simplifier les débriefs d’entretien avec l’IA", completed: false },
            { id: 5, title: "Concevoir un programme de formation adapté avec l’IA", completed: false },
        ]
    };

    useEffect(() => {
        const lisa = experts.find(exp => exp.id === "lisa_t");
        setExpert(lisa);
    }, []);

    return (
        <div className="rightbar-wrapper">
            {/* SECTION DU COURS */}
            <div className="course-section">
                <div className="course-infos-box">
                    <h3 className="course-title">{course.title}</h3>
                    <div className="course-meta">

                        {/* Outil */}
                        <div className="course-meta-box">
                            <h4 className="course-meta-box-title">Outils</h4>
                            {course.tools.map((tool, index) => (
                                <div key={index} className="course-tag">
                                    <img className="course-tool-logo" src={toolImages[tool]?.image} alt={toolImages[tool]?.name} />
                                    <p>{toolImages[tool]?.name}</p>
                                </div>
                            ))}
                        </div>
                        {/* Level */}
                        <div className="course-meta-box">
                            <h4 className="course-meta-box-title">Niveau</h4>
                            <div className="course-tag">{course.level}</div>
                        </div>

                    </div>
                </div>

                <div className="course-progress-box">
                    <p className="course-progress-label">{Math.round((course.progress / course.totalChapters) * 100)}% complété</p>
                    <div className="course-progress-bar">
                        {course.chapters.map((chap, index) => (
                            <div key={index} className={`course-progress-step ${chap.completed ? "completed" : ""}`} style={chap.progress ? { width: `${chap.progress}%` } : {}}></div>
                        ))}
                    </div>
                </div>



                <div className="course-chapters">
                    {course.chapters.map((chap) => (
                        <div key={chap.id} className={`chapter-item ${chap.completed ? "completed" : ""}`}>
                            <div className="chapter-item-box">
                            <div className={`chapter-circle ${chap.completed ? "completed" : ""} ${chap.progress ? "half-completed" : ""}`}>
                                {chap.id}
                            </div>
                            <p className="chapter-title">{chap.title}</p>
                            </div>
                            
                            <span className="material-symbols-outlined chapter-icon">arrow_forward_ios</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* SECTION EXPERT */}
            {expert && (
                <div className="expert-card">
                    <h4 className="expert-card-title">Rencontrez notre Expert</h4>
                    <div className="expert-card-header">
                        <img className="expert-card-photo" src={expert.photo} alt={expert.name} />
                        <div className="expert-card-info">
                            <div className="expert-card-name">
                                {expert.name}
                                <img className="expert-card-company-logo" src={expert.companyLogo} alt="Company Logo" />
                            </div>
                            <p className="expert-card-position">{expert.position}</p>
                        </div>
                    </div>
                    <p className="expert-card-bio">{expert.bio}</p>
                </div>
            )}
        </div>
    );
};

export default RightBar;