import "../Root.css";
import "./DashboardMain.css";

function DashboardMain() {
  return (
    <div className="page_wrapper">
      <div className="page_topbar">
        <h2 className="page_topbar-title">Dashboard</h2>
      </div>
      <div className="dashboard-wrapper">
        <div className="dashboard-kpi-wrapper">
          <div className="dashboard-column">
            <div className="dashboard-card dashboard-card-green-full">
              <p className="dashboard-card-title dashboard-card-title-white">Dans l’ensemble</p>
              <p className="dashboard-card-stat dashboard-card-stat-white">Fort</p>
              <p className="dashboard-card-description dashboard-card-description-white">Ajoutez des cours à suivre pour vos employés afin de renforcer leur maîtrise de l’IA.</p>
            </div>
            <div className="dashboard-card">
              <p className="dashboard-card-title">Meilleurs apprenants</p>
              <div className="dashboard-card-best-learner-box">
                <img className="dashboard-card-best-learner-box-img" src="./images/pauline-pp.png"></img>
                <div className="dashboard-card-best-learner-box-wrap">
                  <p className="dashboard-card-best-learner-box-name">Pauline Mila-Alonso</p>
                  <p className="dashboard-card-description"><span className=" dashboard-card-description-green">15 cours</span> en 1 mois</p>

                </div>
              </div>
              <div className="dashboard-card-grey-box">
                <div className="dashboard-card-beast-learners-item">
                  <div className="dashboard-card-beast-learners-item-box">
                    <img className="dashboard-card-beast-learners-item-img" src="./images/alexandre-pp.png"></img>
                    <p className="dashboard-card-beast-learners-item-name">Alexandre Bloch</p>
                  </div>
                  <p className="dashboard-card-beast-learners-item-infos">10 cours</p>
                </div>
                <div className="dashboard-card-beast-learners-item">
                  <div className="dashboard-card-beast-learners-item-box">
                    <img className="dashboard-card-beast-learners-item-img" src="./images/anaelle-pp.png"></img>
                    <p className="dashboard-card-beast-learners-item-name">Anaelle Guez</p>
                  </div>
                  <p className="dashboard-card-beast-learners-item-infos">8 cours</p>
                </div>
                <div className="dashboard-card-beast-learners-item">
                  <div className="dashboard-card-beast-learners-item-box">
                    <img className="dashboard-card-beast-learners-item-img" src="./images/aron-pp.png"></img>
                    <p className="dashboard-card-beast-learners-item-name">Aron Elbase</p>
                  </div>
                  <p className="dashboard-card-beast-learners-item-infos">5 cours</p>
                </div>
                <div className="dashboard-card-beast-learners-item">
                  <div className="dashboard-card-beast-learners-item-box">
                    <img className="dashboard-card-beast-learners-item-img" src="./images/naomie-pp.png"></img>
                    <p className="dashboard-card-beast-learners-item-name">Naomie Halioua</p>
                  </div>
                  <p className="dashboard-card-beast-learners-item-infos">4 cours</p>
                </div>

              </div>
            </div>
          </div>
          <div className="dashboard-column">
            <div className="dashboard-card dashboard-card-green-border">
              <p className="dashboard-card-title">Feedback des employés</p>
              <div className="dashboard-card-infos-box">
                <div className="dashboard-card-stat-box">
                  <p className="dashboard-card-stat dashboard-card-stat-green">4.7</p>
                  <img className="dashboard-card-stat-icon" src="./images/green-star-icon.png"></img>
                </div>
                <div className="dashboard-card-infos-evolve-box">
                  <div className="dashboard-card-infos-evolve-img-box">
                    <img className="dashboard-card-infos-evolve-img" src="./images/up-green-icon.png"></img>
                  </div>
                  <div className="dashboard-card-description">
                    <div className="dashboard-card-description-green">
                      <p>+0.3</p>
                    </div>
                    <p>en 30 jours</p>
                  </div>
                </div>
              </div>
              <p className="dashboard-card-description">Retours positifs sur <span className="dashboard-card-description-grey-box">10 votes</span></p>
            </div>
            <div className="dashboard-card dashboard-card-green-border">
              <p className="dashboard-card-title">Taux d’achèvement</p>
              <div className="dashboard-card-infos-box">
                <div className="dashboard-card-stat-box">
                  <p className="dashboard-card-stat dashboard-card-stat-green">67%</p>
                </div>
                <div className="dashboard-card-infos-evolve-box">
                  <div className="dashboard-card-infos-evolve-img-box">
                    <img className="dashboard-card-infos-evolve-img" src="./images/up-green-icon.png"></img>
                  </div>
                  <div className="dashboard-card-description">
                    <div className="dashboard-card-description-green">
                      <p>+11%</p>
                    </div>
                    <p>en 30 jours</p>
                  </div>
                </div>
              </div>
              <p className="dashboard-card-description">des cours commencés sont terminés. </p>
            </div>
            <div className="dashboard-card dashboard-card-orange-border">
              <p className="dashboard-card-title">Moyenne des cours</p>
              <div className="dashboard-card-infos-box">
                <div className="dashboard-card-stat-box">
                  <p className="dashboard-card-stat dashboard-card-stat-orange">1.4</p>
                </div>

              </div>
              <p className="dashboard-card-description">cours suivis en moyenne</p>
              <div className="dashboard-card-border-box">
                <img className="dashboard-card-border-box-img" src="./images/info-icon.png"></img>
                <p className="dashboard-card-border-box-text">C’est le nombre moyen de cours suivis par un employé de votre équipe.</p>
              </div>
            </div>
          </div>
          <div className="dashboard-column">
            <div className="dashboard-card dashboard-card-red-border">
              <p className="dashboard-card-title">Abandons</p>
              <div className="dashboard-card-infos-box">
                <div className="dashboard-card-stat-box">
                  <p className="dashboard-card-stat dashboard-card-stat-red">1</p>
                </div>
                <div className="dashboard-card-infos-evolve-box">
                  <div className="dashboard-card-infos-evolve-img-box dashboard-card-infos-evolve-img-box-red">
                    <img className="dashboard-card-infos-evolve-img" src="./images/up-red-icon.png"></img>
                  </div>
                  <div className="dashboard-card-description">
                    <div className="dashboard-card-description-red">
                      <p>+1</p>
                    </div>
                    <p>récemment</p>
                  </div>
                </div>
              </div>
              <p className="dashboard-card-description">employés inactifs <span className="dashboard-card-description-grey-box">récemment</span></p>
              <div className="dashboard-card-border-box">
                <img className="dashboard-card-border-box-img" src="./images/info-icon.png"></img>
                <p className="dashboard-card-border-box-text">Un employé inactif est une personne qui est restée sans activité pendant au moins 2 semaines.</p>
              </div>
              <div className="dashboard-card-grey-box">
                <div className="dashboard-card-beast-learners-item">
                  <div className="dashboard-card-beast-learners-item-box">
                    <img className="dashboard-card-beast-learners-item-img" src="./images/arthur-pp.png"></img>
                    <div className="dashboard-card-beast-learners-item-infos-box">
                      <p className="dashboard-card-beast-learners-item-name">Arthur Stromboni</p>
                      <p className="dashboard-card-beast-learners-item-infos">Inactif depuis 19 jours</p>

                    </div>
                  </div>

                </div>


              </div>
            </div>
            <div className="dashboard-card dashboard-card-green-border">
              <p className="dashboard-card-title">Taux d’abandon</p>
              <div className="dashboard-card-infos-box">
                <div className="dashboard-card-stat-box">
                  <p className="dashboard-card-stat dashboard-card-stat-green">7%</p>
                </div>
                <div className="dashboard-card-infos-evolve-box">
                  <div className="dashboard-card-infos-evolve-img-box">
                    <img className="dashboard-card-infos-evolve-img" src="./images/down-green-icon.png"></img>
                  </div>
                  <div className="dashboard-card-description">
                    <div className="dashboard-card-description-green">
                      <p>-8%</p>
                    </div>
                    <p>en 30 jours</p>
                  </div>
                </div>
              </div>
              <p className="dashboard-card-description">cours abandonnés <span className="dashboard-card-description-grey-box">en 30 jours</span></p>
              <div className="dashboard-card-border-box">
                <img className="dashboard-card-border-box-img" src="./images/info-icon.png"></img>
                <p className="dashboard-card-border-box-text">C’est 25 % de moins que le taux d’abandon moyen.</p>
              </div>
              <div className="dashboard-card-progressbar-box">
              <div className="dashboard-card-progressbar-box-item">
              <div className="dashboard-card-progressbar-box-bar">
  
  </div>
  </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardMain;