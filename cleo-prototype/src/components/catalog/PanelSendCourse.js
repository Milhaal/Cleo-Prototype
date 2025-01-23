import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Root.css";
import "./PanelSendCourse.css";
import PopupSendCourse from "./PopupSendCourse";
import teamData from "../../data/TeamData";
import courses from "../../data/courses/index-courses";

function PanelSendCourse({ courseId, onClose }) {
    const [course, setCourse] = useState(null);
    const [filteredTeam, setFilteredTeam] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const panelRef = useRef(null);
    const popupRef = useRef(null);

    useEffect(() => {
        document.body.classList.add("modal-open");

        const handleClickOutside = (event) => {
            if (
                panelRef.current && !panelRef.current.contains(event.target) &&
                popupRef.current && !popupRef.current.contains(event.target)
            ) {
                if (isPopupOpen) {
                    setIsPopupOpen(false);
                } else {
                    onClose();
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.body.classList.remove("modal-open");
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose, isPopupOpen]);

    useEffect(() => {
        const selectedCourse = courses.find(c => c.courseId === courseId);
        if (selectedCourse) {
            setCourse({
                title: selectedCourse.courseTitle,
                role: selectedCourse.courseRole,
                description: selectedCourse.description,
            });

            const updatedTeam = teamData
                .map(member => {
                    const courseData = member.courses.find(c => c.id === courseId);
                    if (courseData) {
                        return {
                            id: member.id,
                            name: member.name,
                            profileImage: member.profileImage,
                            status: courseData.status,
                        };
                    }
                    return null;
                })
                .filter(member => member !== null);

            setFilteredTeam(updatedTeam);
        }
    }, [courseId]);

    if (!course) return null;

    return (
        <div className="panel-send-course">
            <div className="panel-send-course-wrapper" ref={panelRef}>
                <div className="panel-send-course-topbar">
                    <span className="material-symbols-outlined" onClick={onClose}>
                        close
                    </span>
                </div>
                <div className="panel-send-course-content">
                    <div className="panel-send-course-content-box">
                        <div className="panel-send-course-content-box-infos">
                            <p className="panel-send-course-content-box-infos-title">{course.title}</p>
                            <p className="panel-send-course-content-box-infos-role">{course.role}</p>
                        </div>
                        <p className="panel-send-course-content-box-description">{course.description}</p>
                        <button
                            className="panel-send-course-content-box-button"
                            onClick={() => setIsPopupOpen(true)}
                        >
                            Envoyer le cours
                        </button>
                        <div className="panel-send-course-content-box-kpis">
                            <div className="panel-send-course-content-box-kpis-row">
                                <div className="panel-send-course-content-box-kpis-card">
                                    <p className="panel-send-course-content-box-kpis-text">Participants</p>
                                    <div className="panel-send-course-content-box-kpis-stat-box">
                                        <p className="panel-send-course-content-box-kpis-stat">{filteredTeam.length}</p>
                                    </div>
                                </div>
                                <div className="panel-send-course-content-box-kpis-card">
                                    <p className="panel-send-course-content-box-kpis-text">En cours</p>
                                    <div className="panel-send-course-content-box-kpis-stat-box">
                                        <p className="panel-send-course-content-box-kpis-stat">
                                            {filteredTeam.filter(member => member.status === "En cours").length}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-send-course-content-box-kpis-row">
                                <div className="panel-send-course-content-box-kpis-card">
                                    <p className="panel-send-course-content-box-kpis-text">Terminé</p>
                                    <div className="panel-send-course-content-box-kpis-stat-box">
                                        <p className="panel-send-course-content-box-kpis-stat">
                                            {filteredTeam.filter(member => member.status === "Terminé").length}
                                        </p>
                                    </div>
                                </div>
                                <div className="panel-send-course-content-box-kpis-card">
                                    <p className="panel-send-course-content-box-kpis-text">Pas commencé</p>
                                    <div className="panel-send-course-content-box-kpis-stat-box">
                                        <p className="panel-send-course-content-box-kpis-stat">
                                            {filteredTeam.filter(member => member.status === "Pas commencé").length}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>

                    <div className="panel-send-course-content-table">
                        <div className="panel-send-course-content-table-topbar">
                            <div className="panel-send-course-content-table-topbar-content">
                                <p className="panel-send-course-content-table-topbar-content-text">Audience</p>
                            </div>
                        </div>
                        <div className="panel-send-course-content-box-wrapper">
                            
                            <div className="panel-send-course-content-table-box">
                                {filteredTeam.length > 0 ? (
                                    filteredTeam.map(member => (
                                        <div key={member.id} className="panel-send-course-content-table-row">
                                            <div className="panel-send-course-content-table-row-infos">
                                                <img
                                                    src={member.profileImage}
                                                    alt={member.name}
                                                    className="panel-send-course-content-table-row-img"
                                                />
                                                <p className="panel-send-course-content-table-row-name">{member.name}</p>
                                            </div>
                                            <div className={`panel-send-course-content-table-row-status ${member.status.toLowerCase().replace(" ", "-")}`}>
                                                <div className="panel-send-course-content-table-row-status-dot"></div>
                                                <span className="panel-send-course-content-table-row-status-text">
                                                    {member.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="panel-send-course-content-table-empty">Aucun participant</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isPopupOpen && (
  <PopupSendCourse onClose={() => setIsPopupOpen(false)} />
)}
        </div>
    );
}

export default PanelSendCourse;