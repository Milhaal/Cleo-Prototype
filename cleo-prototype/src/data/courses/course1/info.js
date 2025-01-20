import experts from "../../ExpertData";

const courseInfo = {
  id: "course1",
  title: "Mettre en œuvre l'IA dans les processus RH",
  difficulty: "Intermédiaire",
  tools: ["Copilot"],
  role: "RH",
  authorId: "lisa_t",  // Utilisation de l'ID de l'expert au lieu des détails
  description: "Apprenez à utiliser Claude pour automatiser les flux de travail RH.",
  about: "Un professionnel RH jongle entre rédaction et analyse...",
  skills: [
    "Attirer des talents qualifiés",
    "Optimiser les candidatures",
    "Renforcer l'image de l'entreprise"
  ],
  syllabus: [
    { id: "lesson1", title: "Rédiger des offres d'emploi qui attirent", status: "Terminé" },
    { id: "lesson2", title: "Créer des tests de recrutement", status: "En cours" }
  ]
};

export default courseInfo;