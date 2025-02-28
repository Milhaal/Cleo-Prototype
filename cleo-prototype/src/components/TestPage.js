import React from 'react';
import IAComponent from './new-course/IAComponent';
import RightBar from './RightBar';
import './TestPage.css';
import Footer from './Footer';
import { useParams, Link } from "react-router-dom";
import NewCourseInfos from './new-course/NewCourseInfos';
import NewCourseDropdown from './new-course/NewCourseDropdown';
import NewCourseCollapsed from './new-course/NewCourseCollapsed';
import NewCourseCollapsedDuplicate from './new-course/NewCourseCollapsedDuplicate';


const TestPage = () => {
    return (
        <div className="test-page-wrapper">
            <div className="test-page-content-wrapper">
                <div className="page_topbar">
                    <h2 className="page_topbar-title">
                        <Link to="/catalog" className="breadcrumb-link">Catalogue</Link>
                        <span className="material-symbols-outlined page_topbar-icon">chevron_right</span>
                        <span className="current-lesson-title">Ressources Humaines (RH)</span>
                        <span className="material-symbols-outlined page_topbar-icon">chevron_right</span>
                        <span className="current-lesson-title">Introduction à l'IA pour les RH</span>
                    </h2>
                </div>
                <div className="test-page-content">
                    <NewCourseInfos />
                    <video controls className="test-page-video">
                        <source src="https://firebasestorage.googleapis.com/v0/b/cleo-prototype.firebasestorage.app/o/Vid%C3%A9os%20Cleo%2FNewCourseVideo.mp4?alt=media&token=3a0f056d-76bf-4257-9408-a2195e41bff2" type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                    <NewCourseDropdown />
                    <NewCourseCollapsed />
                    <div className='new-course-bloc-container'>
                        <h3 className="new-course-subtitle">Testez votre niveau</h3>
                        <IAComponent />
                    </div>
                    <NewCourseCollapsedDuplicate />
                    <div className='new-course-bloc-container'>
                        <h3 className="new-course-subtitle">Validez vos acquis</h3>
                        <IAComponent />
                    </div>
                    <p className='new-course-text'>Dans le <span className='new-course-text-blue'>prochain chapitre</span>, nous examinerons de plus près comment créer des tests de recrutement et évaluer les compétences.</p>
                    <Footer />
                </div>
            </div>

            <RightBar />

        </div>
    );
};

export default TestPage;