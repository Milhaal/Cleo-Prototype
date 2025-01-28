const lesson4 = {
    id: "lesson4",
    status: "En cours",
    role: "Consultants",
    title: "IA & Éthique pour les consultants",
    description: "Les consultants aident à implémenter des solutions IA tout en respectant les principes éthiques.",
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/cleo-prototype.firebasestorage.app/o/Vid%C3%A9os%20Cleo%2FC4-L4.mp4?alt=media&token=fb672237-fe2c-45e2-8082-b48999277c67",
    content: [
      {
        id: "link-course",
        type: "link",
        value: "Ce chapitre est la quatrième partie de notre cours : ",
        linkText: "IA & Éthique.",
        courseId: "course4"
      },
  
      {
        id: "video1",
        type: "video",
        url: "https://firebasestorage.googleapis.com/v0/b/cleo-prototype.firebasestorage.app/o/Vid%C3%A9os%20Cleo%2FC4-L4.mp4?alt=media&token=fb672237-fe2c-45e2-8082-b48999277c67"
      },
      {
        id: "text1",
        type: "text",
        value: "Les consultants spécialisés en IA accompagnent les entreprises dans l’implémentation responsable de ces technologies. Leur rôle est d’identifier les besoins spécifiques et de proposer des solutions éthiques adaptées."
      },
      {
        id: "subtitle1",
        type: "subtitle",
        value: "Leur rôle dans la gouvernance"
      },
      {
        id: "text2",
        type: "text",
        value: "Ils aident à instaurer des politiques internes garantissant la transparence des processus et l’équité des décisions prises par les IA. Les consultants doivent également sensibiliser les différentes parties prenantes aux risques potentiels."
      },
      {
        id: "subtitle2",
        type: "subtitle",
        value: "Conseils pratiques"
      },
      {
        id: "text3",
        type: "text",
        value: "La mise en place d'une charte éthique et la formation continue des équipes sont des éléments clés pour réussir une intégration IA responsable."
      },
      {
        id: "link-lesson",
        type: "link-lesson",
        value: "Dans le prochain chapitre nous aborderons le thème ",
        linkText: "IA & Éthique dans les relations clients",
        nextLessonId: "lesson5"
      }
    ],
    quiz: [
        {
            question: "Quel est le rôle principal des consultants spécialisés en IA ?",
            options: [
                "Développer des algorithmes IA pour les entreprises.",
                "Accompagner les entreprises dans l’implémentation responsable des technologies IA.",
                "Superviser la maintenance des infrastructures IA.",
                "Automatiser l’ensemble des processus métiers avec l’IA."
            ],
            correct: "Accompagner les entreprises dans l’implémentation responsable des technologies IA.",
            explanation: "Les consultants en IA jouent un rôle clé dans l’accompagnement des entreprises pour garantir une mise en œuvre éthique et responsable des solutions IA."
        },
        {
            question: "Comment les consultants contribuent-ils à la gouvernance des solutions IA ?",
            options: [
                "En instaurant des politiques internes garantissant la transparence et l'équité.",
                "En remplaçant les équipes internes dans la gestion des solutions IA.",
                "En réduisant les coûts d’implémentation grâce à l'automatisation complète.",
                "En développant des modèles d'IA uniquement orientés vers la performance."
            ],
            correct: "En instaurant des politiques internes garantissant la transparence et l'équité.",
            explanation: "Les consultants aident à établir des politiques garantissant la transparence des processus IA et la prise de décisions éthiques."
        },
        {
            question: "Quel élément est essentiel pour assurer une intégration IA responsable ?",
            options: [
                "L’automatisation complète sans intervention humaine.",
                "La mise en place d'une charte éthique et la formation continue des équipes.",
                "L’externalisation complète de la gouvernance IA à des prestataires externes.",
                "L'adoption des technologies IA les plus récentes sans évaluation des risques."
            ],
            correct: "La mise en place d'une charte éthique et la formation continue des équipes.",
            explanation: "Une charte éthique et la formation continue sont essentielles pour assurer une utilisation responsable et conforme aux bonnes pratiques."
        },
        {
            question: "Pourquoi la sensibilisation des parties prenantes aux risques IA est-elle importante ?",
            options: [
                "Pour garantir une adoption rapide de l’IA sans résistance.",
                "Pour minimiser les coûts liés à la mise en œuvre des solutions IA.",
                "Pour assurer une compréhension commune des risques et garantir une utilisation responsable.",
                "Pour transférer la responsabilité des décisions IA aux fournisseurs de solutions."
            ],
            correct: "Pour assurer une compréhension commune des risques et garantir une utilisation responsable.",
            explanation: "Sensibiliser les parties prenantes permet de mieux comprendre les implications éthiques et d’adopter des pratiques responsables dans l’utilisation de l’IA."
        }
    ]
  
  };
  
  export default lesson4;