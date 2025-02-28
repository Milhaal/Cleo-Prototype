import React from 'react';
import './NewCourseInfos.css';



const NewCourseInfos = () => {
    return (
        <div className="new-course-container">
            <div className="new-course-title-box">
                <h1 className="new-course-title">Rédiger des Offres d’Emploi qui Attirent et Convertissent</h1>
                <p className="new-course-text">Optimisez vos annonces avec l’IA pour attirer les meilleurs talents.</p>
            </div>
            <div className="new-course-navigation-box">
                <p className="new-course-navigation-text">Chapitre 3/5</p>
                <div className="new-course-navigation-arrow-box">
                    <div className="new-course-navigation-arrow-box-item-white">
                        <span class="material-symbols-outlined new-course-navigation-arrow-box-item-icon">
                            arrow_back_ios
                        </span>
                    </div>
                    <div className="new-course-navigation-arrow-box-item-blue">
                        <span class="material-symbols-outlined new-course-navigation-arrow-box-item-icon">
                            arrow_forward_ios
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCourseInfos;