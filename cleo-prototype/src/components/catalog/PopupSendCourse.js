import React, { useState, useRef, useEffect } from "react";
import "../Root.css";
import "./PopupSendCourse.css";
import teamData from "../../data/TeamData";

function PopupSendCourse({ onClose }) {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isCourseSent, setIsCourseSent] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelectAll = () => {
    setSelectAll(true);
    setSelectedEmployees(teamData);
  };

  const handleSelectOne = () => {
    setSelectAll(false);
    setSelectedEmployees([]);
  };

  const toggleEmployeeSelection = (employee) => {
    if (selectedEmployees.includes(employee)) {
      setSelectedEmployees(selectedEmployees.filter((e) => e.id !== employee.id));
    } else {
      setSelectedEmployees([...selectedEmployees, employee]);
    }
  };

  const removeEmployee = (id) => {
    setSelectedEmployees(selectedEmployees.filter((e) => e.id !== id));
  };

  const sendCourse = () => {
    setIsCourseSent(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="popup-send-course" onClick={onClose}>
      <div className="popup-send-course-wrapper" onClick={(e) => e.stopPropagation()}>
        {isCourseSent ? (
          <div className="popup-send-course-confirmation">
            <div className="popup-send-course-wrapper-topbar">
              <p className="popup-send-course-wrapper-topbar-text"></p>
              <span className="material-symbols-outlined" onClick={onClose}>
                close
              </span>
            </div>
            <span className="material-symbols-outlined success-icon">check_circle</span>
            <p>Ce cours à été envoyé à {selectedEmployees.length} employés.</p>


            <div className="popup-send-course-wrapper-bot">

              <a className="popup-send-course-wrapper-bot-btn-blue" onClick={onClose}>
                Terminer
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="popup-send-course-wrapper-topbar">
              <p className="popup-send-course-wrapper-topbar-text">Envoyer le cours</p>
              <span className="material-symbols-outlined" onClick={onClose}>
                close
              </span>
            </div>
            <div className="popup-send-course-wrapper-content">
              <p className="popup-send-course-wrapper-content-title">Audience</p>
              <div className="popup-send-course-wrapper-content-middle">
                <div className="popup-send-course-wrapper-content-select-all-box">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="popup-send-course-wrapper-content-select-all-input"

                  />
                  <label>Toute mon équipe</label>
                </div>
                <div className="popup-send-course-wrapper-content-select-one-box-wrapper">
                  <div className="popup-send-course-wrapper-content-select-one-box">
                    <input
                      type="checkbox"
                      checked={!selectAll}
                      onChange={handleSelectOne}
                      className="popup-send-course-wrapper-content-select-one-input"
                    />
                    <label>Seulement les employés sélectionnés</label>
                    <p className="popup-send-course-wrapper-content-select-one-count">{selectedEmployees.length}</p>
                  </div>
                  {!selectAll && (
                    <>
                      <div
                        className="popup-send-course-wrapper-content-select-one-searchbox"
                        onClick={() => setShowDropdown(!showDropdown)}
                      >
                        <span className="material-symbols-outlined">search</span>
                        <input className="popup-send-course-wrapper-content-select-one-searchbox-input" placeholder="Rechercher" />
                      </div>

                      {showDropdown && (
                        <div className="popup-dropdown" ref={dropdownRef}>
                          {teamData.map((employee) => (
                            <div key={employee.id} className="popup-dropdown-item">
                              <input
                                type="checkbox"
                                checked={selectedEmployees.includes(employee)}
                                onChange={() => toggleEmployeeSelection(employee)}
                              />
                              <img src={employee.profileImage} alt={employee.name} />
                              <p className="popup-send-course-wrapper-selected-item-name">{employee.name}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="popup-send-course-wrapper-selected-box">
                        {selectedEmployees.map((employee) => (
                          <div key={employee.id} className="popup-send-course-wrapper-selected-item">
                            <img src={employee.profileImage} alt={employee.name} />
                            <p className="popup-send-course-wrapper-selected-item-name">{employee.name}</p>
                            <span
                              className="material-symbols-outlined"
                              onClick={() => removeEmployee(employee.id)}
                            >
                              close
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="popup-send-course-wrapper-content-bot">
                {selectedEmployees.length > 0 && (
                  <>
                    <div className="popup-send-course-wrapper-content-bot-img-box">
                      {selectedEmployees.map((employee) => (
                        <img className="popup-send-course-wrapper-content-bot-img" key={employee.id} src={employee.profileImage} alt={employee.name} />
                      ))}
                    </div>

                    <p className="popup-send-course-wrapper-content-bot-name">{selectedEmployees.length} employés vont recevoir ce cours</p>
                  </>
                )}
              </div>
            </div>

            <div className="popup-send-course-wrapper-bot">
              <a className="popup-send-course-wrapper-bot-btn-grey" onClick={onClose}>
                Annuler
              </a>
              <a className="popup-send-course-wrapper-bot-btn-blue" onClick={sendCourse}>
                Envoyer le cours
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PopupSendCourse;