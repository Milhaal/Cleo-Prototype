const lesson8 = {
    id: "lesson8",
    status: "Pas commencé",
    role: "L&D",
    title: "IA & Éthique pour la Formation et le Développement",
    description: "Apprendre à utiliser l’IA pour développer les compétences des équipes de manière responsable.",
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/cleo-prototype.firebasestorage.app/o/Vid%C3%A9os%20Cleo%2FC4-L8.mp4?alt=media&token=6eacb413-135f-49eb-ae69-7e57299baf1e",
    content: [
      {
        id: "link-course",
        type: "link",
        value: "Ce chapitre est la huitième partie de notre cours : ",
        linkText: "IA & Éthique.",
        courseId: "course4"
      },
  
      {
        id: "video1",
        type: "video",
        url: "https://firebasestorage.googleapis.com/v0/b/cleo-prototype.firebasestorage.app/o/Vid%C3%A9os%20Cleo%2FC4-L8.mp4?alt=media&token=6eacb413-135f-49eb-ae69-7e57299baf1e"
      },
      {
        id: "text1",
        type: "text",
        value: "Les départements de formation (L&D) doivent adapter leurs stratégies pour accompagner la montée en compétences des collaborateurs face aux changements induits par l’IA."
      },
      {
        id: "subtitle1",
        type: "subtitle",
        value: "Stratégies de formation adaptées"
      },
      {
        id: "text2",
        type: "text",
        value: "L’IA peut faciliter l’apprentissage personnalisé, mais elle doit être utilisée de manière transparente et inclusive pour éviter les discriminations dans l’accès aux formations."
      },
      {
        id: "link-lesson",
        type: "link-lesson",
        value: "Dans le prochain chapitre nous aborderons le thème ",
        linkText: "IA & Éthique dans les Postes Stratégiques",
        nextLessonId: "lesson9"
      }
    ],
    quiz: [
        {
            question: "Quel est l'impact de l'IA sur les stratégies de formation et de développement (L&D) ?",
            options: [
                "Elle permet d'automatiser complètement la formation sans intervention humaine.",
                "Elle accompagne la montée en compétences des collaborateurs face aux évolutions technologiques.",
                "Elle remplace les formateurs et les responsables L&D.",
                "Elle élimine le besoin de personnalisation des parcours de formation."
            ],
            correct: "Elle accompagne la montée en compétences des collaborateurs face aux évolutions technologiques.",
            explanation: "L'IA aide les départements L&D à adapter leurs stratégies pour développer les compétences des collaborateurs en réponse aux changements technologiques."
        },
        {
            question: "Pourquoi est-il important d'utiliser l'IA de manière transparente et inclusive dans la formation ?",
            options: [
                "Pour assurer que tous les collaborateurs bénéficient des mêmes opportunités de formation.",
                "Pour réduire les coûts en limitant l'accès aux formations.",
                "Pour éviter que les employés ne posent trop de questions sur l'utilisation de l'IA.",
                "Pour automatiser complètement le processus de formation sans supervision humaine."
            ],
            correct: "Pour assurer que tous les collaborateurs bénéficient des mêmes opportunités de formation.",
            explanation: "L'utilisation transparente et inclusive de l'IA garantit l'équité dans l'accès aux formations et permet d'éviter toute discrimination."
        },
        {
            question: "Quel est l'un des principaux avantages de l'IA dans la formation des collaborateurs ?",
            options: [
                "La possibilité de proposer un apprentissage personnalisé en fonction des besoins individuels.",
                "La réduction du nombre de formations disponibles pour optimiser les coûts.",
                "L’évaluation automatique des collaborateurs sans critères définis.",
                "La suppression des interactions humaines pour un apprentissage 100% automatisé."
            ],
            correct: "La possibilité de proposer un apprentissage personnalisé en fonction des besoins individuels.",
            explanation: "L'IA permet de personnaliser les formations en fonction des besoins spécifiques de chaque collaborateur, améliorant ainsi leur efficacité."
        },
        {
            question: "Comment les départements L&D doivent-ils adapter leurs stratégies face à l'IA ?",
            options: [
                "En abandonnant les méthodes de formation traditionnelles au profit de l’IA.",
                "En intégrant des outils IA tout en garantissant l'équité et la transparence.",
                "En réduisant l'implication des formateurs dans le processus d'apprentissage.",
                "En limitant l'utilisation de l'IA aux formations techniques uniquement."
            ],
            correct: "En intégrant des outils IA tout en garantissant l'équité et la transparence.",
            explanation: "Les départements L&D doivent utiliser l'IA de manière éthique, en veillant à ce qu'elle soit accessible et équitable pour tous les collaborateurs."
        }
    ]
  
  };
  
  export default lesson8;