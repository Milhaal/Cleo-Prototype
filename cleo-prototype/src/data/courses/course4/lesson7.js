const lesson7 = {
    id: "lesson7",
    status: "Pas commencé",
    role: "RH",
    title: "IA & Éthique dans les RH",
    description: "Découvrir les meilleures pratiques pour les DRH afin de déployer une IA responsable et humaine.",
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/cleo-prototype.firebasestorage.app/o/Vid%C3%A9os%20Cleo%2FC4-L7.mp4?alt=media&token=a796115c-7af7-460b-8f92-1c0f5cda9da9",
    content: [
      {
        id: "link-course",
        type: "link",
        value: "Ce chapitre est la septième partie de notre cours : ",
        linkText: "IA & Éthique.",
        courseId: "course4"
      },
  
      {
        id: "video1",
        type: "video",
        url: "https://firebasestorage.googleapis.com/v0/b/cleo-prototype.firebasestorage.app/o/Vid%C3%A9os%20Cleo%2FC4-L7.mp4?alt=media&token=a796115c-7af7-460b-8f92-1c0f5cda9da9"
      },
      {
        id: "text1",
        type: "text",
        value: "Les directeurs des ressources humaines doivent jouer un rôle stratégique dans l’intégration de l’IA en s’assurant que les outils technologiques respectent les valeurs de l’entreprise et la réglementation en vigueur."
      },
      {
        id: "subtitle1",
        type: "subtitle",
        value: "Défis et opportunités"
      },
      {
        id: "text2",
        type: "text",
        value: "L’IA offre des opportunités d’automatisation et d’optimisation, mais pose également des questions sur la confidentialité des données et l’équité des décisions. Le DRH doit veiller à la mise en place de processus rigoureux de validation et de contrôle."
      },
      {
        id: "link-lesson",
        type: "link-lesson",
        value: "Dans le prochain chapitre nous aborderons le thème ",
        linkText: "IA & Éthique pour la Formation et le Développement (L&D)",
        nextLessonId: "lesson8"
      }
    ],
    quiz: [
        {
            question: "Quel est le rôle des directeurs des ressources humaines (DRH) dans l’intégration de l’IA ?",
            options: [
                "Déployer l'IA sans supervision pour maximiser l'efficacité.",
                "S'assurer que les outils technologiques respectent les valeurs de l’entreprise et la réglementation.",
                "Se concentrer uniquement sur l’automatisation des processus RH.",
                "Confier entièrement l'intégration de l'IA aux équipes techniques."
            ],
            correct: "S'assurer que les outils technologiques respectent les valeurs de l’entreprise et la réglementation.",
            explanation: "Les DRH doivent garantir que l'IA est alignée avec les valeurs de l'entreprise et conforme aux réglementations en vigueur."
        },
        {
            question: "Quels sont les principaux défis liés à l'intégration de l'IA dans les RH ?",
            options: [
                "L'automatisation excessive de toutes les tâches RH.",
                "La confidentialité des données et l’équité des décisions.",
                "La réduction des effectifs RH grâce à l'IA.",
                "La dépendance accrue aux fournisseurs de solutions IA."
            ],
            correct: "La confidentialité des données et l’équité des décisions.",
            explanation: "L'intégration de l'IA pose des défis majeurs liés à la protection des données des employés et à la garantie de décisions équitables et non biaisées."
        },
        {
            question: "Pourquoi est-il important de mettre en place des processus rigoureux de validation et de contrôle ?",
            options: [
                "Pour éviter les erreurs humaines dans l'utilisation des outils IA.",
                "Pour garantir la transparence et l’éthique des décisions prises par l’IA.",
                "Pour accélérer la mise en œuvre des solutions IA.",
                "Pour satisfaire aux exigences des fournisseurs technologiques."
            ],
            correct: "Pour garantir la transparence et l’éthique des décisions prises par l’IA.",
            explanation: "Les processus rigoureux permettent de s'assurer que l'IA fonctionne de manière transparente et respecte les principes d'équité et d'éthique."
        },
        {
            question: "Quelle est l'une des opportunités majeures offertes par l'IA dans les RH ?",
            options: [
                "La suppression des interactions humaines dans le recrutement.",
                "L’automatisation et l’optimisation des processus RH.",
                "La réduction de la transparence dans les décisions de recrutement.",
                "L’élimination des tâches administratives manuelles sans contrôle."
            ],
            correct: "L’automatisation et l’optimisation des processus RH.",
            explanation: "L'IA permet d'améliorer l'efficacité des processus RH en automatisant des tâches répétitives et en optimisant la gestion des talents."
        }
    ]
  
  };
  
  export default lesson7;