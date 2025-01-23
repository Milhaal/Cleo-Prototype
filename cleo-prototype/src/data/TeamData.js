import courses from "./courses/index-courses";
import toolImages from "./ToolsData";

// Fonction pour récupérer un cours par son ID
const getCourseById = (courseId) => {
  const course = courses.find((c) => c.courseId === courseId);
  if (course) {
    return {
      id: course.courseId,
      name: course.courseTitle,
      role: course.courseRole,
      tool: toolImages[course.courseTools[0]]?.image || "/images/default-tool.png",
    };
  }
  return null;
};

// Données de l'équipe
const teamData = [
  {
    id: 1,
    name: "Pauline Mila-Alonso",
    email: "pauline@cleo.academy",
    lastLogin: "12/01/2025",
    progress: 100,
    profileImage: "/images/pauline-pp.png",
    courses: [
      { id: "course1", status: "Terminé", date: "12/01/2025" },
      { id: "course2", status: "En cours", date: "15/01/2025" }
    ].map((course) => ({
      ...getCourseById(course.id),
      status: course.status,
      date: course.date,
    })),
  },
    {
      id: 2,
      name: "Alexandre Bloch",
      email: "alexandre@cleo.academy",
      lastLogin: "15/01/2025",
      progress: 50,
      profileImage: "/images/alexandre-pp.png",
      courses: [
        { id: "course1", status: "Terminé", date: "12/01/2025" },
        { id: "course2", status: "Pas commencé", date: "15/01/2025" }
      ].map((course) => ({
        ...getCourseById(course.id),
        status: course.status,
        date: course.date,
      })),
    },
    {
      id: 3,
      name: "Anaelle Guez",
      email: "anaelle@cleo.academy",
      lastLogin: "29/12/2024",
      progress: 60,
      profileImage: "/images/anaelle-pp.png",
      courses: [
        { id: "course1", status: "Terminé", date: "12/01/2025" },
        { id: "course2", status: "Pas commencé", date: "15/01/2025" }
      ].map((course) => ({
        ...getCourseById(course.id),
        status: course.status,
        date: course.date,
      })),
    },
    {
      id: 4,
      name: "Naomie Halioua",
      email: "naomie@cleo.academy",
      lastLogin: "04/01/2025",
      progress: 80,
      profileImage: "/images/naomie-pp.png",
      courses: [
        { id: "course1", status: "Terminé", date: "12/01/2025" },
        { id: "course2", status: "Pas commencé", date: "15/01/2025" }
      ].map((course) => ({
        ...getCourseById(course.id),
        status: course.status,
        date: course.date,
      })),
    },
    {
      id: 5,
      name: "Aron Elbase",
      email: "aron@cleo.academy",
      lastLogin: "18/01/2025",
      progress: 35,
      profileImage: "/images/aron-pp.png",
      courses: [
        { id: "course1", status: "Terminé", date: "12/01/2025" },
        { id: "course2", status: "Pas commencé", date: "15/01/2025" }
      ].map((course) => ({
        ...getCourseById(course.id),
        status: course.status,
        date: course.date,
      })),
    },
    {
      id: 6,
      name: "Arthur Stromboni",
      email: "arthur@cleo.academy",
      lastLogin: "22/12/2024",
      progress: 0,
      profileImage: "/images/arthur-pp.png",
      courses: [
        { id: "course1", status: "En cours", date: "12/01/2025" },
        { id: "course2", status: "Pas commencé", date: "15/01/2025" }
      ].map((course) => ({
        ...getCourseById(course.id),
        status: course.status,
        date: course.date,
      })),
    }
    
  ];
  
  
  export default teamData;