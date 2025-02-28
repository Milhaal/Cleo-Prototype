import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./components/Root.css";
import LeftBar from "./components/LeftBar";
import TeamMain from "./components/team/TeamMain";
import TeamMember from "./components/team/TeamMember";
import CatalogMain from "./components/catalog/CatalogMain";
import CoursePage from "./components/catalog/CoursePage";
import LessonPage from "./components/catalog/LessonPage";
import MemberSpaceMain from "./components/member-space/MemberSpaceMain";
import DashboardMain from "./components/dashboard/DashboardMain";
import TestPage from "./components/TestPage"; 
import "./App.css";
import PromptComponent from "./components/PromptComponent";

function Layout() {
  const location = useLocation();
  const isPromptPage = location.pathname === "/prompt-component";

  return (
    <>
      {!isPromptPage && <LeftBar />}
      <div className={!isPromptPage ? "pages_wrapper" : ""}>
        <Routes>
          <Route path="/" element={<DashboardMain />} />
          <Route path="/team" element={<TeamMain />} />
          <Route path="/profile/:id" element={<TeamMember />} />
          <Route path="/catalog" element={<CatalogMain />} />
          <Route path="/catalog/courses/:courseId" element={<CoursePage />} />
          <Route path="/catalog/courses/:courseId/lesson/:lessonId" element={<LessonPage />} />
          <Route path="/memberspace" element={<MemberSpaceMain />} />
          <Route path="/new-course" element={<TestPage />} /> 
          <Route path="/prompt-component" element={<PromptComponent />} /> 
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;