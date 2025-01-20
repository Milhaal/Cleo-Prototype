import "../Root.css";
import "./MemberSpaceMain.css";

const courses = [
  {
    tag: "RH",
    title: "Introduction à l’IA pour les RH",
    tools: ["./images/copilot-logo.png", "./images/chatgpt-logo.png"],
    completion: 100,
  },
  {
    tag: "Général",
    title: "Apprenez à utiliser ChatGPT",
    tools: ["./images/chatgpt-logo.png"],
    completion: 70,
  },
  {
    tag: "RH",
    title: "Rédiger des descriptions de postes",
    tools: ["./images/copilot-logo.png"],
    completion: 50,
  },
  {
    tag: "RH",
    title: "L'IA pour l'analyse des RH",
    tools: ["./images/copilot-logo.png", "./images/chatgpt-logo.png"],
    completion: 0,
  },
];

const CourseItem = ({ tag, title, tools, completion }) => (
  <div className="memberspace-content-column-item">
    <div className="memberspace-content-column-item-row">
      <div className="memberspace-content-column-item-course-box">
        <p className="memberspace-content-column-item-course-tag">{tag}</p>
        <p className="memberspace-content-column-item-course-title">{title}</p>
        <div className="memberspace-content-column-item-course-tools-box">
          {tools.map((tool, index) => (
            <img key={index} className="memberspace-content-column-item-course-tools-item" src={tool} alt="Tool" />
          ))}
        </div>
      </div>
      <div className="memberspace-content-column-item-infos-box">
        <div className="memberspace-content-column-item-completion-box">
          <p className="memberspace-content-column-item-completion-rate">{completion}%</p>
          <p className="memberspace-content-column-item-completion-text">Complété</p>
        </div>
      </div>
    </div>
    <div className="memberspace-content-column-item-progressbar">
      <div className={`memberspace-content-column-item-progressbar-green-${completion}`}></div>
    </div>
  </div>
);

function MemberSpaceMain() {
  return (
    <div className="memberspace-wrapper">
      <div className="member-topbar-wrapper">
        <div className="member-topbar">
          <div className="member-topbar-banner"></div>
          <img className="member-topbar-pp" src="./images/naomie-pp.png" alt="Profile" />
        </div>
        <h2 className="member-topbar-title">Bonjour Naomie 👋</h2>
      </div>
      <div className="memberspace-content">
        <div className="memberspace-content-column">
          <h3 className="memberspace-content-column-title">Mes cours</h3>
          <div className="memberspace-content-column-list">
            {courses.map((course, index) => (
              <CourseItem key={index} {...course} />
            ))}
          </div>
        </div>
        <div className="memberspace-content-column">
          <h3 className="memberspace-content-column-title">Mes compétences</h3>
          <div className="memberspace-content-column-item">
            <img className="memberspace-content-column-item-img" src="./images/skills-graph.png" alt="Skills" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberSpaceMain;