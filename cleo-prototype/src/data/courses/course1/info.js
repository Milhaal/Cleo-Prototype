import experts from "../../ExpertData";

const courseInfo = {
  id: "course1",
  trial: true,
  title: "Améliorez vos process de recrutement avec Copilot",
  difficulty: "Débutant",
  tools: ["Copilot"],
  role: "RH",
  authorId: "lisa_t", 
  description: "Apprenez à utiliser l’IA pour automatiser et améliorer vos processus de recrutement efficacement.",
  about: "L’IA transforme le secteur des ressources humaines en offrant des solutions innovantes pour automatiser et améliorer des tâches clés du recrutement. Ce cours explore l’utilisation de l’IA dans la rédaction d’emails professionnels, l’analyse des comptes rendus d’entretien et la création de questions ciblées pour des rôles spécifiques. En adoptant ces technologies, les équipes RH peuvent réduire le temps consacré aux tâches administratives, améliorer la qualité des interactions avec les candidats et garantir des processus plus fluides et efficaces.",
  skills:
    "À l’issue de ce cours, vous serez capable d’exploiter l’intelligence artificielle pour automatiser et structurer vos communications RH, rédiger des emails clairs et personnalisés, générer des comptes rendus d’entretien précis et concevoir des questions pertinentes adaptées à chaque poste. Vous apprendrez également à éviter les pièges courants et à intégrer ces outils dans vos processus actuels pour optimiser votre gestion du recrutement."
  ,
  syllabus: [
    { id: "lesson1", title: "Questions métier ciblées en entretien grâce à l’IA", status: "Terminé" },
    { id: "lesson2", title: "Rédiger des emails efficaces pour transmettre une étude de cas à un candidat", status: "En cours" },
    { id: "lesson3", title: "Simplifier les débriefs d’entretien avec l’IA", status: "En cours" }
  ]
};

export default courseInfo;