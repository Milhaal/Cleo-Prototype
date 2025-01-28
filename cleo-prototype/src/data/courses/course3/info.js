import experts from "../../ExpertData";

const courseInfo = {
  id: "course3",
  trial: true,
  title: "Apprenez à utiliser ChatGPT",
  difficulty: "Débutant",
  tools: ["ChatGPT"],
  role: "Général",
  authorId: "naomie_h", 
  description: "Une introduction à ChatGPT, l'assistant d'IA d'OpenAI.",
  about: "Ce cours, conçu pour les débutants, explique simplement le fonctionnement de ChatGPT et comment l’utiliser efficacement. À travers des tutoriels pratiques, vous apprendrez à créer un compte, rédiger des prompts, et exploiter ChatGPT pour des tâches quotidiennes et professionnelles. Le programme inclut des conseils pour personnaliser votre expérience et améliorer votre productivité.",
  skills:
    "Ce cours couvre le fonctionnement des outils d’IA générative, les techniques de prompt de base et avancées, ainsi que l’utilisation de ChatGPT pour des tâches personnelles et professionnelles. Vous apprendrez également à personnaliser votre expérience avec des GPTs sur mesure et à découvrir des usages méconnus pour optimiser votre utilisation de ChatGPT."
  ,
  syllabus: [
    { id: "lesson1", title: "Introduction à ChatGPT", status: "Terminé" },
    { id: "lesson2", title: "Comment fonctionne ChatGPT", status: "En cours" },
    { id: "lesson3", title: "Mise en route : Accéder à ChatGPT et configurer vos environnements", status: "En cours" },
    { id: "lesson4", title: "Utiliser ChatGPT pour les tâches personnelles", status: "Pas commencé" },
    { id: "lesson5", title: "Utiliser ChatGPT pour des tâches professionnelles", status: "Pas commencé" },
    { id: "lesson6", title: "Rédiger des prompts efficaces pour ChatGPT", status: "Pas commencé" },
    { id: "lesson7", title: "Personnaliser ChatGPT", "status": "Pas commencé" },
    { id: "lesson8", title: "Astuces et conseils pour utiliser ChatGPT", status: "Pas commencé" }
  ]
};

export default courseInfo;